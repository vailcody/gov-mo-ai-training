import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideLawsFile({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Файл с нормативной базой</h2>

      <div className="highlight-box reveal">
        <p><strong>Зачем нужен:</strong> чтобы модель опиралась не на догадки и старые знания, а на актуальные выдержки из нужных документов.</p>
      </div>

      <div className="card-grid reveal">
        <div className="card highlighted">
          <h3>Что положить внутрь</h3>
          <ul>
            <li>Выдержки из ЖК РФ</li>
            <li>Постановления Правительства</li>
            <li>Региональные НПА</li>
            <li>Локальные регламенты и шаблоны</li>
          </ul>
        </div>

        <div className="card">
          <h3>Почему это критично</h3>
          <ul>
            <li>Модель может не знать свежих изменений</li>
            <li>Может ссылаться на устаревшие нормы</li>
            <li>Без документов она начинает додумывать</li>
            <li>Актуальная база снижает риск галлюцинаций</li>
          </ul>
        </div>
      </div>
    </>
  )
}
