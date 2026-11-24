const { username, password } = process.env;

export const connectionStr =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.gbjfrfz.mongodb.net/resto-db?";
