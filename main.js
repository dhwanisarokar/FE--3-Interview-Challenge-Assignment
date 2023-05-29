class GitHub {
  async getUserDetails(username) {
    const URL = `https://api.github.com/users/${username}`;
    try {
      const res = await fetch(URL);
      const data = await res.json();
      // console.log(data);
      this.createUserCard(data);
    } catch (err) {
      throw Error(err);
      //   return NULL;
    }
  }

  createUserCard(userData) {
    //   console.log("userData", userData);
    const {
      name,
      avatar_url,
      public_repos,
      bio,
      followers,
      following,
      twitter_username,
      location,
    } = userData;
    const card = `
        <div class="card p-2 text-bg-secondary" style="max-width: 640px;">
            <div class="row g-0">
                <div class="col-md-4 avatar-container">
                    <img src="${avatar_url}" class="img-fluid avatar" alt="${name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title fw-bold mb-3">${name}</h3>
                        <p class="card-text">${bio}</p>
                        <ul class="card-text d-flex flex-wrap justify-content-between git-list">
                            <li class="text-light"><span class="fw-semibold">Followers: </span>${followers}</li>
                            <li class="text-light"><span class="fw-semibold">Following: </span>${following}</li>
                            <li class="text-light"><span class="fw-semibold">Repos: </span>${public_repos}</li>
                            <li class="text-light"><span class="fw-semibold">Twitter: </span>${twitter_username}</li>
                            <li class="text-light"><span class="fw-semibold">Location: </span>${location}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      `;
    console.log(1);
    document.getElementById("main").innerHTML = card;
  }
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("search").value;
  const gitHub = new GitHub();
  gitHub.getUserDetails(username);
});

window.addEventListener("load", () => {
  const gitHub = new GitHub();
  gitHub.getUserDetails("dhwanisarokar");
});
