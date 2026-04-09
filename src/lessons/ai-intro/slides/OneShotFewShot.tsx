import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideOneShotFewShot({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')
  return (
    <>
      <span className="slide-number">{num}</span>
      <h2 className="reveal">Покажите пример — и ответ будет лучше</h2>

      <div className="card-grid reveal">
        <div className="card">
          <h3>Zero-shot</h3>
          <p>Даёте только задачу, без примеров:</p>
          <div className="prompt-box">«Напиши ответ на обращение гражданина»</div>
          <p className="result-bad">Модель угадывает формат и стиль</p>
        </div>

        <div className="card highlighted">
          <h3>One-shot / Few-shot</h3>
          <p>Даёте 1–3 примера того, что хотите:</p>
          <div className="prompt-box">«Напиши ответ на обращение. Вот пример правильного ответа: [пример]»</div>
          <p className="result-good">Модель копирует стиль и формат примера</p>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p><strong>Правило:</strong> чем сложнее задача и чем точнее нужен формат — тем больше примеров стоит дать. Один-два примера часто заменяют длинные инструкции.</p>
      </div>
    </>
  )
}