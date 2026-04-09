import type { SlideProps } from '../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function SlideComputeCost({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Цена вычислений падает</h2>

      <div className="exponential-layout reveal">
        <div className="exponential-chart">
          <img src={`${BASE}ai-intro/ai-cost-decline.jpg`} alt="Падение стоимости ИИ-вывода 2021–2025" />
        </div>

        <div className="explanation-block">
          <div className="highlight-box" style={{ marginTop: 0 }}>
            <p><strong>Параллельно с ростом данных — стремительно падала цена вычислений.</strong></p>
            <p style={{ marginTop: '0.5rem', fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)' }}>
              Стоимость доступа к возможностям уровня GPT-4 упала в 500 раз за 2 года.
            </p>
          </div>

          <div className="card highlighted" style={{ marginTop: '1rem' }}>
            <h3>Что это значит</h3>
            <ul>
              <li>То, что стоило $40 в 2023 — сейчас стоит $0.08</li>
              <li>Скорость удешевления: 9–900 раз в год</li>
              <li>Доступный ИИ = доступные вычисления + доступные данные</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}