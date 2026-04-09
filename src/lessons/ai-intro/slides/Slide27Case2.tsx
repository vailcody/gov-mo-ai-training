import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide25Case2({}: SlideProps) {
  return (
    <>
      <span className="slide-number">27</span>
      <h2 className="reveal">Кейс: подготовка ответов</h2>

      <div className="highlight-box reveal">
        <p><strong>Задача:</strong> инспектор тратит 20–30 минут на каждый ответ. Стандартные обращения — 80% от потока.</p>
      </div>

      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">ИИ получает обращение</div>
            <div className="step-desc">Текст обращения автоматически загружается в систему</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Генерация черновика</div>
            <div className="step-desc">ИИ подбирает нормативную базу и формирует черновик ответа по шаблону</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Проверка инспектором</div>
            <div className="step-desc">Инспектор проверяет фактологию, вносит правки и подписывает</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Результат</div>
            <div className="step-desc">Время на стандартное обращение: 20 минут → 5 минут. Качество не страдает.</div>
          </div>
        </div>
      </div>
    </>
  )
}