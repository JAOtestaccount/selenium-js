'use strict'
const {expect} = require('chai')
const {Builder, By} = require('selenium-webdriver')

describe('Two Input Fields Test Suite', () => {
  let driver

  // Initialize webdriver, and set default timeout for finding elements
  before(async () => {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.manage().setTimeouts({implicit: 10000})
  })


  // Quit automated browser session
  after(async () => {
    await driver.quit()
  })


  // it('checking page title', async () => {
  //   let currentUrl = await driver.getCurrentUrl()
    
  //   expect(currentUrl).to.equal('https://www.seleniumeasy.com/test/basic-first-form-demo.html')
  // })


  it('two integers are added', async () => {
    
    // let driver = await new Builder().forBrowser('chrome').build()
    await driver.manage().setTimeouts({implicit: 10000})

    // Navigate to the two input fields page
    await driver.get('https://www.seleniumeasy.com/test/basic-first-form-demo.html')
    
    // Populate fields, and get total, assert against the value
    await driver.findElement(await By.id('sum1')).sendKeys(8)
    await driver.findElement(await By.id('sum2')).sendKeys(12)
    await driver.findElement(await By.xpath('//*[@id="gettotal"]/button')).click()
    expect(await driver.findElement(await By.id('displayvalue')).getText()).to.equal('20')
  })


  // it('two integers are added', async () => {
  //   let value_a = await driver.findElement(await By.id('sum1'))
  //   let value_b = await driver.findElement(await By.id('sum2'))
  //   let form = await driver.findElement(await By.id('gettotal'))
  //   let get_total_button = await form.findElement(await By.tagName('button'))
  //   let total_value = await driver.findElement(await By.id('displayvalue'))
  //   await value_a.sendKeys(8)
  //   await value_b.sendKeys(12)
  //   await get_total_button.click()
  //   expect(await total_value.getText()).to.equal('20')
  // })

})
