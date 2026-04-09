import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide18Hallucinations({}: SlideProps) {
  return (
    <>
      <span className="slide-number">19</span>
      <h2 className="reveal">Галлюцинации ИИ</h2>

      <div className="highlight-box reveal">
        <p><strong>Галлюцинация — когда модель уверенно выдаёт неверную информацию.</strong> Она не «знает», что ошибается — для неё это такой же правдоподобный текст.</p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Примеры галлюцинаций</h3>
          <ul>
            <li>Несуществующие нормативные акты</li>
            <li>Выдуманные судебные решения</li>
            <li>Неверные цитаты из документов</li>
            <li>Ложные ссылки на источники</li>
          </ul>
        </div>

        <div className="card highlighted">
          <h3>Как защититься</h3>
          <ul>
            <li>Всегда проверяйте факты</li>
            <li>Требуйте ссылки на источники</li>
            <li>Не доверяйте без проверки</li>
            <li>Используйте ИИ как помощника, не как источник истины</li>
          </ul>
        </div>
      </div>
    </>
  )
}