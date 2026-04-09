import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide26RussianModels({}: SlideProps) {
  return (
    <>
      <span className="slide-number">28</span>
      <h2 className="reveal">Российские решения</h2>

      <div className="highlight-box reveal">
        <p><strong>Для госсектора рекомендуются решения с локальным размещением данных.</strong></p>
      </div>

      <div className="card-row">
        <div className="card">
          <h3>GigaChat</h3>
          <ul>
            <li>Разработка Сбера</li>
            <li>Данные хранятся в России</li>
            <li>Интеграция с экосистемой Сбера</li>
          </ul>
        </div>

        <div className="card">
          <h3>YandexGPT</h3>
          <ul>
            <li>Разработка Яндекса</li>
            <li>Интеграция с сервисами Яндекса</li>
            <li>Корпоративная версия</li>
          </ul>
        </div>

        <div className="card highlighted">
          <h3>ChatGPT / Claude</h3>
          <ul>
            <li>Зарубежные сервисы</li>
            <li>Данные хранятся за рубежом</li>
            <li>Ограничения для госсектора</li>
          </ul>
        </div>
      </div>
    </>
  )
}