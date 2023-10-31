import { useState } from 'react';

function App() {
  const [numero, setNumero] = useState('')

  function cambioNumero(event) {
    const entrada = event.target.value;
    let cant = 0;
    for (let i = 0; i < entrada.length; i++)
      if (entrada[i] === '0' || entrada[i] === '1')
        cant++;
    if (cant === entrada.length)
      setNumero(entrada)
  }

  return (
    <div>
      <p>Ingrese un número binario:
        <input type="text" value={numero} onChange={cambioNumero} />
      </p>
    </div>
  );
}

export default App;