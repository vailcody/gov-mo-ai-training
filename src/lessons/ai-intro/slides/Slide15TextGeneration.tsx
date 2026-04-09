import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide13TextGeneration({}: SlideProps) {
  return (
    <>
      <span className="slide-number">15</span>
      <h2 className="reveal">Генерация и анализ текста</h2>

      <div className="card-row">
        <div className="card highlighted">
          <h3>Генерация</h3>
          <ul>
            <li>Письма и ответы на обращения</li>
            <li>Резюме и отчёты</li>
            <li>Инструкции и регламенты</li>
            <li>Переводы на другие языки</li>
          </ul>
        </div>

        <div className="card">
          <h3>Анализ</h3>
          <ul>
            <li>Суммаризация длинных документов</li>
            <li>Извлечение ключевых фактов</li>
            <li>Сравнение версий документов</li>
            <li>Поиск противоречий</li>
          </ul>
        </div>

        <div className="card">
          <h3>Классификация</h3>
          <ul>
            <li>Категоризация обращений</li>
            <li>Определение приоритета</li>
            <li>Маршрутизация задач</li>
            <li>Анализ тональности</li>
          </ul>
        </div>
      </div>
    </>
  )
}