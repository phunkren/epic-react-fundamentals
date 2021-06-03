// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef(null);
  const [ error, setError ] = React.useState(null);
  const [ username, setUsername] = React.useState('');
 
  // 🐨 add a submit event handler here (`handleSubmit`).
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;

    if (username) {
      onSubmitUsername(username);
    } else {
      setError('Please enter a username');
    }
  }

  const handleChange = (event) => {
    const { value } = event.target;
    const lowercaseValue = value.toLowerCase();
    setUsername(lowercaseValue);
    setError(null);
  }

  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>
          Username:
          <input ref={usernameRef} id="username" type="text" value={username} onChange={handleChange}/>
        </label>
        { error ? (<div role='alert' style={{ background: 'tomato', padding: '1rem', margin: '1rem', textTransform: 'uppercase'}}>
          {error}
        </div>) : null}
      </div>
      <button type="submit" disabled={error}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
