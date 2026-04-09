import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideBlock5Title({}: SlideProps) {
  return (
    <div className="center-slide">
      <div className="geo-square" style={{ width: 80, height: 80, top: '12%', right: '12%', opacity: 0.12 }} />
      <p className="meta reveal">Блок 05</p>
      <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>Практика</h1>
      <p className="subtitle reveal">Демонстрация и разбор кейсов</p>
    </div>
  )
}