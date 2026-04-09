import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideRegulation({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Регулирование ИИ в России</h2>

      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">152-ФЗ «О персональных данных»</div>
            <div className="step-desc">Обработка персональных данных только с согласия субъекта, через лицензированных операторов</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Указ Президента РФ № 662</div>
            <div className="step-desc">Приоритет использования отечественных ИИ-решений в госсекторе</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Национальный кодекс этики в сфере ИИ</div>
            <div className="step-desc">Принципы прозрачности, безопасности, справедливости и человеческого контроля</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Реестр отечественного ПО</div>
            <div className="step-desc">Госсектор обязан использовать ПО из реестра, если подходящее решение доступно</div>
          </div>
        </div>
      </div>
    </>
  )
}