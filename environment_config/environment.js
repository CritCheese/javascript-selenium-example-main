const fs = require('fs');
const { urlIs } = require('selenium-webdriver/lib/until');

class Environment{
    constructor(){
        this.url;
        this.data;
        this.test_env = process.env.npm_config_testEnv;
        this.test_browser = process.env.npm_config_testBrowser;
    }

    set_up(){
        //announce test environment
        console.log("****************************");
        console.log("Running tests in environment " + this.test_env);
        console.log("Running tests with browser " + this.test_browser);
        console.log("****************************");
        console.log("START...");
        console.log("****************************");
        
        //read test data according to test environment
        let data;
        let jsonPath;
        switch (this.test_env) {
            case "sit":
                jsonPath = fs.readFileSync("./environment_config/env_sit.json");
                break;
            case "uat":
                jsonPath = fs.readFileSync("./environment_config/env_uat.json");
                break;
            default:
                jsonPath = fs.readFileSync("./environment_config/env_sit.json");
                break;
        }
        try {
            data = JSON.parse(jsonPath);
          } catch(err) {
            console.log(err);
            return;
          }
        this.url = data.url;
        this.data = data;
    }
}
module.exports = Environment;