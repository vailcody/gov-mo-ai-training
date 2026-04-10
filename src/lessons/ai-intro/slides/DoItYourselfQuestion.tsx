import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideDoItYourselfQuestion({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <div className="poster-slide reveal" style={{ alignItems: 'center', textAlign: 'center' }}>
        <div className="poster-title" style={{ maxWidth: '1100px' }}>А не быстрее ли сделать самому?</div>
      </div>
    </>
  )
}
