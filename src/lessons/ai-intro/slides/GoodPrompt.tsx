import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideGoodPrompt({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')
  return (
    <>
      <span className="slide-number">{num}</span>
      <h2 className="reveal">Принципы хорошего промпта</h2>

      <div className="prompt-principles reveal">
        <div className="prompt-principle">
          <div className="prompt-principle-num">01</div>
          <div className="prompt-principle-content">
            <h3>Чёткая роль</h3>
            <p>«Ты — специалист по ЖКХ с 10-летним опытом...»</p>
          </div>
        </div>

        <div className="prompt-principle">
          <div className="prompt-principle-num">02</div>
          <div className="prompt-principle-content">
            <h3>Конкретная задача</h3>
            <p>«Составь ответ на обращение гражданина о протечке крыши...»</p>
          </div>
        </div>

        <div className="prompt-principle">
          <div className="prompt-principle-num">03</div>
          <div className="prompt-principle-content">
            <h3>Формат ответа</h3>
            <p>«Ответ должен содержать ссылку на нормативный акт, быть в деловом стиле, не превышать 3 абзаца»</p>
          </div>
        </div>

        <div className="prompt-principle">
          <div className="prompt-principle-num">04</div>
          <div className="prompt-principle-content">
            <h3>Ограничения</h3>
            <p>«Не используй информацию, которой нет в предоставленных документах»</p>
          </div>
        </div>
      </div>
    </>
  )
}