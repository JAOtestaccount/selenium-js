'use strict'

const {Builder} = require('selenium-webdriver')

module.exports = class Page {

  constructor(driver) {
    this.driver = driver
  }
}