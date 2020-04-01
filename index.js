const axios = require("axios");
const util = require("util");
const fs = require("fs");
const inquirer = require("inquirer");
const api = require("./utils/api.js");
const markdown1 = require("./utils/generateMarkdown.js");

const questions = ["What is your User Name?"];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("Success!");
  });
}

init();

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "username"
      }
    ])
    .then(async function(response) {
      console.log("the username is" + response.username);

      const userGITData = await getData(response.username);

      const userGITMarkDown = await getMD(userGITData);

      //console.log("THIS IS MY MD FILE_______________", userGITMarkDown)

      var filename = response.username + ".md";

      writeToFile(filename, userGITMarkDown);
    });
}

async function getData(d) {
  const profileSummary = await api.profileSummary(d);
  const profileFollowers = await api.profileFollowers(d);
  const profileRepos = await api.profileRepos(d);

  return [profileSummary, profileFollowers, profileRepos];
}

function getMD(x) {
  const z = markdown1.p(x);

  return z;
}
