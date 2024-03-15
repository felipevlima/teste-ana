import axios from 'axios'

export const GithubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github+json',
    'Authorization': 'Bearer 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',
    'X-GitHub-Api-Version': "2022-11-28"
  }
})