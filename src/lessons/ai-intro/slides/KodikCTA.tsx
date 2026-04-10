import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideKodikCTA({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Попробовать Kodik</h2>

      <div className="next-token-stage reveal" style={{ gap: '1.25rem' }}>
        <div className="big-text" style={{ marginTop: 0 }}>KODIK</div>
        <div className="next-token-question">
          Если хотите попробовать агентный формат работы на практике, можно начать с готовой сборки.
        </div>
        <div className="prompt-box" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', padding: '1rem 1.25rem' }}>
          https://vibekodik.ru/gov-mo
        </div>
      </div>
    </>
  )
}
