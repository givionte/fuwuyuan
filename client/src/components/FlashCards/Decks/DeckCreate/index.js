import React, { useState, useRef } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import * as Styled from "../../../../theme/Popup";
import Button from "../../../../theme/Button";
import useOuterClickNotifier from "../../../Alerts";

import ErrorMessage from "../../../Error";
import GET_PAGINATED_DECKS_WITH_USERS from "../DeckSchema";

const CREATE_DECK = gql`
  mutation($deckName: String!, $description: String!) {
    createDeck(deckName: $deckName, description: $description) {
      id
      deckName
      description
      createdAt
      user {
        id
        username
      }
      cards {
        id
        front
        back
      }
      tags {
        id
        tagName
      }
    }
  }
`;

const Container = styled.div``;

const DeckCreate = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [deckState, setDeckState] = useState({
    deckName: "",
    description: ""
  });

  const { deckName, description } = deckState;

  const onSubmit = async (e, createDeck) => {
    e.preventDefault();

    try {
      setDeckState({ deckName: "", description: "" });
      await createDeck();
    } catch (error) {}
  };

  const onChange = e =>
    setDeckState({ ...deckState, [e.target.name]: e.target.value });

  const togglePopup = () => {
    setShowPopup(false);
  };

  const innerRef = useRef(null);
  useOuterClickNotifier(e => setShowPopup(false), innerRef);

  return (
    <Container>
      <Button type="button" onClick={() => setShowPopup(true)}>
        Create Deck
      </Button>

      {showPopup ? (
        <Mutation
          mutation={CREATE_DECK}
          variables={{ deckName, description }}
          update={(cache, { data: { createDeck } }) => {
            const data = cache.readQuery({
              query: GET_PAGINATED_DECKS_WITH_USERS
            });

            cache.writeQuery({
              query: GET_PAGINATED_DECKS_WITH_USERS,
              data: {
                ...data,
                decks: {
                  ...data.decks,
                  edges: [createDeck, ...data.decks.edges],
                  pageInfo: data.decks.pageInfo
                }
              }
            });
          }}
        >
          {(createDeck, { data, loading, error }) => (
            <Styled.PopupContainer>
              <Styled.PopupInner ref={innerRef}>
                <Styled.PopupTitle>
                  Create a name and description for your deck...
                </Styled.PopupTitle>
                <Styled.PopupBody>
                  <form onSubmit={e => onSubmit(e, createDeck)}>
                    <Styled.Input
                      name="deckName"
                      value={deckName}
                      onChange={onChange}
                      type="text"
                      placeholder="Your deck name ... (REQUIRED)"
                    />
                    <Styled.InputTextArea
                      name="description"
                      value={description}
                      onChange={onChange}
                      type="text"
                      placeholder="Add details and descriptions ..."
                    />
                    <Button type="submit">Submit</Button>

                    {error && <ErrorMessage error={error} />}
                  </form>
                </Styled.PopupBody>
                <Styled.PopupFooterButton onClick={togglePopup}>
                  Close
                </Styled.PopupFooterButton>
              </Styled.PopupInner>
            </Styled.PopupContainer>
          )}
        </Mutation>
      ) : null}
    </Container>
  );
};

export default DeckCreate;
