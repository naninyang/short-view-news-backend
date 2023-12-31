module.exports = {
  apps: [
    {
      name: "short-view-news-backend",
      script: "pnpm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
