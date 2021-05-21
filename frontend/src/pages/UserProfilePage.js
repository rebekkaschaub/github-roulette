import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

import AvatarPreview from '../components/AvatarPreview'
import RepoItem from '../components/RepoItem'
import useRepos from '../hooks/useRepos'

export default function UserProfilePage({ userProfile }) {
  const { name } = useParams()

  const { repos } = useRepos(name)

  return (
    <Wrapper>
      <h2>{userProfile.login}</h2>
      <AvatarPreview src={userProfile.avatar_url} />
      <details>
        <summary>{userProfile.name + ' Repos'}</summary>
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              <RepoItem repo={repo} userName={userProfile.login} />
            </li>
          ))}
        </ul>
      </details>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 2em;

  ul {
    list-style: none;
  }
`
