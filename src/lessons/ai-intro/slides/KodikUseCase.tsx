import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideKodikUseCase({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Следующий шаг: агентская система Kodik</h2>

      <div className="highlight-box reveal">
        <p><strong>Kodik</strong> — это пример инструмента, который переводит пользователя из режима «спросить у чата» в режим «поставить задачу агенту и получить результат».</p>
      </div>

      <div className="card-grid reveal">
        <div className="card highlighted">
          <h3>Что даёт в работе</h3>
          <ul>
            <li>Помогает не только писать, но и делать</li>
            <li>Автоматизирует цепочки действий</li>
            <li>Подходит и для непрограммистов, если задача понятна</li>
          </ul>
        </div>

        <div className="card">
          <h3>Почему это уместно здесь</h3>
          <ul>
            <li>После ассистентов это следующий уровень зрелости</li>
            <li>Можно собирать персональную систему работы</li>
            <li>Меньше ручной рутины в типовых процессах</li>
          </ul>
        </div>

        <div className="card">
          <h3>Что важно для РФ</h3>
          <ul>
            <li>Доступен без VPN</li>
            <li>Можно оплачивать российской картой</li>
            <li>Есть доступ к зарубежным моделям</li>
            <li>Есть встроенный анонимайзер</li>
          </ul>
        </div>
      </div>

      <div className="highlight-box reveal">
        <p><strong>Скачать Kodik:</strong> <a href="https://vibekodik.ru/gov-mo" target="_blank" rel="noopener noreferrer">vibekodik.ru/gov-mo</a></p>
      </div>
    </>
  )
}
