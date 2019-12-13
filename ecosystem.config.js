module.exports = {
  apps: [
    {
      name: "graafit",
      script: "./src/index.js",
      watch: true,
      env: {
        PORT: 7000,
        NODE_ENV: 'production'
      }
    }
  ]
}
