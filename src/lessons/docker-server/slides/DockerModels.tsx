import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideDockerModels({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')
  return (
    <>
      <span className="slide-number">{num}</span>
      <h2 className="reveal">Докер для ИИ</h2>

      <div className="card-grid reveal">
        <div className="card highlighted">
          <h3>Локальные модели</h3>
          <p>Запускайте LLM прямо на своём компьютере через Docker-контейнеры: Ollama, llama.cpp, vLLM. Данные не уходят наружу.</p>
        </div>
        <div className="card">
          <h3>MCP-серверы</h3>
          <p>Model Context Protocol — стандарт подключения инструментов к ИИ-агентам. Докер упрощает запуск и настройку MCP-серверов.</p>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p>Докер — универсальный способ запускать что угодно: от веб-приложений до ИИ-моделей, с гарантированно одинаковым результатом.</p>
      </div>
    </>
  )
}