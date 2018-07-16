module.exports = {
  'test count': function (browser) {
    // 路由界面 需要加上hash
    const url = browser.globals.devServerURL + '/#/count'
    console.log('url', url)
    browser
      .url(url)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#count')
      .assert.containsText('span', '1')
      .assert.elementCount('button', 1)
      .end()
  }
}
