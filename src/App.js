import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['react', 'react native']);

  function handleAdd() {
    setTech([...tech, 'nodejs']);
  }

  return (
    <>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
