import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideRulesFile({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Файл с правилами</h2>

      <div className="highlight-box reveal">
        <p><strong>Зачем нужен:</strong> чтобы модель с самого начала понимала, как именно нужно отвечать в этой задаче.</p>
      </div>

      <div className="card-grid reveal">
        <div className="card highlighted">
          <h3>Что положить внутрь</h3>
          <ul>
            <li>Тон ответа</li>
            <li>Обязательную структуру</li>
            <li>Требования к ссылкам и источникам</li>
            <li>Запрещённые формулировки</li>
          </ul>
        </div>

        <div className="card">
          <h3>Что это даёт</h3>
          <ul>
            <li>Меньше случайного стиля</li>
            <li>Более стабильный формат</li>
            <li>Меньше ручных исправлений</li>
            <li>Одинаковый стандарт ответов</li>
          </ul>
        </div>
      </div>
    </>
  )
}
