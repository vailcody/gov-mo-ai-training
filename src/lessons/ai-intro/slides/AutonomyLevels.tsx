import type { SlideProps } from '../../../components/PresentationShell'

const LEVELS = [
  {
    num: 'L1',
    title: 'Draft Assist',
    subtitle: 'Черновики ИИ',
    desc: 'ИИ пишет черновики ответов на обращения, сотрудник редактирует и отправляет. Каждое сообщение на контроле.',
  },
  {
    num: 'L2',
    title: 'Human-in-the-loop',
    subtitle: 'Согласование перед отправкой',
    desc: 'ИИ формирует ответ и останавливается на explicit sign-off. Оператор подтверждает в тикет-системе перед публикацией.',
  },
  {
    num: 'L3',
    title: 'Supervised workflow',
    subtitle: 'Автоответ с контролем',
    desc: 'ИИ классифицирует обращение по критериям, маршрутизирует, отправляет типовые ответы. Человек проверяет выборку.',
  },
  {
    num: 'L4',
    title: 'Self-healing',
    subtitle: 'Самокоррекция',
    desc: 'ИИ работает в рамках guardrails, сам выявляет проблемные ответы и корректирует формулировки без вмешательства.',
  },
  {
    num: 'L5',
    title: 'Full autonomy',
    subtitle: 'Полная автономия',
    desc: 'Система отвечает на обращения самостоятельно. Человек = надзорный совет. Для госуслуг пока недостижимо.',
  },
]

export default function SlideAutonomyLevels({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')
  return (
    <>
      <span className="slide-number">{num}</span>
      <h2 className="reveal">5 уровней автономии ИИ</h2>
      <p className="reveal sa-subtitle">
        Фреймворк адаптирован под задачи ЦА: ответы на обращения граждан
      </p>

      <div className="sa-image-wrap reveal">
        <img
          src="/ai-intro/autonomy-levels.jpg"
          alt="5 уровней автономии — от ручного управления до полной автоматизации"
          loading="lazy"
        />
      </div>

      <div className="sa-grid reveal">
        {LEVELS.map((l) => (
          <div className="sa-col" key={l.num}>
            <div className="sa-col-badge">{l.num}</div>
            <h4 className="sa-col-title">{l.title}</h4>
            <span className="sa-col-subtitle">{l.subtitle}</span>
            <p className="sa-col-desc">{l.desc}</p>
          </div>
        ))}
      </div>
    </>
  )
}
