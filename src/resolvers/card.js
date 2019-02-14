import Sequelize from "sequelize";
import { combineResolvers } from "graphql-resolvers";

import { isAdmin, isAuthenticated } from "./authorization";

const toCursorHash = string => Buffer.from(string).toString("base64");

const fromCursorHash = string =>
  Buffer.from(string, "base64").toString("ascii");

export default {
  Query: {
    cards: async (parent, { cursor, limit = 100 }, { models }) => {
      const cursorOptions = cursor
        ? {
            where: {
              createdAt: {
                [Sequelize.Op.lt]: fromCursorHash(cursor)
              }
            }
          }
        : {};

      const cards = await models.Card.findAll({
        order: [["createdAt", "DESC"]],
        limit: limit + 1,
        ...cursorOptions
      });

      const hasNextPage = cards.length > limit;
      const edges = hasNextPage ? cards.slice(0, -1) : cards;

      return {
        edges,
        pageInfo: {
          hasNextPage,
          endCursor: toCursorHash(edges[edges.length - 1].createdAt.toString())
        }
      };
    },
    card: async (parent, { id }, { models }) => {
      return await models.Card.findById(id);
    }
  },

  Mutation: {
    createCard: combineResolvers(
      isAdmin,
      async (parent, { deckId, front, back }, { models }) => {
        const card = await models.Card.create({
          deckId,
          front,
          back
        });
        return card;
      }
    ),

    deleteCard: combineResolvers(
      isAdmin,
      async (parent, { id }, { models }) => {
        return await models.Card.destroy({
          where: { id }
        });
      }
    )
  },

  Card: {
    deck: async (card, args, { loaders }) => {
      return await loaders.deck.load(card.deckId);
    }
  }
};