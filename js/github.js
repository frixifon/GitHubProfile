class GitHub {
    constructor() {
        this.client_id = '017fa67e6d7822aa8acb';
        this.client_secret = '266effa47b98ff3ff7e7c2a45e49e3a93c2ef361';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile, repos
        }
    }
}