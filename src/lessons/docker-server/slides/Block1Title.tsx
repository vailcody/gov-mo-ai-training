import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideBlock1Title({}: SlideProps) {
  return (
    <div className="center-slide">
      <div className="geo-square" style={{ width: 100, height: 100, top: '10%', left: '10%', opacity: 0.1 }} />
      <p className="meta reveal">Блок 01</p>
      <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>Масштабируемая<br/>разработка</h1>
      <p className="subtitle reveal">От ручного деплоя к автоматизации</p>
    </div>
  )
}