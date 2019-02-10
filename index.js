function showRepositories(event, data) {
  //this is set to the XMLHttpRequest object that fired the event
  console.log(this.responseText);

  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos.map(r => "<li>" + r.name + "</li>").join("")}</ul>`;

  document.getElementById("repositories").innerHTML = repoList;
}


function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories);
  req.open("GET", "https://api.github.com/users/octocat/repos");
  req.send();
}



function getCommits(el) {
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener("load", showCommits);
  req.open("GET", "https://api.github.com/repos/octocat/" + name + "/commits");
  req.send();
}
