module.exports = ({ env }) => ({
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("MY_HEROKU_URL"),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
});
