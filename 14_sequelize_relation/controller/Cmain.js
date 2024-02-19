// const models = require("../models");
// models={Player, Profile, ..., sequelize, Sequelize}
const { Op } = require("sequelize");
const { Player, Profile, Team } = require("../models");
exports.main = (req, res) => {
  res.render("index");
};

// GET /players
// 전체 선수 목록 가지고오기
exports.getAllPlayer = async (req, res) => {
  try {
    const players = await Player.findAll();
    console.log(players);
    res.send(players);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// GET /players/:playerId
// 선수 한 명 조회 (Player, Profile)
exports.getPlayer = async (req, res) => {
  try {
    console.log(req.params); //{playerId:1}
    const { playerId } = req.params;
    const player = await Player.findOne({
      where: {
        player_id: playerId,
      },
      include: [{ model: Profile, attributes: ["position", "salary"] }],
      // include: 두 테이블을 합쳐서 보여줌(inner join)
    });

    res.json(player);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// {name, age, teamid}=req.body
exports.postPlayer = async (req, res) => {
  try {
    const { name, age, teamid } = req.body;
    const newPlayer = await Player.create({
      // 보내려는 변수 name, DB컬럼명도 name
      //   xx:xx 형태가 아닌 name만 써도 ok
      name,
      age,
      teamid,
    });
    console.log(newPlayer);
    res.json(newPlayer);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// PATCH /players/:playerId/team
// {playerId} req.params, 어떤 선수를
// {teamid} req.body, 어떤 팀으로 변경할건지
exports.patchPlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    const { teamid } = req.body;

    const updatedPlayer = await Player.update(
      {
        teamid,
      },
      {
        where: { player_id: playerId },
      }
    );

    console.log(updatedPlayer);
    res.json(updatedPlayer);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// DELETE /players/:playerId
exports.deletePlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    const isDeleted = await Player.destroy({
      where: {
        player_id: playerId,
      },
    });

    console.log(isDeleted); // 1(true) 0(false)
    if (isDeleted) {
      res.send("삭제 성공");
    } else {
      res.send("삭제 실패");
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

exports.getTeams = async (req, res) => {
  try {
    console.log(req.query);
    const { sort, search } = req.query;
    let teams;

    //   sort = name_asc >> 전체 조회 및 이름순 팀 정렬
    //   search=[팀이름] >> 특정 팀 이름만 조회

    if (sort === "name_asc") {
      // 이름 오름차순 정렬
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        order: [["name", "ASC"]], //ORDER BY name ASC
      });
    } else if (search) {
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        where: {
          // WHERE name LIKE '%KT%'
          name: { [Op.like]: `%${search}%` },
        },
      });
    } else {
      // sort 에 name_asc외의 문자열이 들어오거나
      // sort search 가 전달되지 않았을 때
      // (미션) Team 테이블의 team_id, name 컬럼 보여주기
      // SELECT team_id, name FROM team
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
      });
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server err");
  }
};
