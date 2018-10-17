require("dotenv").config()
const {
    Builder,
    By,
    Key,
    TimeUnit,
    until
} = require("selenium-webdriver");


let func = async ()=>{
    let driver = await new Builder().forBrowser("firefox").build();

    try{
        // login
        await driver.get(process.env.URL);
        await driver.findElement({id:"loginid"}).sendKeys(process.env.EMAIL);
        await driver.findElement({id:"logpassword"}).sendKeys(process.env.PASSWORD);
        let arr = await driver.findElements({className:"col-md-3"});
        arr = await arr[arr.length-2].getAttribute("innerHTML");
        arr = arr.split('>')[1].split("<")[0];
        await driver.findElement({id:"captchacode"}).sendKeys(arr);
        await driver.findElement({name:"frmSubmit"}).click();


        // go to post attendance page
        await driver.get(process.env.EVENT_PARTICIPANTS_URL);
        arr = await driver.findElements({name:"frmSubmit"});
        await arr[1].click();




        // voluntary wait
        await driver.wait(until.titleContains("google"))

    } finally {
        await driver.quit();
    }
}

func()