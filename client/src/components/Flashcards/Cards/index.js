import React from "react";
//Do we need withRouter here?
import { withRouter } from "react-router-dom";
import { shuffle } from "lodash";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import withAuthorization from "../../Session/withAuthorization";

import Loading from "../../Loading";
import CardDeck from "./CardDeck";

const CARDS_QUERY = gql`
  query CardsQuery($id: ID!) {
    deck(id: $id) {
      id
      cards {
        id
        front
        back
      }
    }
  }
`;

export const Cards = (props, { deck }) => {
  console.log(props);
  let { id } = props.match.params;
  id = parseInt(id);
  console.log(deck);
  return (
    <Query query={CARDS_QUERY} variables={{ id }}>
      {({ data, error, loading }) => {
        if (loading) {
          return <Loading />;
        }
        if (error) {
          return <p>Error</p>;
        }
        console.log(data.deck.cards);

        const shuffledCards = shuffle(data.deck.cards);
        const withCount = shuffledCards.slice(
          0,
          parseInt(props.location.state.count)
        );
        console.log(props.location.state.count);
        console.log(withCount);

        return <CardDeck cards={withCount} />;
      }}
    </Query>
  );
};

export default withAuthorization(session => session && session.me)(
  withRouter(Cards)
);
