import { useState, useEffect } from 'react';
import './app.css';

export default function App() {
  const [taxa, setTaxa] = useState(0);
  const [valor, setValor] = useState(0);
  const [valorConvertido, setValorConvertido] = useState(0);

  const handleConversao = () => {
    setValorConvertido(valor * taxa);
  };

  useEffect(() => {
    setTaxa(6.09); // Taxa de conversão USD para BRL (17/12/2024)
  }, []);
  
  return (
    <div>
      <h1>Conversor de Moedas</h1>

      <input
        type="number"
        value={valor}
        onChange={(evento) => setValor(evento.target.value)}
      />

      <button onClick={handleConversao}>Converter de Dólar para Real</button>

      <h2>
        Valor convertido: {valorConvertido.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </h2>
    </div>
  );
}
