import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide09NeuralNetwork({}: SlideProps) {
  return (
    <>
      <span className="slide-number">11</span>
      <h2 className="reveal">Нейросеть — как мозг?</h2>

      <div className="highlight-box reveal">
        <p><strong>Нейросеть — это математическая модель, вдохновлённая устройством мозга.</strong> Она не «думает», но эффективно обрабатывает информацию.</p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Как в мозге</h3>
          <ul>
            <li>Нейроны получают сигналы</li>
            <li>Усиливают или ослабляют их</li>
            <li>Передают дальше по цепочке</li>
            <li>Обучаются на опыте</li>
          </ul>
        </div>

        <div className="card highlighted">
          <h3>Как в нейросети</h3>
          <ul>
            <li>Узлы получают числа</li>
            <li>Умножают на веса (коэффициенты)</li>
            <li>Передают результат дальше</li>
            <li>Веса настраиваются при обучении</li>
          </ul>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p>Аналогия: как ребёнок учится узнавать кошку — не по правилу «4 лапы + усы», а по множеству примеров.</p>
      </div>
    </>
  )
}