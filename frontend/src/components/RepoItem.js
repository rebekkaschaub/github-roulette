import { Link } from 'react-router-dom'

export default function RepoItem({ repo, userName }) {
  return <Link to={'/users/' + userName + '/' + repo.name}>{repo.name}</Link>
}
