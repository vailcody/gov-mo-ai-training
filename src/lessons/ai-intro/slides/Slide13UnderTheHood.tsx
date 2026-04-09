import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide11UnderTheHood({}: SlideProps) {
  return (
    <>
      <span className="slide-number">13</span>
      <h2 className="reveal">Что «под капотом» у ChatGPT</h2>

      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Вы пишете запрос</div>
            <div className="step-desc">Текст разбивается на токены — числовые представления слов и их частей</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Обработка в модели</div>
            <div className="step-desc">Токены проходят через десятки слоёв нейросети — каждый слой уточняет понимание контекста</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Генерация ответа</div>
            <div className="step-desc">Модель выдаёт распределение вероятностей для следующего токена и выбирает наиболее вероятный</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Постобработка</div>
            <div className="step-desc">Фильтры безопасности, форматирование, проверка на соответствие правилам использования</div>
          </div>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p>Весь процесс занимает секунды. Но модель не «понимает» текст — она вычисляет вероятности. Это важно помнить.</p>
      </div>
    </>
  )
}