import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideAutomation({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Автоматизация рутины</h2>

      <div className="card-row">
        <div className="card">
          <h3>Чат-боты</h3>
          <ul>
            <li>Ответы на типовые вопросы 24/7</li>
            <li>Приём и регистрация обращений</li>
            <li>Статус рассмотрения</li>
          </ul>
        </div>

        <div className="card">
          <h3>Документы</h3>
          <ul>
            <li>Генерация шаблонных ответов</li>
            <li>Проверка полноты информации</li>
            <li>Сопоставление с нормативной базой</li>
          </ul>
        </div>

        <div className="card highlighted">
          <h3>Аналитика</h3>
          <ul>
            <li>Тренды в обращениях</li>
            <li>Выявление системных проблем</li>
            <li>Прогноз нагрузки</li>
          </ul>
        </div>
      </div>
    </>
  )
}