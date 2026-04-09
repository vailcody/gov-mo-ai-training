import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide28PracticalTips({}: SlideProps) {
  return (
    <>
      <span className="slide-number">30</span>
      <h2 className="reveal">Практические советы</h2>

      <div className="card-grid">
        <div className="card highlighted">
          <h3>Начните с малого</h3>
          <ul>
            <li>Выберите одну повторяющуюся задачу</li>
            <li>Попробуйте ИИ на ней</li>
            <li>Оцените результат</li>
            <li>Масштабируйте при успехе</li>
          </ul>
        </div>

        <div className="card">
          <h3>Контролируйте</h3>
          <ul>
            <li>ИИ — помощник, не замена</li>
            <li>Всегда проверяйте результат</li>
            <li>Не отправляйте без вычитки</li>
            <li>Фиксируйте ошибки модели</li>
          </ul>
        </div>

        <div className="card">
          <h3>Обучайте коллег</h3>
          <ul>
            <li>Покажите работающие примеры</li>
            <li>Предупредите об ограничениях</li>
            <li>Создайте инструкции</li>
            <li>Обменивайтесь опытом</li>
          </ul>
        </div>

        <div className="card">
          <h3>Соблюдайте безопасность</h3>
          <ul>
            <li>Не вводите персональные данные</li>
            <li>Используйте одобренные сервисы</li>
            <li>Следуйте 152-ФЗ</li>
            <li>Ведите журнал использования</li>
          </ul>
        </div>
      </div>
    </>
  )
}