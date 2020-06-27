'use strict'
const {expect} = require('chai')
const {Builder, By} = require('selenium-webdriver')

describe('Two Input Fields Test Suite', () => {

  it('two integers are added', async () => {
    // Initialize webdriver, and set default timeout for finding elements
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.manage().setTimeouts({implicit: 10000})

    // Navigate to the two input fields page
    await driver.get('https://www.seleniumeasy.com/test/basic-first-form-demo.html')
    
    // Populate fields, and get total, assert against the value
    await driver.findElement(await By.id('sum1')).sendKeys(8)
    await driver.findElement(await By.id('sum2')).sendKeys(12)
    await driver.findElement(await By.xpath('//*[@id="gettotal"]/button')).click()
    expect(await driver.findElement(await By.id('displayvalue')).getText()).to.equal('20')

    // Quit automated browser session
    await driver.quit()
  })


})
