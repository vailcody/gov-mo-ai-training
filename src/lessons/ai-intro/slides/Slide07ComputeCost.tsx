import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide07ComputeCost({}: SlideProps) {
  return (
    <>
      <span className="slide-number">07</span>
      <h2 className="reveal">Цена вычислений падает</h2>

      <div className="exponential-layout reveal">
        <div className="exponential-chart">
          <div className="cost-chart">
            <div className="cost-y-label">
              <span>$ за GFLOP</span>
            </div>
            <div className="cost-bars">
              <div className="cost-bar-row">
                <span className="cost-label">1990</span>
                <div className="cost-bar cost-bar-tall" style={{ height: '100%' }}><span>$1 000 000+</span></div>
              </div>
              <div className="cost-bar-row">
                <span className="cost-label">2000</span>
                <div className="cost-bar cost-bar-tall" style={{ height: '60%' }}><span>$2 500</span></div>
              </div>
              <div className="cost-bar-row">
                <span className="cost-label">2010</span>
                <div className="cost-bar cost-bar-tall" style={{ height: '25%' }}><span>$5</span></div>
              </div>
              <div className="cost-bar-row">
                <span className="cost-label">2017</span>
                <div className="cost-bar cost-bar-tall" style={{ height: '8%' }}><span>$0.06</span></div>
              </div>
              <div className="cost-bar-row">
                <span className="cost-label">2023</span>
                <div className="cost-bar cost-bar-tall accent" style={{ height: '3%' }}><span>$0.003</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="explanation-block">
          <div className="highlight-box" style={{ marginTop: 0 }}>
            <p><strong>Параллельно с ростом данных — стремительно падала цена вычислений.</strong></p>
            <p style={{ marginTop: '0.5rem', fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)' }}>
              С 1990 года стоимость 1 GFLOP (миллиарда операций с плавающей точкой) упала более чем в 300 миллионов раз.
            </p>
          </div>

          <div className="card highlighted" style={{ marginTop: '1rem' }}>
            <h3>Почему это важно</h3>
            <ul>
              <li>Обучение GPT-3 в 2020 году стоило ~$4.6 млн</li>
              <li>Сегодня аналогичная модель обходится в 10–100 раз дешевле</li>
              <li>Доступный ИИ = доступные вычисления + доступные данные</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}