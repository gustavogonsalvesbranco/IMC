export default function App() {
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>
      <div className="area-input">
        <input type="text" placeholder="Peso em (kg) Ex: 80" />
        <input type="text" placeholder="Altura em (cm) Ex: 176" />
        <button>Calcular</button>
      </div>

      <h2>Seu imc foi 25, você está a cima do peso</h2>
    </div>
  );
}