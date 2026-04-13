import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideWhatIsLLMSimple({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Что такое LLM — простыми словами</h2>

      <div className="highlight-box reveal">
        <p><strong>LLM — это программа, которая научилась понимать и писать текст, читая миллиарды страниц.</strong></p>
      </div>

      <div className="card-grid reveal">
        <div className="card highlighted">
          <h3>Аналогия с человеком</h3>
          <ul>
            <li>Вы прочли всю библиотеку мира</li>
            <li>Теперь можете объяснить сложное простым языком</li>
            <li>Можете написать документ в нужном стиле</li>
            <li>Но иногда ошибаетесь — как любой человек</li>
          </ul>
        </div>

        <div className="card">
          <h3>Что важно понимать</h3>
          <ul>
            <li>LLM не «думает» — она угадывает следующее слово</li>
            <li>Не имеет доступа к вашим данным</li>
            <li>Не помнит предыдущие разговоры</li>
            <li>Может ошибаться и выдумывать факты</li>
          </ul>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p><strong>Главное:</strong> LLM — инструмент, а не замена человека. Она помогает, но решение всегда за вами.</p>
      </div>
    </>
  )
}