import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide17Block4Title({}: SlideProps) {
  return (
    <div className="center-slide">
      <div className="geo-outline" style={{ width: 120, height: 120, bottom: '15%', right: '10%', opacity: 0.1 }} />
      <p className="meta reveal">Блок 04</p>
      <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>Ограничения</h1>
      <p className="subtitle reveal">Что ИИ не умеет и чем это опасно</p>
    </div>
  )
}