import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide06TypesAI({}: SlideProps) {
  return (
    <>
      <span className="slide-number">08</span>
      <h2 className="reveal">Два типа ИИ</h2>

      <div className="card-grid">
        <div className="card highlighted">
          <h3>Узкий ИИ (ANI)</h3>
          <ul>
            <li>Решает одну задачу</li>
            <li>Работает в рамках обученных данных</li>
            <li>Все существующие системы — узкие</li>
            <li>ChatGPT, автопилот, распознавание лиц</li>
          </ul>
        </div>

        <div className="card">
          <h3>Общий ИИ (AGI)</h3>
          <ul>
            <li>Решает любые интеллектуальные задачи</li>
            <li>Адаптируется к новым областям без дообучения</li>
            <li>Пока не существует</li>
            <li>Когда появится — точно неизвестно</li>
          </ul>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p><strong>Важно:</strong> всё, что мы обсуждаем сегодня — это узкий ИИ. Он впечатляет, но не обладает сознанием или пониманием.</p>
      </div>
    </>
  )
}