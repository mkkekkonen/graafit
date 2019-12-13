module.exports = {
  apps: [
    {
      name: "graafit",
      script: "./src/index.js",
      watch: true,
      env: {
        PORT: 7000,
        NODE_ENV: 'production',
        URL_BASE: '/graafit',
      },
      env_dev: {
        PORT: 3005,
        NODE_ENV: 'development',
      }
    }
  ]
}
