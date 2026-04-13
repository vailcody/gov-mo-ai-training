import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideWhatIsMarkdown({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Что такое Markdown</h2>

      <div className="highlight-box reveal">
        <p><strong>Markdown — это простой способ разметки текста. Вы пишете обычный текст с минимальными символами, а программа превращает его в форматированный документ.</strong></p>
      </div>

      <div className="prompt-compare reveal">
        <div className="prompt-card good">
          <div className="prompt-card-label">Что вы пишете</div>
          <div className="prompt-card-body">
            <p># Заголовок</p>
            <p>**жирный текст**</p>
            <p>*курсив*</p>
            <p>- элемент списка</p>
            <p>[ссылка](https://example.com)</p>
          </div>
        </div>

        <div className="prompt-card">
          <div className="prompt-card-label">Что получается</div>
          <div className="prompt-card-body" style={{ background: 'var(--bg-primary)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.3rem, 2vw, 1.6rem)' }}>Заголовок</p>
            <p><strong>жирный текст</strong></p>
            <p><em>курсив</em></p>
            <p style={{ paddingLeft: '1.2rem', position: 'relative' }}>элемент списка</p>
            <p><a href="https://example.com" style={{ color: 'var(--accent)' }}>ссылка</a></p>
          </div>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p><strong>Зачем вам это знать:</strong> LLM генерирует ответы в Markdown. Понимая его, вы можете точно задавать формат — заголовки, списки, таблицы — и получать структурированный результат.</p>
      </div>
    </>
  )
}