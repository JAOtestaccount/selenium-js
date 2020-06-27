'use strict'

const {expect} = require('chai')
const {Builder} = require('selenium-webdriver')
const TwoInputsPage = require('../../pages/twoInputs/twoInputs')

async function startChrome() {
  // Initialize webdriver, and set default timeout for finding elements
  const driver = await new Builder().forBrowser('chrome').build()
  await driver.manage().setTimeouts({implicit: 10000})
  const twoInputsPage = new TwoInputsPage(driver)

  // Navigate to the two input fields page
  await driver.get('https://www.seleniumeasy.com/test/basic-first-form-demo.html')

  try {
    
    // Populate fields, and get total, assert against the value
    await twoInputsPage.setValueA(8)
    await twoInputsPage.setValueB(12)
    await twoInputsPage.clickGetTotalButton()
    expect(await twoInputsPage.getTotalValue()).to.equal('20')
    
    // Quit automated browser session normally
    await driver.quit()
    
  } catch(error) {
    // If we hit an error, let's log the error, and then quit the browser session
    await console.log('this is the error', error)
    await driver.quit()
  }
  
}

startChrome()