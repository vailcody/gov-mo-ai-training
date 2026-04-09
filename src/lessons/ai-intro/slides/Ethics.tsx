import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideEthics({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Этика использования ИИ</h2>

      <div className="card-grid">
        <div className="card">
          <h3>Прозрачность</h3>
          <ul>
            <li>Граждане должны знать, что с ними работает ИИ</li>
            <li>Решения должны быть объяснимыми</li>
          </ul>
        </div>

        <div className="card">
          <h3>Ответственность</h3>
          <ul>
            <li>Ответственность несёт человек, не ИИ</li>
            <li>Решение подписывает инспектор</li>
          </ul>
        </div>

<div className="card">
          <h3>Человеческий контроль</h3>
          <ul>
            <li>ИИ — инструмент, не руководитель</li>
            <li>Каждое решение проходит через человека</li>
          </ul>
        </div>
      </div>
    </>
  )
}