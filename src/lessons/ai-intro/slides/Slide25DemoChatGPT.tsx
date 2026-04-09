import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide23DemoChatGPT({}: SlideProps) {
  return (
    <>
      <span className="slide-number">25</span>
      <h2 className="reveal">Демонстрация: ChatGPT</h2>

      <div className="highlight-box reveal">
        <p><strong>Покажем на практике, как ИИ работает с обращениями граждан.</strong></p>
      </div>

      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Простой запрос</div>
            <div className="step-desc">«Напиши ответ на жалобу жильца на холодные батареи»</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Уточняющий запрос</div>
            <div className="step-desc">«Добавь ссылку на постановление Правительства РФ о температурном режиме»</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Классификация</div>
            <div className="step-desc">«Определи категорию и приоритет обращения»</div>
          </div>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p><strong>Важно:</strong> обратите внимание — ответ выглядит убедительно, но нормативные ссылки нужно проверять вручную.</p>
      </div>
    </>
  )
}