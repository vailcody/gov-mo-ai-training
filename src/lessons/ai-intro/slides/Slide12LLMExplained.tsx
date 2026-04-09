import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide10LLMExplained({}: SlideProps) {
  return (
    <>
      <span className="slide-number">12</span>
      <h2 className="reveal">Что такое LLM</h2>

      <div className="highlight-box reveal">
        <p><strong>LLM — Large Language Model — большая языковая модель.</strong> Она предсказывает следующее слово на основе предыдущих.</p>
      </div>

      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Обучение на текстах</div>
            <div className="step-desc">Модель «читает» миллиарды страниц текста — книги, статьи, диалоги, код</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Предсказание</div>
            <div className="step-desc">На основе контекста модель вычисляет, какое слово наиболее вероятно следующее</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Генерация ответа</div>
            <div className="step-desc">Слово за словом модель строит связный текст — от ответа на вопрос до анализа документа</div>
          </div>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p><strong>ChatGPT, Claude, GigaChat, YandexGPT</strong> — всё это LLM. Разница в объёме данных, качестве обучения и дополнительных возможностях.</p>
      </div>
    </>
  )
}