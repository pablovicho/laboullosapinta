module.exports = ({ env }) => ({
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: "https://laboullosapinta.herokuapp.com/admin",
});
