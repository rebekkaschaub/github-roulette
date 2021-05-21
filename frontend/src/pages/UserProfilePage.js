import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import background from '../images/unicornBackground.jpeg'
import Avatar from '../components/Avatar'

export default function UserProfilePage({ userProfile, getRepos }) {
  const { name } = useParams()

  return (
    <Wrapper>
      <p>{userProfile.name}</p>
      <Avatar>{userProfile.avatar_url}</Avatar>
      <details>
        <summary>
          <h2></h2>
        </summary>
      </details>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-image: url(${background});
  background-size: 100% auto;
  height: 100vh;
  width: 100vm;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: hotpink;
  border: solid 3px hotpink;
`
