require("dotenv").config()
const {
    Builder,
    By
} = require("selenium-webdriver");


let func = async ()=>{
    let driver = await new Builder().forBrowser("firefox").build();

    try{
        await driver.get(process.env.URL);
        await driver.findElement({id:"loginid"}).sendKeys(process.env.EMAIL);
        await driver.findElement({id:"logpassword"}).sendKeys(process.env.PASSWORD);
        let arr = await driver.findElements({className:"col-md-3"});
        arr = await arr[arr.length-2].getAttribute("innerHTML");
        arr = arr.split('>')[1].split("<")[0];

        await driver.findElement({id:"captchacode"}).sendKeys(arr);
        //await driver.findElements(By.tagName('a'))[0].click();
        


        await driver.findElement({href:"coord_event_participants.asp"}).click()
    } finally {
        await driver.quit();
    }
}

func()