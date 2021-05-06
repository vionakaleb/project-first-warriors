'use strict'

const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_URL: '"https://api_ff.yamisok.com"'
  // API_URL: '"http://172.30.154.43:8080"'
})
