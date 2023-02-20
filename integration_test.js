Feature('IntegrationTest');

const expect = require('chai').expect;
const { I } = inject();
const assert = require('assert');
const { setMaxIdleHTTPParsers } = require('http');

Scenario('Checking if Backend is up', async () => {
    I.amOnPage('https://backend-final-production.up.railway.app/value');
});

Scenario('Checking if Frontend is up and buttons Render correctly', async () => {
    I.amOnPage('https://frontend-final-production.up.railway.app/');
    I.see('ADD', { css: '#btn-add' });
    I.see('SUBTRACT', { css: '#btn-subtract' });
    I.see('RESTART', { css: '#btn-restart' });
});

Scenario('Checking Buttons Behaviour and Backend response', async () => {
    I.amOnPage('https://frontend-final-production.up.railway.app/');

    I.click({css: '#btn-restart'});
    await new Promise(r => setTimeout(r, 3000));
    let counter = await I.grabTextFrom('#counter');
    assert.equal(' Counter: 0 ',counter);

    I.fillField('Value', '10');
  
    I.click({css: '#btn-add'});
    await new Promise(r => setTimeout(r, 3000));
    counter = await I.grabTextFrom('#counter');
    assert.equal(' Counter: 10 ',counter);  

    I.click({css: '#btn-restart'});
    await new Promise(r => setTimeout(r, 3000));
    counter = await I.grabTextFrom('#counter');
    assert.equal(' Counter: 0 ',counter);

    I.click({css: '#btn-subtract'});
    await new Promise(r => setTimeout(r, 3000));
    counter = await I.grabTextFrom('#counter');
    assert.equal(' Counter: -10 ',counter);
})
