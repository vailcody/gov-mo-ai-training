import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideWhatIsAI({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Что такое искусственный интеллект</h2>
      
      <div className="highlight-box reveal">
        <p><strong>ИИ — это программа, которая обучается на примерах, а не следует жёстким правилам.</strong></p>
        <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>Как ребёнок учится отличать кошку от собаки — показываем примеры, и он сам находит паттерны.</p>
      </div>
      
      <div className="card-grid">
        <div className="card">
          <h3>Традиционная программа</h3>
          <ul>
            <li>Правила заданы человеком</li>
            <li>Один вход → один выход</li>
            <li>Нет гибкости</li>
          </ul>
        </div>
        
        <div className="card">
          <h3>Искусственный интеллект</h3>
          <ul>
            <li>Учится на данных</li>
            <li>Находит закономерности сам</li>
            <li>Адаптируется к новым ситуациям</li>
          </ul>
        </div>
      </div>
    </>
  )
}
