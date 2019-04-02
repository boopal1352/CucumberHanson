package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features/GmailLogin.feature",glue="stepDefinitions",plugin = { "pretty", "html:target/cucumber-reports" })


public class RunnerClass {

}
