
/* global UIkit */

module.exports = {

    'uikit-navbar-hover-show'(browser) {
        browser
        .url(browser.globals.rootUrl + '/navbar.html')
        .waitForElementVisible('#testSelect', 1000)
        .waitForElementVisible('#parent1', 1000)
        .click('#parent1')
        .waitForElementVisible('#sub1', 1000)
        .end();
    },

    'uikit-modal-propmpt-from-code'(browser) {

        browser
        .url(browser.globals.rootUrl + '/empty.html')
        .waitForElementVisible('body', 1000)
        .executeAsync(function (done) {
            const body = UIkit.util.$('body');
            done(!!body);
        }, [], ({value}) => {
            browser.assert.ok(value, 'uikit should find a body element');
        })
        .executeAsync(function(done) {
            UIkit.modal.prompt('Test inpout:', '').then(res => {
                window.modalres = res;
            });
            done();
        })
        .waitForElementVisible('.uk-modal', 1000)
        .setValue('.uk-input', 'test')
        .click('.uk-button-primary')
        .waitForElementNotPresent('.uk-modal', 1000)
        .execute(function() {return window.modalres;}, [], ({value}) => {
            browser.assert.ok(value === 'test');
        })
        .end();
    },

};