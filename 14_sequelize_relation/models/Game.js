const GameModel = (sequelize, DataTypes) => {
  const Game = sequelize.define(
    "Game",
    {
      game_id: {
        type: DataTypes.INTEGER,
        primary: true,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Game;
};
module.exports = GameModel;
