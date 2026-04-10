import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideNextTokenExample({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>

      <div className="next-token-stage reveal">
        <div className="next-token-phrase">КОШКА ПЬЁТ</div>

        <div className="next-token-options">
          <div className="next-token-option next-token-option-low">ВИСКИ</div>
          <div className="next-token-option next-token-option-high">МОЛОКО</div>
        </div>

        <div className="next-token-question">
          У какого слова вероятность быть следующим выше: <strong>«виски»</strong> или <strong>«молоко»</strong>?
        </div>
      </div>
    </>
  )
}
