import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideAssistantVsAgent({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Ассистент и агент — не одно и то же</h2>

      <div className="assistant-agent-cards reveal">
        <div className="assistant-agent-card">
          <div className="assistant-agent-label">Ассистент</div>
          <h3>Отвечает и помогает думать</h3>
          <ul>
            <li>Объясняет</li>
            <li>Предлагает варианты</li>
            <li>Пишет текст по запросу</li>
            <li>Но почти не делает шаги сам</li>
          </ul>
        </div>

        <div className="assistant-agent-card assistant-agent-card-accent">
          <div className="assistant-agent-label">Агент</div>
          <h3>Может пройти цепочку действий</h3>
          <ul>
            <li>Читает файлы и контекст</li>
            <li>Планирует несколько шагов</li>
            <li>Меняет проект или документы</li>
            <li>Возвращает уже готовый результат</li>
          </ul>
        </div>
      </div>

      <div className="highlight-box reveal">
        <p><strong>Ключевая разница:</strong> ассистент в основном советует, агент может выполнять работу по шагам под контролем человека.</p>
      </div>
    </>
  )
}
