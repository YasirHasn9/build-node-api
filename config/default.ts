export default {
  port: process.env.MONGO_PORT ? Number(process.env.MONGO_PORT) : 8080,
  host: "localhost",
  dbUri: `mongodb+srv://${process.env.MONGO_USERNAME}:lExOXHALut4LTHzK@cluster0.8ykgt.mongodb.net`,
};
