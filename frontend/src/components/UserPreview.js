import styled from 'styled-components/macro'
import AvatarPreview from './AvatarPreview'
import { useHistory } from 'react-router-dom'

export default function UserPreview({ userProfile }) {
  let history = useHistory()

  function onClick() {
    history.push('www.google.de')
    console.log('Klick')
  }

  return (
    <Wrapper type="button" onClick={onClick}>
      <label>Did you mean?</label>
      <div>
        <AvatarPreview src={userProfile.avatar_url} />
        <div>
          <p>{userProfile.login}</p>
          <p>{userProfile.name}</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 75%;
  align-items: center;
  text-align: center;

  border: solid 1px black;
  border-radius: 3px;
`
