const meta = require('./package.json')
module.exports = {
  root: process.env.CI ? `/${meta.name}` : '',
  repoURL: meta.repository.url,
}