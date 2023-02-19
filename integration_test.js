Feature('IntegrationTest');

const expect = require('chai').expect;
const {I} = inject();

Scenario('Checking if Backend is already up', async () =>{
    I.amOnPage('https://backend-final-production.up.railway.app/');
});

Scenario('Checking if Frontend is already uo and buttons Render correctly', async () => {
    I.amOnPage('https://frontend-final-production.up.railway.app/');
    I.see('ADD', {css: '#btn'});
    I.see('SUBTRACT', {css: '#btn'});
    I.see('RESTART', {css: '#btn'});
});
