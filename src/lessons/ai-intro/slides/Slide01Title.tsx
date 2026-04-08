import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide01Title({}: SlideProps) {
  return (
    <>
      <div className="geo-square" style={{ width: 120, height: 120, bottom: '10%', right: '15%', opacity: 0.15 }} />
      <div className="geo-line" style={{ width: 200, height: 3, top: '20%', right: '8%' }} />
      <div className="geo-outline" style={{ width: 80, height: 80, top: '15%', right: '5%' }} />
      <h1 className="reveal">Искусственный интеллект</h1>
      <p className="subtitle reveal">Возможности и ограничения</p>
      <p className="meta reveal">Лекция для инспекторов по работе с обращениями граждан в сфере ЖКХ</p>
    </>
  )
}
