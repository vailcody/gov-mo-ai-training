import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideClassification({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Классификация обращений</h2>

      <div className="highlight-box reveal">
        <p><strong>Задача:</strong> помочь сотруднику быстро определить категорию обращения и направить в нужный отдел.</p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Без ИИ</h3>
          <ul>
            <li>Сотрудник читает обращение</li>
            <li>Определяет категорию вручную</li>
            <li>Передаёт в отдел</li>
            <li>Среднее время: 10–15 минут</li>
          </ul>
        </div>

        <div className="card highlighted">
          <h3>С ИИ</h3>
          <ul>
            <li>ИИ-копилот анализирует обращение</li>
            <li>Предлагает категорию и срочность</li>
            <li>Сотрудник подтверждает и направляет</li>
            <li>Среднее время: до 1 минуты</li>
          </ul>
        </div>
      </div>
    </>
  )
}