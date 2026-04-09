import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideKodikComparison({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Ещё одно решение: агентская система Kodik</h2>

      <div className="highlight-box reveal">
        <p><strong>Kodik</strong> — это AI-IDE с агентным режимом работы. Для пользователя это переход от обычного чата к системе, которая может не только советовать, но и выполнять цепочку действий по задаче.</p>
      </div>

      <div className="compare-table reveal">
        <div className="compare-header">
          <div className="compare-cell compare-cell-head">Формат работы</div>
          <div className="compare-cell compare-cell-head">Что делает</div>
          <div className="compare-cell compare-cell-head">Где граница</div>
        </div>

        <div className="compare-row">
          <div className="compare-cell compare-label">Обычный чат</div>
          <div className="compare-cell">Отвечает на вопрос, генерирует текст, даёт советы</div>
          <div className="compare-cell">Почти всё дальше делает человек вручную</div>
        </div>

        <div className="compare-row">
          <div className="compare-cell compare-label">Ассистент</div>
          <div className="compare-cell">Помогает анализировать, структурировать, предлагать варианты действий</div>
          <div className="compare-cell">Человек всё ещё остаётся основным исполнителем</div>
        </div>

        <div className="compare-row compare-row-accent">
          <div className="compare-cell compare-label">Агент</div>
          <div className="compare-cell">Может сам пройти несколько шагов: прочитать файлы, изменить проект, подготовить результат</div>
          <div className="compare-cell">Человек ставит задачу и контролирует итог, а не делает каждый шаг руками</div>
        </div>
      </div>

      <div className="card-grid reveal">
        <div className="card highlighted">
          <h3>Почему это важно</h3>
          <ul>
            <li>Подходит не только программистам</li>
            <li>Позволяет автоматизировать цепочки действий, а не только получать ответы</li>
            <li>Снижает объём ручной рутины</li>
          </ul>
        </div>

        <div className="card">
          <h3>Что важно для РФ</h3>
          <ul>
            <li>Доступен без VPN</li>
            <li>Можно оплачивать российской картой</li>
            <li>Есть доступ не только к российским, но и к зарубежным моделям</li>
          </ul>
        </div>

        <div className="card">
          <h3>Что важно для работы с данными</h3>
          <ul>
            <li>Есть встроенный анонимайзер</li>
            <li>Персональные данные можно удалять перед отправкой в облачные модели</li>
            <li>Это особенно актуально для обращений граждан и служебных текстов</li>
          </ul>
        </div>
      </div>
    </>
  )
}
