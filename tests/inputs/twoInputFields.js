'use strict'

const {Builder} = require('selenium-webdriver')

async function startChrome() {
  let driver = await new Builder().forBrowser('chrome').build()
  //your code inside this block
  try {
    await driver.get('https://selenium.dev')
    await console.log('chrome', await driver.getCurrentUrl())
  }
  finally {
    await driver.quit()
  }
}

async function startFirefox() {
  let driver = await new Builder().forBrowser('firefox').build()
  //your code inside this block
  try {
    await driver.get('https://selenium.dev')
    await console.log('firefox', await driver.getCurrentUrl())
  }
  finally {
    await driver.quit()
  }
}

startChrome()
startFirefox()