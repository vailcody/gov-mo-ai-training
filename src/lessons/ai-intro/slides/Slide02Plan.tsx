import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide02Plan({}: SlideProps) {
  return (
    <>
      <span className="slide-number">02</span>
      <h2 className="reveal">План лекции</h2>
      
      <div className="plan-blocks reveal">
        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">01</span>
            <h3>Введение</h3>
            <span className="plan-block-time">20 мин</span>
          </div>
          <ul>
            <li>Что такое искусственный интеллект</li>
            <li>Краткая история: от 1950-х до сегодня</li>
            <li>Почему именно сейчас — взрыв 2022–2023</li>
            <li>Типы ИИ: узкий и общий</li>
          </ul>
        </div>

        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">02</span>
            <h3>Как работает</h3>
            <span className="plan-block-time">20 мин</span>
          </div>
          <ul>
            <li>ML, нейросети, LLM — простым языком</li>
            <li>Аналогии из жизни</li>
            <li>Что «под капотом» у ChatGPT</li>
          </ul>
        </div>

        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">03</span>
            <h3>Возможности</h3>
            <span className="plan-block-time">20 мин</span>
          </div>
          <ul>
            <li>Генерация и анализ текста</li>
            <li>Классификация обращений</li>
            <li>Автоматизация рутины</li>
            <li>Примеры для ЖКХ</li>
          </ul>
        </div>

        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">04</span>
            <h3>Ограничения и риски</h3>
            <span className="plan-block-time">15 мин</span>
          </div>
          <ul>
            <li>Галлюцинации ИИ</li>
            <li>Конфиденциальность данных</li>
            <li>Что ИИ умеет, а что — нет</li>
          </ul>
        </div>

        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">05</span>
            <h3>Практика</h3>
            <span className="plan-block-time">25 мин</span>
          </div>
          <ul>
            <li>Демонстрация: ChatGPT / Claude</li>
            <li>Разбор кейсов из ЖКХ</li>
            <li>Вопросы и ответы</li>
          </ul>
        </div>
      </div>
    </>
  )
}
