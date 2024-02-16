const Visitor = function (Sequelize, DataTypes) {
  // Sequelize는 model/index.js 의 sequelize
  // Datatypes 는 model/index.js 의 sequelize

  // const model = Sequelize.define(params1, params2, params3);
  // params1 : 모델 이름 설정
  // params2 : 칼럼을 정의, (CREATE TABLE 제약조건)
  // params3 : 모델 옵션
  const model = Sequelize.define(
    "Visitor",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor",
      timestamp: false,
      freezeTableName: true,
    }
  );

  return model;
};

module.exports = Visitor;
