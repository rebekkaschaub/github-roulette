import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import usePullRequest from '../hooks/usePullRequest'

export default function RepoPage() {
  const { repoName, name } = useParams()
  const { pullRequests } = usePullRequest(name, repoName)
  const history = useHistory()

  return (
    <Wrapper>
      {pullRequests.map(pullRequest => (
        <div>{pullRequest.title}</div>
      ))}
      <button onClick={() => history.goBack()}>Go back</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 2em;
`
