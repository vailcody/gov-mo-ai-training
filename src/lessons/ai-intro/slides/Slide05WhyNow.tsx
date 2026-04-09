import type { SlideProps } from '../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function Slide05WhyNow({}: SlideProps) {
  return (
    <>
      <span className="slide-number">05</span>
      <h2 className="reveal">Почему именно сейчас</h2>

      <div className="highlight-box reveal">
        <p><strong>2022–2023 — переломный момент.</strong> За два года ИИ стал массовым продуктом, доступным каждому.</p>
      </div>

      <div className="why-now-grid reveal">
        <div className="why-now-card">
          <div className="why-now-visual">
            {/* Internet data growth chart */}
            <div className="data-chart">
              <div className="data-bar-row">
                <span className="data-label">1995</span>
                <div className="data-bar" style={{ width: '1%' }}><span></span></div>
              </div>
              <div className="data-bar-row">
                <span className="data-label">2000</span>
                <div className="data-bar" style={{ width: '3%' }}><span></span></div>
              </div>
              <div className="data-bar-row">
                <span className="data-label">2005</span>
                <div className="data-bar" style={{ width: '8%' }}><span></span></div>
              </div>
              <div className="data-bar-row">
                <span className="data-label">2010</span>
                <div className="data-bar" style={{ width: '14%' }}><span>2 ЗБ</span></div>
              </div>
              <div className="data-bar-row">
                <span className="data-label">2015</span>
                <div className="data-bar" style={{ width: '25%' }}><span>15 ЗБ</span></div>
              </div>
              <div className="data-bar-row">
                <span className="data-label">2018</span>
                <div className="data-bar" style={{ width: '38%' }}><span>33 ЗБ</span></div>
              </div>
              <div className="data-bar-row">
                <span className="data-label">2020</span>
                <div className="data-bar" style={{ width: '49%' }}><span>64 ЗБ</span></div>
              </div>
              <div className="data-bar-row">
                <span className="data-label">2023</span>
                <div className="data-bar" style={{ width: '75%' }}><span>120 ЗБ</span></div>
              </div>
              <div className="data-bar-row">
                <span className="data-label">2025</span>
                <div className="data-bar accent" style={{ width: '100%' }}><span>181 ЗБ</span></div>
              </div>
            </div>
          </div>
          <div className="why-now-text">
            <h3>Интернет</h3>
            <p>Интернет накопил достаточно текста, чтобы модели могли учиться на миллиардах примеров</p>
          </div>
        </div>

        <div className="why-now-card">
          <div className="why-now-visual">
            <img src={`${BASE}ai-intro/nvidia-hgx.jpg`} alt="NVIDIA HGX — 8 GPU для обучения ИИ" />
          </div>
          <div className="why-now-text">
            <h3>Вычислительные ресурсы</h3>
            <p>Графические процессоры (GPU) стали достаточно мощными для обучения больших моделей</p>
          </div>
        </div>
      </div>
    </>
  )
}