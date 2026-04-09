import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideClosing({}: SlideProps) {
  return (
    <div className="center-slide">
      <div className="geo-outline" style={{ width: 100, height: 100, top: '10%', right: '12%', opacity: 0.08 }} />
      <h2 className="reveal" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '2rem' }}>Спасибо за внимание</h2>
      <div className="highlight-box reveal" style={{ textAlign: 'center' }}>
        <p>Искусственный интеллект — это возможность работать эффективнее, а не угроза.</p>
        <p style={{ marginTop: '0.5rem' }}>Главное — использовать его с умом и ответственностью.</p>
      </div>
    </div>
  )
}