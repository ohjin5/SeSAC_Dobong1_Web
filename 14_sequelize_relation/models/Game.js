const Game = function (Sequelize, DataTypes) {
  // Sequelize는 model/index.js 의 sequelize
  // Datatypes 는 model/index.js 의 sequelize

  // const model = Sequelize.define(params1, params2, params3);
  // params1 : 모델 이름 설정
  // params2 : 칼럼을 정의, (CREATE TABLE 제약조건)
  // params3 : 모델 옵션
  const model = Sequelize.define(
    "Game",
    {
      game_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
      },
      location: {
        type: DataTypes.STRING(10),
      },
    },
    {
      tableName: "game",
      timestamp: false,
      freezeTableName: true,
    }
  );

  return model;
};

module.exports = Game;
