import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import background from '../images/unicornBackground.jpeg'

export default function UserProfilePage({ userProfile }) {
  const { id } = useParams()

  return (
    <Wrapper>
      <p>{userProfile.id}</p>
      <p>{userProfile.avatar_url}</p>
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
