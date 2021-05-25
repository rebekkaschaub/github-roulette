export default function UserForm({ userString, setUserString }) {
  const handleChange = event => {
    setUserString(event.target.value)
  }

  return (
    <form>
      <input
        type="text"
        value={userString}
        onChange={handleChange}
        placeholder="Enter Github Name"
      />
    </form>
  )
}
