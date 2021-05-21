import githubApi from '../service/githubAPI'
import { useEffect, useState } from 'react'

export default function useUser() {
  const [profile, setProfile] = useState({})
  const [error, setError] = useState('')
  const [errorOtherUser, setErrorOtherUser] = useState()
  const [userProfile, setUserProfile] = useState()

  useEffect(() => {
    githubApi
      .get('https://api.github.com/user')
      .then(response => response.data)
      .then(setProfile)
      .catch(error => setError(error.response.status))
  }, [])

  const searchUser = userString => {
    setErrorOtherUser(false)
    githubApi
      .get('https://api.github.com/users/' + userString)
      .then(response => response.data)
      .then(item => {
        console.log(item)
        setUserProfile(item)
      })
      .catch(error => setErrorOtherUser(error.response.status))
  }

  return { profile, error, searchUser, userProfile, errorOtherUser }
}
