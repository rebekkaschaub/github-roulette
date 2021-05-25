import githubApi from '../service/githubAPI'
import { useEffect, useRef, useState } from 'react'

export default function useUser(userString) {
  const [profile, setProfile] = useState({})
  const [error, setError] = useState('')
  const [errorOtherUser, setErrorOtherUser] = useState()
  const [userProfile, setUserProfile] = useState()
  const timerId = useRef(0)

  useEffect(() => {
    githubApi
      .get('https://api.github.com/user')
      .then(response => response.data)
      .then(setProfile)
      .catch(error => setError(error.response.status))
  }, [])

  useEffect(() => {
    setErrorOtherUser(false)
    timerId.current && clearTimeout(timerId.current)
    timerId.current = window.setTimeout(
      () =>
        githubApi
          .get('https://api.github.com/users/' + userString)
          .then(response => response.data)
          .then(item => {
            console.log(item)
            setUserProfile(item)
          })
          .catch(error => setErrorOtherUser(error.response.status)),
      600
    )
  }, [userString])

  return { profile, error, userProfile, errorOtherUser }
}
