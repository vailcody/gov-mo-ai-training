import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideDockerLocal({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')
  return (
    <>
      <span className="slide-number">{num}</span>
      <h2 className="reveal">Докер на компьютере</h2>

      <div className="steps reveal">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Установка</div>
            <div className="step-desc">Docker Desktop для macOS/Windows или Docker Engine для Linux</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Образ</div>
            <div className="step-desc">Dockerfile описывает, что входит в контейнер: ОС, зависимости, команда запуска</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Контейнер</div>
            <div className="step-desc">docker run запускает приложение в изолированной среде за секунды</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Публикация</div>
            <div className="step-desc">Тот же образ разворачивается на любом сервере с Докер без изменений</div>
          </div>
        </div>
      </div>
    </>
  )
}