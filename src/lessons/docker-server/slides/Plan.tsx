import type { SlideProps } from '../../../components/PresentationShell'

export default function SlidePlan({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')
  return (
    <>
      <span className="slide-number">{num}</span>
      <h2 className="reveal">План лекции</h2>

      <div className="plan-blocks reveal">
        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">01</span>
            <h3>Масштабируемая разработка</h3>
          </div>
          <ul>
            <li>Как было раньше</li>
            <li>Проблемы ручного деплоя</li>
            <li>Современный подход с ветками</li>
            <li>Dev и Production окружения</li>
          </ul>
        </div>

        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">02</span>
            <h3>Докер</h3>
          </div>
          <ul>
            <li>Что такое Докер</li>
            <li>Контейнеры, образы, тома</li>
            <li>Локальная работа с Докер</li>
            <li>Запуск моделей и MCP</li>
          </ul>
        </div>

        <div className="plan-block">
          <div className="plan-block-header">
            <span className="plan-block-num">03</span>
            <h3>Сервер и безопасность</h3>
          </div>
          <ul>
            <li>Покупка сервера и домен</li>
            <li>Настройка через Warp Agent</li>
            <li>SSH-ключи: генерация и настройка</li>
            <li>Установка Dokploy</li>
          </ul>
        </div>
      </div>
    </>
  )
}