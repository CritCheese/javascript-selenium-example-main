****************************************************
SETUP
****************************************************
1. install nodejs
2. create new workspace
3. run npm init
4. install lib:
    - selenium-webdriver:
        npm install selenium-webdriver
    - chrome, firefox, edge:
        npm install -g chromedriver
        npm install -g geckodriver
        npm install -g edgedriver
    - mocha:
        npm install -g mocha
        npm install --save-dev mocha
    - chai:
        npm install -g chai
        npm install --save-dev chai
5. configure test command in package.json ("script")

*****************************************************
PROJECT STRUCTURE
*****************************************************

- driver_utils =>manage webdriver

- environmment.js =>manage test environmment with corresponding test data

- pages =>manage page object

	base_page.js =>(Class) with basic and common function, to be extended by other pages
	
- test =>manage test with written testscript

*****************************************************
REPORT WITH MOCHAWESOME
*****************************************************

1. install mochawesome
    - npm install -g mochawesome mochawesome-report-generator
    - npm install mochawesome mochawesome-report-generator --save-dev
2. configure run script to generate report in package.json
    - mocha {arg...} --spec {./<path to test folder>/*.js} --reporter mochawesome
    - add --parallel if you want to run concurrent
3. view report in ./mochawesome-report/mochawesome.html

*****************************************************
RUN TEST
*****************************************************

continuous: npm --testEnv={testEnv} --testBrowser={testBrowser} run test

concurrent: npm --testEnv={testEnv} --testBrowser={testBrowser} run test_parallel

------------
Reference
------------
https://www.lambdatest.com/blog/how-to-generate-mocha-reports-with-mochawesome/

https://www.lambdatest.com/blog/mocha-javascript-tutorial-with-examples-for-selenium-testing/

https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824

https://stackoverflow.com/questions/11580961/sending-command-line-arguments-to-npm-script