import axios from 'axios'

export const GithubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github+json',
    'Authorization': 'Bearer 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',
    'X-GitHub-Api-Version': "2022-11-28"
  }
})