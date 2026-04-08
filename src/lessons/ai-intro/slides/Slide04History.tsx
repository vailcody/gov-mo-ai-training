import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide04History({}: SlideProps) {
  return (
    <>
      <span className="slide-number">04</span>
      <h2 className="reveal">Краткая история ИИ</h2>
      
      <div className="timeline reveal">
        <div className="timeline-item">
          <div className="timeline-year">1956</div>
          <div className="timeline-content">
            <h3>Рождение термина</h3>
            <p>Дартмутская конференция — Джон Маккарти придумал термин Artificial Intelligence</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-year">1997</div>
          <div className="timeline-content">
            <h3>Каспаров vs Deep Blue</h3>
            <p>Компьютер IBM обыграл чемпиона мира по шахматам</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-year">2012</div>
          <div className="timeline-content">
            <h3>Революция глубокого обучения</h3>
            <p>Нейросети начали превосходить человека в распознавании образов</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-year">2022</div>
          <div className="timeline-content">
            <h3>Эпоха чат-ботов</h3>
            <p>ChatGPT. генеративный ИИ стал массовым. Миллионы пользователей за недели.</p>
          </div>
        </div>
      </div>
    </>
  )
}
