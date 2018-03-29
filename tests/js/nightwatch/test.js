module.exports = {
    test1(browser) {
        browser
        .url('localhost:8080/tests')
        .waitForElementVisible('#testSelect', 1000)
        .waitForElementVisible('body', 1000)
        .assert.containsText('.uk-link-reset', 'Article Title')
        .setValue('#testSelect', 'accordion.html')
        .waitForElementVisible('body', 1000)
        .assert.containsText('h1', 'Accordion')
        .end();
    }
}