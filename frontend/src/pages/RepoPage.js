import { useParams } from 'react-router-dom'
import useRepos from '../hooks/useRepos'
import styled from 'styled-components/macro'

export default function RepoPage() {
  const { repoName } = useParams()
  const { name } = useParams()

  const { repos, getRequests } = useRepos(name)

  const pullRequests = getRequests(name, repoName)

  console.log(repoName)
  const actualRepo = repos.find(item => item.name === repoName)
  console.log(actualRepo)

  return (
    <Wrapper>
      <div>{actualRepo?.name}</div>
      <div>{pullRequests?.title}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 2em;
`
