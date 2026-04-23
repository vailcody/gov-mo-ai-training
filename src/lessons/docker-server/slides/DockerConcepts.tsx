import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideDockerConcepts({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')
  return (
    <>
      <span className="slide-number">{num}</span>
      <h2 className="reveal">Три ключевые сущности</h2>

      <div className="card-row reveal">
        <div className="card highlighted">
          <h3>Образ (Image)</h3>
          <p>Шаблон для создания контейнера. Содержит ОС, библиотеки и код приложения. Неизменяемый.</p>
        </div>
        <div className="card highlighted">
          <h3>Контейнер (Container)</h3>
          <p>Запущенный экземпляр образа. Изолированная мини-ОС, в которой работает приложение.</p>
        </div>
        <div className="card highlighted">
          <h3>Том (Volume)</h3>
          <p>Хранилище данных, которое переживает перезапуск контейнера. Базы данных, логи, файлы.</p>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p>Образ → Контейнер → Том. Образ создаётся один раз, контейнер можно перезапускать, данные в томе сохраняются.</p>
      </div>
    </>
  )
}