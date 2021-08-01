import React, { useState } from 'react';
import Hello from './sayHello'

function App() {

  const [users, setUsers] = useState([
    { name: 'John', message: 'deneme' },
    { name: 'ed', message: "merhaba ben ed" }

  ]);

  return (
    <div className="App">

      {users.map(user => (

        <Hello
          name={user.name}
          message={user.message} />

      ))}
    </div>
  );
}

export default App;