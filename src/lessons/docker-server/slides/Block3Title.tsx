import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideBlock3Title({}: SlideProps) {
  return (
    <div className="center-slide">
      <div className="geo-square" style={{ width: 100, height: 100, top: '10%', right: '10%', opacity: 0.1 }} />
      <p className="meta reveal">Блок 03</p>
      <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>Сервер и<br/>безопасность</h1>
      <p className="subtitle reveal">Покупка, настройка и деплой</p>
    </div>
  )
}