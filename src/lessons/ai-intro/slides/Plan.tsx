import type { SlideProps } from '../../../components/PresentationShell'

export default function SlidePlan({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">План лекции</h2>
      
      <div className="plan-blocks reveal">
        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">01</span>
            <h3>Введение в ИИ</h3>
          </div>
          <ul>
            <li>Что это такое</li>
            <li>Как работает</li>
            <li>Возможности и ограничения</li>
          </ul>
        </div>

        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">02</span>
            <h3>ИИ-ассистенты</h3>
          </div>
          <ul>
            <li>Как работать с чат-ботами</li>
            <li>Основы промптинга</li>
            <li>Галлюцинации</li>
            <li>Практика с GigaChat и YandexGPT</li>
          </ul>
        </div>

        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">03</span>
            <h3>ИИ-агенты</h3>
          </div>
          <ul>
            <li>Чем отличаются от обычных LLM</li>
            <li>Что могут делать</li>
            <li>Практика с Kodik</li>
            <li>Построение персональной операционной системы</li>
          </ul>
        </div>
      </div>
    </>
  )
}
