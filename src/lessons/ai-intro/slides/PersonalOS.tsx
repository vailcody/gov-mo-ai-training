import type { SlideProps } from '../../../components/PresentationShell'

export default function SlidePersonalOS({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Персональные ОС: что это</h2>

      <div className="card-grid reveal">
        <div className="card highlighted">
          <h3>Персональный агент</h3>
          <ul>
            <li>Знает вашу семью, друзей, проекты</li>
            <li>Помнит переписки, привычки, цели</li>
            <li>Сидит рядом 24/7 и работает за вас</li>
          </ul>
        </div>

        <div className="card">
          <h3>От чата к ОС</h3>
          <ul>
            <li>2023: браузерный чат — текст на вход, текст на выход</li>
            <li>2024-25: кастомные сервисы под задачу</li>
            <li>2026: персональный агент как операционка</li>
          </ul>
        </div>
      </div>
    </>
  )
}
