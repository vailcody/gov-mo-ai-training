import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideKodikTool({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Практический инструмент: Kodik</h2>

      <div className="card-grid">
        <div className="card highlighted">
          <h3>Kodik — российская AI-IDE</h3>
          <ul>
            <li>Среда разработки с встроенным ИИ-агентом</li>
            <li>Работает без VPN</li>
            <li>Автономно создаёт файлы и вносит изменения в проект</li>
            <li>Маскирует конфиденциальные данные перед отправкой в облако</li>
          </ul>
        </div>

        <div className="card">
          <h3>Что умеет</h3>
          <ul>
            <li>Работает с файлами, текстами и папками</li>
            <li>Создаёт автоматизации процессов</li>
            <li>Выполняет повторяющиеся инструкции</li>
            <li>Автономно вносит изменения в проект</li>
          </ul>
        </div>

        <div className="card">
          <h3>Для госслужащих</h3>
          <ul>
            <li>Локальный анонимайзер (NER-модель) защищает данные</li>
            <li>Настраиваемые корпоративные правила безопасности</li>
            <li>Актуально для задач автоматизации документооборота</li>
          </ul>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <p><strong>Скачать Kodik:</strong> <a href="https://vibekodik.ru/gov-mo" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent, #4FC3F7)', textDecoration: 'underline' }}>vibekodik.ru/gov-mo</a></p>
        <p style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.3rem' }}>Доступно для Windows, macOS и Linux</p>
      </div>
    </>
  )
}