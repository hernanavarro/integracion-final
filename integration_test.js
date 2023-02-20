Feature('IntegrationTest');

const expect = require('chai').expect;
const { I } = inject();

Scenario('Checking if Backend is already up', async () => {
    I.amOnPage('https://backend-final-production.up.railway.app/value');
});

Scenario('Checking if Frontend is already up and buttons Render correctly', async () => {
    I.amOnPage('https://frontend-final-production.up.railway.app/');
    I.see('ADD', { css: '#btn-add' });
    I.see('SUBTRACT', { css: '#btn-subtract' });
    I.see('RESTART', { css: '#btn-restart' });
});
