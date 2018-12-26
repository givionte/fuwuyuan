const deck = (sequelize, DataTypes) => {
  const Deck = sequelize.define("deck", {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "A deck must have a name."
        }
      }
    }
  });

  Deck.associate = models => {
    Deck.belongsTo(models.User);
  };
  return Deck;
};
export default deck;
