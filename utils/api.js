const axios = require("axios");

var profileSummary = async function(username) {
  try {
    var y = await axios.get(`https://api.github.com/users/${username}`);

    //console.log(y)

    return y.data;
  } catch (error) {
    console.log(error);
  }
};

var profileFollowers = async function(username) {
  try {
    var y = await axios.get(
      `https://api.github.com/users/${username}/followers`
    );

    //console.log(y)

    return y.data;
  } catch (error) {
    console.log(error);
  }
};

var profileRepos = async function(username) {
  try {
    var y = await axios.get(`https://api.github.com/users/${username}/repos`);

    //console.log(y)

    return y.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  profileSummary: profileSummary,
  profileFollowers: profileFollowers,
  profileRepos: profileRepos
};
