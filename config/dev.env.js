'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://api_ff.yamisok.com"'
  // API_URL: '"http://172.30.154.43:8000"'
})
