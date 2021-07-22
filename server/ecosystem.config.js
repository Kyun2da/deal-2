module.exports = {
  apps: [
    {
      name: 'app',
      script: './bin/www',
      autorestart: true,
      watch: true,
      ignore_watch: ['node_modules'],
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
