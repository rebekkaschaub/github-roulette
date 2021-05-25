import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserProfilePage from './pages/UserProfilePage'
import RepoPage from './pages/RepoPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/', '/home']} exact>
          <Homepage />
        </Route>
        <Route path={'/users/:name'} exact>
          <UserProfilePage />
        </Route>
        <Route path={'/users/:name/:repoName'} exact>
          <RepoPage />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
