document.addEventListener('DOMContentLoaded', function() {
    const nome = document.querySelector('#nome');
    const photo = document.querySelector('#photo');
    const user = document.querySelector('#user');
    const reps = document.querySelector('#repositorios');
    const followers = document.querySelector('#num-seguidores');
    const following = document.querySelector('#num-seguindo');
    const url = document.querySelector('#url');

    fetch('https://api.github.com/users/GuilhermeAlves148')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nome.innerText = json.name;
            user.innerText = json.login;
            photo.src = json.avatar_url;
            reps.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            url.href = json.html_url;
        })
})