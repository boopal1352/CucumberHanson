$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/GmailLogin.feature");
formatter.feature({
  "line": 1,
  "name": "This feature is for login functionality",
  "description": "",
  "id": "this-feature-is-for-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User logs in with valid username and password",
  "description": "",
  "id": "this-feature-is-for-login-functionality;user-logs-in-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the username as \"arulprasath36\" and password as \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be getting error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmailLoginSteps.user_is_on_Login_page()"
});
formatter.result({
  "duration": 14904780453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arulprasath36",
      "offset": 29
    },
    {
      "val": "1234",
      "offset": 61
    }
  ],
  "location": "gmailLoginSteps.user_enters_the_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 3573131898,
  "status": "passed"
});
formatter.match({
  "location": "gmailLoginSteps.clicks_on_the_login_button()"
});
formatter.result({
  "duration": 104571793,
  "status": "passed"
});
formatter.match({
  "location": "gmailLoginSteps.user_should_be_getting_error_message()"
});
formatter.result({
  "duration": 34285237,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027password\u0027]/div[2]/div[2]\"}\n  (Session info: chrome\u003d73.0.3683.75)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DIN76000422\u0027, ip: \u002710.138.27.147\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\borajama\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:55088}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.75, webStorageEnabled: true}\nSession ID: 3073f7e123e00ea223932935050532f4\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027password\u0027]/div[2]/div[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.gmailLoginSteps.user_should_be_getting_error_message(gmailLoginSteps.java:38)\r\n\tat ✽.Then user should be getting error message(Features/GmailLogin.feature:7)\r\n",
  "status": "failed"
});
});