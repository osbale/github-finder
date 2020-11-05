class Github {
  constructor() {
    this.client_id = "74ff6fbd0f7e0635d803"
    this.client_secret = "2537801e61d1627901f14a69f154afd7d6c00e2b"
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`
    )
    const profile = await profileResponse.json()
    const repos = await repoResponse.json()

    return {
        profile, repos
    }
  }
}
