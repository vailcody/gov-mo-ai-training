import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide33KeyTakeaways({}: SlideProps) {
  return (
    <>
      <span className="slide-number">35</span>
      <h2 className="reveal">Главные выводы</h2>

      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">ИИ — это инструмент, не замена</div>
            <div className="step-desc">Он ускоряет рутину, но не принимает решений за человека</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Всегда проверяйте результат</div>
            <div className="step-desc">Галлюцинации — реальная проблема. Контроль обязателен.</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Берегите данные</div>
            <div className="step-desc">Персональные данные граждан — не для публичных сервисов. Используйте безопасные решения.</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Начните с одной задачи</div>
            <div className="step-desc">Лучше одна работающая автоматизация, чем десять экспериментов</div>
          </div>
        </div>
      </div>
    </>
  )
}