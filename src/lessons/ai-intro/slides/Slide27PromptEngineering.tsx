import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide27PromptEngineering({}: SlideProps) {
  return (
    <>
      <span className="slide-number">27</span>
      <h2 className="reveal">Как правильно писать запросы</h2>

      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Будьте конкретны</div>
            <div className="step-desc">Вместо «напиши ответ» → «напиши официальный ответ на жалобу на отопление, со ссылкой на ГОСТ и сроками»</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Задайте роль</div>
            <div className="step-desc">«Ты — инспектор по работе с обращениями граждан. Подготовь ответ...»</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Уточняйте формат</div>
            <div className="step-desc">«Ответ в формате официального письма, не более 1 страницы»</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Итерируйте</div>
            <div className="step-desc">Если результат не устроил — уточните запрос, добавьте контекст, попросите исправить конкретное</div>
          </div>
        </div>
      </div>
    </>
  )
}