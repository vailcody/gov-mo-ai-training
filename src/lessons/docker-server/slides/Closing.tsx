import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideClosing({}: SlideProps) {
  return (
    <div className="center-slide">
      <div className="geo-square" style={{ width: 80, height: 80, bottom: '15%', left: '10%', opacity: 0.12 }} />
      <div className="geo-outline" style={{ width: 60, height: 60, top: '20%', right: '12%' }} />
      <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>Вопросы?</h1>
      <p className="subtitle reveal">Константин Чуйков — <a href="https://t.me/vibe_coding" target="_blank" rel="noreferrer">@vibe_coding</a></p>
    </div>
  )
}