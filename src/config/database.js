module.exports = {
  development: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  production: {
    dialect: process.env.DB_DIALECT,
    use_env_variable: "DATABASE_URL",
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  }
};
