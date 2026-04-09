import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideWhatIsPrompt({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')
  return (
    <>
      <span className="slide-number">{num}</span>
      <h2 className="reveal">Что такое промпт</h2>

      <div className="prompt-intro reveal">
        <div className="highlight-box" style={{ marginTop: 0 }}>
          <p><strong>Промпт</strong> — это текстовая инструкция, которую вы даёте модели. От качества промпта напрямую зависит качество ответа.</p>
        </div>
      </div>

      <div className="prompt-compare reveal">
        <div className="prompt-card bad">
          <div className="prompt-card-label">Простой промпт</div>
          <div className="prompt-card-body">
            <p>«Ответь на обращение гражданина»</p>
          </div>
          <div className="prompt-card-result">
            Общий, неконкретный ответ. Модель угадывает, что вы хотите.
          </div>
        </div>

        <div className="prompt-card good">
          <div className="prompt-card-label">Подробный промпт</div>
          <div className="prompt-card-body">
            <p>«Ты — специалист по ЖКХ. Составь ответ на обращение гражданина о протечке крыши. Ответ должен содержать ссылку на нормативный акт, быть в деловом стиле и не превышать 3 абзаца. Не используй информацию, которой нет в предоставленных документах»</p>
          </div>
          <div className="prompt-card-result">
            Точный, структурированный ответ в нужном стиле и формате.
          </div>
        </div>
      </div>
    </>
  )
}