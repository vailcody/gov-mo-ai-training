import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide32Implementation({}: SlideProps) {
  return (
    <>
      <span className="slide-number">32</span>
      <h2 className="reveal">Как внедрить ИИ в работу</h2>

      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Определите задачу</div>
            <div className="step-desc">Выберите повторяющийся процесс с измеримым результатом (сортировка, черновики ответов, аналитика)</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Подберите инструмент</div>
            <div className="step-desc">Для госсектора — GigaChat, YandexGPT или локальные решения. Согласуйте с ИБ.</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Проведите пилот</div>
            <div className="step-desc">2–4 недели тестирования на ограниченном объёме. Оцените точность и скорость.</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Масштабируйте</div>
            <div className="step-desc">При положительном результате — расширяйте на другие отделы и задачи.</div>
          </div>
        </div>
      </div>
    </>
  )
}