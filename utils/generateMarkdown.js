var p = function(data) {
  console.log("this is what goes to generate MD file", data);
  var q = data;

  return `
  
  
  ![alt text](${q[0].avatar_url})
  Your User Name is: ${q[0].login}
  Your profile URL is: ${q[0].url}
  Number of repos: ${q[0].public_repos}
  Number of followers: ${q[0].followers}

  Followers are: 
  ${q[1]
    .join(0)
    .split(0)
    .map(
      (item, i) => `
     ${q[1][i].login}
  `
    )
    .join("")}

  Repos Are: 

  ${q[2]
    .join(0)
    .split(0)
    .map(
      (item, i) => `
  ${q[2][i].name}
`
    )
    .join("")}


`;
};

module.exports = {
  p: p
};
