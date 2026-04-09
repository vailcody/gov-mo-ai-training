import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide20CanCannot({}: SlideProps) {
  return (
    <>
      <span className="slide-number">20</span>
      <h2 className="reveal">ИИ умеет / ИИ не умеет</h2>

      <div className="card-grid">
        <div className="card highlighted">
          <h3>ИИ умеет</h3>
          <ul>
            <li>Быстро обрабатывать большие объёмы текста</li>
            <li>Находить закономерности в данных</li>
            <li>Генерировать черновики документов</li>
            <li>Классифицировать и сортировать</li>
            <li>Переводить и резюмировать</li>
            <li>Работать 24/7 без перерывов</li>
          </ul>
        </div>

        <div className="card">
          <h3>ИИ не умеет</h3>
          <ul>
            <li>Гарантировать достоверность</li>
            <li>Принимать решения за человека</li>
            <li>Понимать контекст как человек</li>
            <li>Заменяеть эксперта</li>
            <li>Работать без контроля</li>
            <li>Обучаться без данных</li>
          </ul>
        </div>
      </div>
    </>
  )
}