const dataBase = require("./db");
const createProffy = require("./createProffy");

dataBase.then(async (db) => {
  // função curta (() =>{
  //
  // })

  //inserir dados
  proffyValue = {
    name: "art",
    avatar:
      "https://avatars0.githubusercontent.com/u/68568918?s=460&u=1bbca25ab761b6f3b346aadc69840f451e4794ee&v=4",
    whatsapp: "1",
    bio: "oi :)",
  };

  classValue = {
    subject: 1,
    cost: "65",
    // o proffy_id virá pelo banco de dados
  };

  classScheduleValues = [
    //class_id virá pelo banco de dados, após cadastrarmos  a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 0,
      time_from: 720,
      time_to: 1220,
    },
  ];

  //await createProffy(db, { proffyValue, classValue, classScheduleValues });
  //consultar os dados inseridos

  //todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys");

  //consultar as classes de um determinado professor
  //e junto, trazer seus dados
  const selectClassAndProffys = await db.all(`
  SELECT classes.*, proffys.*
  FROM proffys
  JOIN classes ON (classes.proffy_id = proffys.id)
  WHERE classes.proffy_id = 1;
  `);
  //console.log(selectClassAndProffys);

  //o horário que a pessoa trabalha, por exemplo, é das 8, até as 18
  // o horário do time_from(8h) precisa ser menor ou igual ao horário solicitado
  // o time_to precisa ser acima

  const selectClassesSchedules = await db.all(`
  SELECT class_schedule.*
  FROM class_schedule
  WHERE class_schedule.class_id = "1"
  AND class_schedule.weekday = "0"
  AND class_schedule.time_from <= "820"
  AND class_schedule.time_to > "520"
  `);
  // console.log(selectClassesSchedules);

  
});

//* = TUDO
