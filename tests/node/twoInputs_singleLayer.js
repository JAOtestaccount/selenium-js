'use strict'

const {expect} = require('chai')
const {Builder, By} = require('selenium-webdriver')

async function startChrome() {
  // Initialize webdriver, and set default timeout for finding elements
  let driver = await new Builder().forBrowser('chrome').build()
  await driver.manage().setTimeouts({implicit: 10000})

  // Navigate to the two input fields page
  await driver.get('https://www.seleniumeasy.com/test/basic-first-form-demo.html')

  // Get elements we'll be using in our test case/cases
  let value_a = await driver.findElement(await By.id('sum1'))
  let value_b = await driver.findElement(await By.id('sum2'))
  let form = await driver.findElement(await By.id('gettotal'))
  let get_total_button = await form.findElement(await By.tagName('button'))
  let total_value = await driver.findElement(await By.id('displayvalue'))

  try {
    
    // Populate fields, and get total, assert against the value
    await value_a.sendKeys(8)
    await value_b.sendKeys(12)
    await get_total_button.click()
    expect(await total_value.getText()).to.equal('20')
    
    // Quit automated browser session normally
    await driver.quit()
    
  } catch(error) {
    // If we hit an error, let's log the error, and then quit the browser session
    await console.log('this is the error', error)
    await driver.quit()
  }
  
}

startChrome()