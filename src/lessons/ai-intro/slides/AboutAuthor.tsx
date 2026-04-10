import type { SlideProps } from '../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function SlideAboutAuthor({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')

  return (
    <>
      <div className="geo-square" style={{ width: 60, height: 60, top: '8%', right: '20%', opacity: 0.12 }} />
      <span className="slide-number reveal">{num}</span>
      <div className="author-layout reveal">
        <div className="author-photo author-photo-large">
          <img src={`${BASE}ai-intro/author.jpg`} alt="Константин Чуйков" />
        </div>
        <div className="author-grid">
          <div className="author-card author-card-name">
            <h2>Константин Чуйков</h2>
          </div>
          <div className="author-card">
            <p className="author-bio">
              Больше 15 лет в IT. Прошел путь от основателя веб-студии до технического директора в стартапе и руководителя направления ИИ в корпорации (ex-Сбер, ex-СберУниверситет).
            </p>
          </div>
          <div className="author-card">
            <p className="author-bio">
              Эксперт и консультант по практическому применению искусственного интеллекта в бизнес-процессах. Проводил обучение по ИИ и вайб-кодингу в Яндексе, СберУниверситете, Синергии и Правительстве МО.
            </p>
          </div>
          <div className="author-card">
            <p className="author-bio">
              Автор канала <a href="https://t.me/vibe_coding" target="_blank" rel="noreferrer">«Вайб-кодинг по Чуйкову»</a> и лидер сообщества вайб-кодеров.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
