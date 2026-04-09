import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide34QandA({}: SlideProps) {
  return (
    <div className="center-slide">
      <div className="geo-square" style={{ width: 150, height: 150, bottom: '8%', left: '10%', opacity: 0.1 }} />
      <div className="geo-line" style={{ width: 250, height: 3, top: '15%', right: '8%' }} />
      <h1 className="reveal" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}>Вопросы?</h1>
      <p className="subtitle reveal">Обсудим ваши задачи и опасения</p>
    </div>
  )
}