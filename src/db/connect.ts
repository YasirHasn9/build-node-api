import mongoose from "mongoose";
import config from "config";

export default function connect() {
  const dbUri = config.get("dbUri") as string;

  mongoose
    .connect(dbUri, {
      w: "majority",
      retryWrites: true,
    })
    .then(() => console.log("Connection Success"))
    .catch((err) => {
      console.log("Connection Failed: ", err);
      process.exit(1);
    });
}
