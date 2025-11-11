import { useState } from "react";
import "./app.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularImc = () => {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.5) {
      setResultado(`Seu imc foi ${imc.toFixed(2)}, você está abaixo do peso`);
    } else if (imc >= 18.5 && imc < 25) {
      setResultado(`Seu imc foi ${imc.toFixed(2)}, você está com o peso ideal`);
    } else if (imc >= 25 && imc < 30) {
      setResultado(`Seu imc foi ${imc.toFixed(2)}, você está levemente acima do peso`);
    } else if (imc >= 30 && imc < 35) {
      setResultado(`Seu imc foi ${imc.toFixed(2)}, você está com obesidade grau I`);
    } else if (imc >= 35 && imc < 40) {
      setResultado(`Seu imc foi ${imc.toFixed(2)}, você está com obesidade grau II`);
    } else {
      setResultado(`Seu imc foi ${imc.toFixed(2)}, você está com obesidade grau III`);
    }
  };

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>

      <span>Vamos calcular seu imc</span>
      <div className="areaInput">
        <input type="number" placeholder="Peso em (kg) Ex: 80" value={peso} onChange={(e) => setPeso(e.target.value)} />
        <input type="number" placeholder="Altura em (cm) Ex: 176" value={altura} onChange={(e) => setAltura(e.target.value)} />
        <button onClick={calcularImc}>Calcular</button>
      </div>

      <h2>{resultado}</h2>
    </div>
  );
}