import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide29Checklist({}: SlideProps) {
  return (
    <>
      <span className="slide-number">30</span>
      <h2 className="reveal">Чек-лист: можно ли использовать ИИ?</h2>

      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Задача повторяющаяся?</div>
            <div className="step-desc">Если задача уникальная — ИИ может не помочь. Если повторяется 100+ раз — точно стоит попробовать.</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Результат можно проверить?</div>
            <div className="step-desc">Если ошибку невозможно заметить без экспертизы — не поручайте ИИ.</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Нет персональных данных?</div>
            <div className="step-desc">Если нужны ФИО, адреса, номера дел — используйте корпоративный сервис с локальным размещением.</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Есть человек для контроля?</div>
            <div className="step-desc">ИИ не должен работать без надзора. Каждый результат — на проверку специалисту.</div>
          </div>
        </div>
      </div>
    </>
  )
}