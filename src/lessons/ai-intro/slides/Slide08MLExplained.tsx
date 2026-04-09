import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide08MLExplained({}: SlideProps) {
  return (
    <>
      <span className="slide-number">08</span>
      <h2 className="reveal">Машинное обучение</h2>

      <div className="highlight-box reveal">
        <p><strong>Вместо того чтобы программировать правила — мы показываем примеры, и программа сама находит закономерности.</strong></p>
      </div>

      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Собираем данные</div>
            <div className="step-desc">Тысячи примеров: вот это — жалоба на отопление, а это — запрос на справку</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Обучаем модель</div>
            <div className="step-desc">Алгоритм находит признаки, по которым различаются категории</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Проверяем</div>
            <div className="step-desc">Тестируем на новых данных, которых модель не видела при обучении</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Используем</div>
            <div className="step-desc">Модель классифицирует входящие обращения автоматически</div>
          </div>
        </div>
      </div>
    </>
  )
}