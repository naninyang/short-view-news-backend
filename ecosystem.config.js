module.exports = {
  apps: [
    {
      name: "komponents-backend",
      script: "pnpm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
