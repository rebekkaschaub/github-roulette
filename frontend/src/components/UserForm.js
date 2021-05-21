import { useState } from 'react'

export default function UserForm({ searchUser }) {
  const [userString, setUserString] = useState('')

  function onSubmit(event) {
    event.preventDefault()
    searchUser(userString)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={userString}
        onChange={event => setUserString(event.target.value)}
        placeholder="Enter Github Name"
      />
      <button type="submit">Search</button>
    </form>
  )
}
