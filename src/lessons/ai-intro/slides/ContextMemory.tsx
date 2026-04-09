import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideContextMemory({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Ограничение: у модели нет памяти между чатами</h2>

      <div className="highlight-box reveal">
        <p><strong>Проблема:</strong> большинство моделей не помнят предыдущие диалоги. Каждый новый чат для них начинается почти с нуля.</p>
      </div>

      <div className="card-grid reveal">
        <div className="card">
          <h3>Что происходит</h3>
          <ul>
            <li>Теряется договорённый тон ответа</li>
            <li>Пропадают требования к структуре</li>
            <li>Модель снова начинает угадывать формат</li>
            <li>Ошибки и удачные находки не накапливаются автоматически</li>
          </ul>
        </div>

        <div className="card highlighted">
          <h3>Что такое контекстное окно</h3>
          <p>Это объём текста, который модель может «видеть» и учитывать за один раз внутри текущего диалога.</p>
          <ul>
            <li>Если информации слишком много, часть контекста теряется</li>
            <li>Если чат новый, старый контекст вообще не виден</li>
            <li>Поэтому важные инструкции нужно передавать заново</li>
          </ul>
        </div>
      </div>
    </>
  )
}
