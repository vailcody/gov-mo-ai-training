import type { SlideProps } from '../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

export default function SlideExponentialGrowth({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">ИИ растёт экспоненциально</h2>

      <div className="exponential-layout reveal">
        <div className="exponential-chart">
          <img src={`${BASE}ai-intro/ai-exponential-growth.jpg`} alt="Экспоненциальный рост возможностей ИИ" />
        </div>

        <div className="explanation-block">
          <div className="highlight-box" style={{ marginTop: 0 }}>
            <p><strong>Каждые 3 месяца ИИ удваивает сложность задач,</strong> которые способен выполнять.</p>
            <p style={{ marginTop: '0.5rem', fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)' }}>
              Ось Y — количество часов, которые нужны эксперту для выполнения задачи. Чем выше — тем сложнее задача. ИИ поднимается по этой шкале всё быстрее.
            </p>
          </div>

          <div className="card highlighted" style={{ marginTop: '1rem' }}>
            <h3>Что это значит</h3>
            <ul>
              <li>Задачи, которые ИИ не мог решить год назад — решает сейчас</li>
              <li>Темп ускоряется: то, на что ушли годы, происходит за месяцы</li>
              <li>Сегодняшние ограничения — не показатель завтрашних</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}