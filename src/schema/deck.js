import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    decks(cursor: String, limit: Int): DeckConnection!
    deck(id: ID, deckname: String, tag: String): Deck!
  }

  extend type Mutation {
    """
    Creates a deck -
    Deck name is required is required!
    """
    createDeck(deckname: String!, description: String!): Deck!

    """
    Deletes a deck
    """
    deleteDeck(id: ID!): Boolean!
  }

  type DeckConnection {
    edges: [Deck!]!
    pageInfo: DeckPageInfo!
  }

  type DeckPageInfo {
    hasNextPage: Boolean!
    endCursor: String!
  }

  type Deck {
    id: ID!

    """
    Name of the deck
    """
    deckname: String!

    """
    Description of the deck
    """
    description: String!
    createdAt: Date!
    user: User!
    cards: [Card!]
  }
`;
