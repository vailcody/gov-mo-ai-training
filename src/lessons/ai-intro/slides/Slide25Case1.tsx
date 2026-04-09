import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide24Case1({}: SlideProps) {
  return (
    <>
      <span className="slide-number">25</span>
      <h2 className="reveal">Кейс: автоматическая сортировка</h2>

      <div className="highlight-box reveal">
        <p><strong>Задача:</strong> 500+ обращений в месяц. 3 сотрудника тратят по 2 часа в день на сортировку.</p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>До внедрения ИИ</h3>
          <ul>
            <li>Ручная сортировка каждого обращения</li>
            <li>Ошибки маршрутизации — 15%</li>
            <li>Среднее время обработки — 12 минут</li>
            <li>Очередь в пиковые периоды</li>
          </ul>
        </div>

        <div className="card highlighted">
          <h3>После внедрения ИИ</h3>
          <ul>
            <li>Автоматическая классификация за секунды</li>
            <li>Ошибки маршрутизации — 3%</li>
            <li>Среднее время обработки — 30 секунд</li>
            <li>Сотрудники занимаются сложными случаями</li>
          </ul>
        </div>
      </div>
    </>
  )
}