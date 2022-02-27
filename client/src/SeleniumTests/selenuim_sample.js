const webdriver = require("selenium-webdriver");
const driver = new webdriver.Builder().forBrowser("firefox").build();

const By = webdriver.By; // useful Locator utility to describe a query for a WebElement


// Instantiate a web browser page
driver.navigate().to("http://localhost:3000/")
    .then(() => driver.findElement(By.css(".btn.btn-success.me-3")).click()
    .then(() => driver.findElement(By.name("username")).sendKeys("admin"))
    .then(() => driver.findElement(By.name("password")).sendKeys("1234"))
    .then(() => driver.findElement(By.css(".btn.btn-primary.btn-login")).click()))
    //.then(element => element.getAttribute("value"))
    //.then(value => console.log(value)))

/*    
const until = webdriver.until; // useful utility to wait command
driver.navigate().to("https://www.yahoo.com/")
    .then(() => driver.findElement(By.css('#login-username')).sendKeys('xyz@yahoo.com'))
    .then(() => driver.wait(until.elementLocated(By.css('#login-signin'))))
    .then(() => driver.findElement(By.css('#login-signin')).click())
*/