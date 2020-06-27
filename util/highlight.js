'use strict'

module.exports = highlightElement

function highlightElement(driver, element) {
  driver.executeScript( (el) => {
    el.setAttribute('style', 'background: yellow; border: 2px solid red;')
  }, element)
}