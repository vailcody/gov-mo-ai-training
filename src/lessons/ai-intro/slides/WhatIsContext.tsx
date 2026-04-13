import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideWhatIsContext({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Что такое контекст для LLM</h2>

      <div className="highlight-box reveal">
        <p><strong>Контекст — это всё, что модель «видит» прямо сейчас, когда отвечает на ваш запрос.</strong></p>
      </div>

      <div className="steps reveal">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Ваш запрос</div>
            <div className="step-desc">То, что вы написали в чат — ваш вопрос, инструкция, задача</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Предыдущие сообщения</div>
            <div className="step-desc">Весь разговор выше — модель перечитывает его каждый раз заново</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Прикреплённые файлы</div>
            <div className="step-desc">Документы, правила, примеры — всё, что вы загрузили в этот чат</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Системные инструкции</div>
            <div className="step-desc">Роль и правила, заданные в начале — «Ты специалист по ЖКХ...»</div>
          </div>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p><strong>Аналогия:</strong> контекст — как рабочий стол перед вами. Если на нём пусто, вы догадываетесь. Если лежат документы и инструкции — ответ точный.</p>
      </div>
    </>
  )
}