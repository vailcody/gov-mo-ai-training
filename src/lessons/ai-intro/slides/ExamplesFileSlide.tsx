import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideExamplesFile({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Файл с примерами</h2>

      <div className="highlight-box reveal">
        <p><strong>Зачем нужен:</strong> чтобы модель не угадывала, а видела образцы хороших ответов на типовые обращения.</p>
      </div>

      <div className="card-grid reveal">
        <div className="card highlighted">
          <h3>Что положить внутрь</h3>
          <ul>
            <li>Сильные примеры ответов</li>
            <li>Разные типы обращений</li>
            <li>Удачные формулировки</li>
            <li>Примеры нужного уровня детализации</li>
          </ul>
        </div>

        <div className="card">
          <h3>Что это даёт</h3>
          <ul>
            <li>Лучше держится стиль</li>
            <li>Меньше абстрактных ответов</li>
            <li>Проще получать нужный формат</li>
            <li>Примеры часто работают лучше длинных инструкций</li>
          </ul>
        </div>
      </div>
    </>
  )
}
