class Github {
  constructor() {
    this.client_id = "74e97e02662d8b0dc108";
    this.client_secret = "9d98c2c3e7bff322378ce85b20351373eb46b737";
    this.repos_count = 10;
    this.repos_sort = "asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
