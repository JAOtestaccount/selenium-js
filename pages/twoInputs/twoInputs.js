'use strict'

const {By} = require('selenium-webdriver')
const Page = require('../page')

module.exports = class twoInputs extends (Page) {

  constructor(driver) {
    super(driver)
  }

  async valueA() {
    return await this.driver.findElement(await By.id('sum1'))
  }

  async valueB() {
    return await this.driver.findElement(await By.id('sum2'))
  }

  async getTotalButton() {
    return await this.driver.findElement(await By.xpath('//*[@id="gettotal"]/button'))
  }

  async totalValue() {
    return await this.driver.findElement(await By.id('displayvalue'))
  }

  async setValueA(value) {
    await this.valueA().then(async (el) => {
      await el.sendKeys(value)
    })
  }  

  async setValueB(value) {
    await this.valueB().then(async (el) => {
      el.sendKeys(value)
    })
  }  

  async clickGetTotalButton() {
    await this.getTotalButton().then(async (el) => {
      el.click()
    })
  }

  async getTotalValue() {
    return await this.totalValue().then(async (el) => {
      return el.getText()
    })
  }
}