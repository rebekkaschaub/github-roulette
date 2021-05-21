import { useParams } from 'react-router-dom'
import useRepos from '../hooks/useRepos'

export default function RepoPage() {
  const { repo } = useParams()

  return (
    <div>
      <p>hallo pull request!</p>
    </div>
  )
}
