import styled from 'styled-components/macro'
import Homepage from './pages/Homepage'
import useUser from './hooks/useUser'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserProfilePage from './pages/UserProfilePage'
import RepoPage from './pages/RepoPage'

function App() {
  const { profile, error, searchUser, userProfile, errorOtherUser, getRepos } =
    useUser()

  if (error) {
    return (
      <Page>
        <img src={`https://http.cat/${error}`} alt="" />
      </Page>
    )
  }

  return (
    <Router>
      <Switch>
        <Route path={['/', '/home']} exact>
          <Homepage
            profile={profile}
            searchUser={searchUser}
            userProfile={userProfile}
            errorOtherUser={errorOtherUser}
          />
        </Route>
        <Route path={'/users/:name'} exact>
          <UserProfilePage userProfile={userProfile} />
        </Route>
        <Route path={'/users/:name/:repoName'} exact>
          <RepoPage />
        </Route>
      </Switch>
    </Router>
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
