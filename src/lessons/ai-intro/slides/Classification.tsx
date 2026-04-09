import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideClassification({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Классификация обращений</h2>

      <div className="highlight-box reveal">
        <p><strong>Задача:</strong> автоматически определить категорию входящего обращения гражданина и направить в нужный отдел.</p>
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
            <li>Модель анализирует текст за секунды</li>
            <li>Определяет категорию и срочность</li>
            <li>Маршрутизирует автоматически</li>
            <li>Среднее время: 2–3 секунды</li>
          </ul>
        </div>
      </div>
    </>
  )
}