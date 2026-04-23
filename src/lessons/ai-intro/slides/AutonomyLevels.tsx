import type { SlideProps } from '../../../components/PresentationShell'

const BASE = import.meta.env.BASE_URL

const LEVELS = [
  {
    num: 'L1',
    title: 'Подготовка черновиков',
    subtitle: 'ИИ пишет, человек редактирует',
    desc: 'ИИ формирует черновики ответов на обращения граждан, сотрудник проверяет, редактирует и отправляет. Каждое сообщение на контроле человека.',
  },
  {
    num: 'L2',
    title: 'Согласование с оператором',
    subtitle: 'Остановка перед отправкой',
    desc: 'ИИ готовит ответ и останавливается на утверждении. Оператор проверяет в тикет-системе и даёт согласие на публикацию.',
  },
  {
    num: 'L3',
    title: 'Автоматика с контролем',
    subtitle: 'Отправка под наблюдением',
    desc: 'ИИ классифицирует обращение по критериям, маршрутизирует, отправляет типовые ответы. Человек проверяет выборку результатов.',
  },
  {
    num: 'L4',
    title: 'Самокоррекция',
    subtitle: 'Исправление без вмешательства',
    desc: 'ИИ работает в рамках установленных правил, самостоятельно выявляет проблемные ответы и корректирует формулировки.',
  },
  {
    num: 'L5',
    title: 'Полная самостоятельность',
    subtitle: 'Только наблюдение',
    desc: 'Система отвечает на обращения самостоятельно. Человек выступает в роли наблюдательного совета. Для государственных услуг пока недостижимо.',
  },
]

export default function SlideAutonomyLevels({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')
  return (
    <>
      <span className="slide-number">{num}</span>
      <h2 className="reveal">5 уровней автономии ИИ</h2>

      <div className="sa-image-wrap reveal">
        <img
          src={`${BASE}ai-intro/autonomy-levels.jpg`}
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
