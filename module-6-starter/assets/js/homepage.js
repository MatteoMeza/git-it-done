var getUsersRepos = function() {
    fetch("http://api.github.com/users/octocat/repos");
};

getUsersRepos();