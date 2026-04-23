import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideKodikWhat({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Kodik — что это такое</h2>

      <div className="highlight-box reveal">
        <p><strong>Kodik</strong> — это агентская AI-IDE: инструмент, в котором можно не только общаться с моделью, но и ставить задачу на выполнение цепочки действий.</p>
      </div>

      <div className="card-grid reveal">
        <div className="card highlighted">
          <h3>Чем отличается от чата</h3>
          <ul>
            <li>Не только отвечает, но и действует</li>
            <li>Может читать файлы и работать с проектом</li>
            <li>Возвращает не только совет, но и результат</li>
          </ul>
        </div>

        <div className="card">
          <h3>Почему это следующий шаг</h3>
          <ul>
            <li>После ассистента логично перейти к агенту</li>
            <li>Меньше ручной рутины</li>
            <li>Больше автоматизации в повторяющихся задачах</li>
          </ul>
        </div>
      </div>
    </>
  )
}
