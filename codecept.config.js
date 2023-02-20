/** @type {CodeceptJS.MainConfig} */
exports.config = {
    tests: './*_test.js',
    output: './output',
    helpers: {
      Playwright: {
        url: 'https://frontend-final-production.up.railway.app',
        onRequest: () => {
  
        },
        show: false,
        browser: 'chromium'
      }
    },
    include: {
      I: './steps_file.js'
    },
    mocha:  {
      "reporterOptions": {
        "codeceptjs-cli-reporter": {
          "stdout": "-",
          "options": {
            "steps": true,
          }
        },
        "mocha-junit-reporter": {
          "stdout": "./output/console.log",
          "options": {
            "mochaFile": "./output/result.xml"
          },
          "attachments": true //add screenshot for a failed test
            }
          }
      },
    name: 'integracion-final'
  }