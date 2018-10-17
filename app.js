require("dotenv").config()
const {
    Builder,
    By,
    Key,
    TimeUnit,
    until
} = require("selenium-webdriver");
const attendees = require("./helpers/readxl");


let func = async ()=>{
    let driver = await new Builder().forBrowser("firefox").build();

    try{
        // WORKING login
        await driver.get(process.env.URL);
        await driver.findElement({id:"loginid"}).sendKeys(process.env.EMAIL);
        await driver.findElement({id:"logpassword"}).sendKeys(process.env.PASSWORD);
        let arr = await driver.findElements({className:"col-md-3"});
        arr = await arr[arr.length-2].getAttribute("innerHTML");
        arr = arr.split('>')[1].split("<")[0];
        await driver.findElement({id:"captchacode"}).sendKeys(arr);
        await driver.findElement({name:"frmSubmit"}).click();


        // WORKING go to post attendance page
        await driver.get(process.env.EVENT_PARTICIPANTS_URL);
        arr = await driver.findElements({name:"frmSubmit"});
        await arr[1].click();

        // WORKING build a names array from csv
        let attended = await attendees("./helpers/devtalks.csv");


        require('system-sleep')(10000); // better way?

        // build an array of participants
        arr=[]
        let data = await driver.findElements(By.css("td"));
        for(let i in data)
            if((i-9)%7 === 0)
                arr.push(await data[i].getAttribute("innerHTML")); // PROBLEM Not all scraped
        



        // to check for attendance
        arr = require("./helpers/checkAttendance")(arr,attended);
        
        // mark present
        for(let j of arr){
            await data[j+2].selectByValue("Present");   // PROBLEM not selecting select attribute
            await data[j+4].click();                    // PROBLEM not selecting button
        }




        // voluntary wait
        await driver.wait(until.titleContains("google"))

    } finally {
        await driver.quit();
    }
}

func()