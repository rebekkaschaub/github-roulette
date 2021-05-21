import githubApi from '../service/githubAPI'

import { useEffect, useState } from 'react'

export default function usePullRequest(userString, repoName) {
  const [pullRequests, setPullRequest] = useState([])

  useEffect(() => {
    return githubApi
      .get(
        'https://api.github.com/repos/' +
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
  }, [userString, repoName])

  return { pullRequests }
}
