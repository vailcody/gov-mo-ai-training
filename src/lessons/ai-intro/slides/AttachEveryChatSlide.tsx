import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideAttachEveryChat({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>

      <div className="poster-slide reveal">
        <div className="poster-kicker">Ключевое правило</div>
        <div className="poster-title">ПРИКРЕПЛЯЙТЕ ФАЙЛЫ</div>
        <div className="poster-title poster-title-accent">В КАЖДЫЙ НОВЫЙ ДИАЛОГ</div>
        <div className="poster-body">
          Иначе модель снова начнёт работать почти без нужного контекста, даже если в прошлом чате вы уже всё подробно объясняли.
        </div>
      </div>
    </>
  )
}
