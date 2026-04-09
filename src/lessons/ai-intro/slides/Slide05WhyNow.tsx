import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide05WhyNow({}: SlideProps) {
  return (
    <>
      <span className="slide-number">05</span>
      <h2 className="reveal">Почему именно сейчас</h2>

      <div className="highlight-box reveal">
        <p><strong>2022–2023 — переломный момент.</strong> За два года ИИ стал массовым продуктом, доступным каждому.</p>
      </div>

      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Интернет</div>
            <div className="step-desc">Интернет накопил достаточно текста, чтобы модели могли учиться на миллиардах примеров</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Вычислительные ресурсы</div>
            <div className="step-desc">Графические процессоры (GPU) стали достаточно мощными для обучения больших моделей</div>
          </div>
        </div>
      </div>
    </>
  )
}