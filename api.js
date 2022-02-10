require("dotenv").config();
console.log(process.env.API_HOST);
console.log(process.env.API_KEY);
const options = {
  method: "POST",
  url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
  params: { sign: "Aries", day: "today" },
  headers: {
    "x-rapidapi-host": process.env.API_KEY,
    "x-rapidapi-key": process.env.API_HOST,
  },
};

module.exports = options;
