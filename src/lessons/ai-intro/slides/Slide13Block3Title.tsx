import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide12Block3Title({}: SlideProps) {
  return (
    <div className="center-slide">
      <div className="geo-line" style={{ width: 300, height: 3, top: '20%', left: '5%' }} />
      <p className="meta reveal">Блок 03</p>
      <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>Возможности</h1>
      <p className="subtitle reveal">Что ИИ умеет уже сегодня</p>
    </div>
  )
}