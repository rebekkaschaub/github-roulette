import githubApi from '../service/githubAPI'
import { useEffect, useState } from 'react'

export default function useRepos(userName) {
  const [repos, setRepos] = useState([])
  const [pullRequest, setPullRequest] = useState([])

  useEffect(() => {
    githubApi
      .get('https://api.github.com/users/' + userName + '/repos')
      .then(response => response.data)
      .then(setRepos)
      .catch(error => console.log(error))
  }, [userName])

  const getRequests = (userString, repoName) => {
    return githubApi
      .get(
        'https://api.github.com/users/' +
          userString +
          '/' +
          repoName +
          '/pulls?state=all'
      )
      .then(response => response.data)
      .then(item => {
        setPullRequest(item)
      })
      .catch(error => console.log(error))
  }

  return { repos, getRequests }
}
