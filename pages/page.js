'use strict'

module.exports = class Page {

  constructor(driver) {
    this.driver = driver
  }

  async get(url) {
    return await this.driver.get(url)
  }
}