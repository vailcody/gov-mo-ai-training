import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideOldProblems({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')
  return (
    <>
      <span className="slide-number">{num}</span>
      <h2 className="reveal">Почему это не масштабируется</h2>

      <div className="card-grid reveal">
        <div className="card">
          <h3>Разные версии</h3>
          <p>Библиотеки и языки на компьютере разработчика отличаются от сервера. «У меня работает» — не работает у пользователей.</p>
        </div>
        <div className="card">
          <h3>Сетевые сбои</h3>
          <p>FTP-загрузка прерывается. Часть файлов не доходит — сайт падает или показывает ошибки.</p>
        </div>
        <div className="card highlighted">
          <h3>Даунтайм</h3>
          <p>Пользователи видят сломанный сайт в момент обновления. Каждый деплой — риск потери посетителей.</p>
        </div>
        <div className="card">
          <h3>Нет отката</h3>
          <p>Нет системы версий. Если что-то сломалось — откатываться вручную, надеясь, что помнишь, как было.</p>
        </div>
      </div>
    </>
  )
}