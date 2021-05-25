import styled from 'styled-components/macro'
import UserForm from '../components/UserForm'
import UserPreview from '../components/UserPreview'
import Avatar from '../components/Avatar'
import useUser from '../hooks/useUser'
import { useState } from 'react'

export default function Homepage() {
  const [userString, setUserString] = useState('')
  const { profile, userProfile, errorOtherUser } = useUser(userString)

  return (
    <Wrapper>
      <h1>🦄 Hallo, {profile.login} 🦄</h1>
      <Avatar src={profile.avatar_url} />
      <UserForm userString={userString} setUserString={setUserString} />
      {userProfile && <UserPreview userProfile={userProfile} />}
      {errorOtherUser && <p>User not Found!</p>}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`
