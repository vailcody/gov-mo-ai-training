import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide07Block2Title({}: SlideProps) {
  return (
    <div className="center-slide">
      <div className="geo-square" style={{ width: 100, height: 100, top: '10%', left: '10%', opacity: 0.1 }} />
      <p className="meta reveal">Блок 02</p>
      <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>Как работает</h1>
      <p className="subtitle reveal">ML, нейросети, LLM — простым языком</p>
    </div>
  )
}