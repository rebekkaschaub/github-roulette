import styled from 'styled-components/macro'
import Homepage from './pages/Homepage'
import useUser from './hooks/useUser'

function App() {
  const { profile, error, searchUser, userProfile, errorOtherUser } = useUser()

  if (error) {
    return (
      <Page>
        <img src={`https://http.cat/${error}`} alt="" />
      </Page>
    )
  }

  return (
    <Homepage
      profile={profile}
      searchUser={searchUser}
      userProfile={userProfile}
      errorOtherUser={errorOtherUser}
    />
  )
}
export default App

const Page = styled.main`
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
