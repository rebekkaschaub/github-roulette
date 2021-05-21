import githubApi from '../service/githubAPI'
import { useEffect, useState } from 'react'

export default function useRepos(userName) {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    githubApi
      .get('https://api.github.com/users/' + userName + '/repos')
      .then(response => response.data)
      .then(setRepos)
      .catch(error => console.log(error))
  }, [userName])

  return { repos }
}
