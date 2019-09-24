const card = (sequelize, DataTypes) => {
  const Card = sequelize.define("card", {
    front: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Front of the card must have text."
        }
      }
    },
    pictureName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pictureUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    back: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  Card.associate = models => {
    Card.belongsTo(models.Deck);
  };
  return Card;
};
export default card;
