import { useEffect, useRef, useState } from 'react'
import {
  Clock,
  Target,
  Search,
  FileText,
  CheckCircle,
  XCircle,
  Wrench,
  MessageSquare,
  Shield,
  Database,
  FileCode,
  Bookmark,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const slides = [
  // Slide 1: Title
  {
    type: 'title',
    content: (
      <div className="slide title-slide">
        <div className="slide-content">
          <div className="label">Обучение для государственных служащих</div>
          <h1>ИИ для ответов на обращения граждан</h1>
          <p className="subtitle">Практическое занятие по использованию ИИ-ассистентов</p>
          
          <div className="meta-info">
            <div className="meta-item">
              <span className="meta-label">Эксперт</span>
              <span className="meta-value">Чуйков К.Э.</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Формат</span>
              <span className="meta-value">2 часа, очно</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Группы</span>
              <span className="meta-value">10.04, 24.04, 15.05</span>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 2: Agenda
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <div className="label">Программа</div>
          <h2>Что мы изучим за 2 часа</h2>
          
          <div className="grid-2">
            <div className="card">
              <Target size={32} strokeWidth={2} />
              <h4>Блок 1: Введение</h4>
              <p>Что такое ИИ, возможности и ограничения, безопасность данных</p>
            </div>
            <div className="card">
              <Search size={32} strokeWidth={2} />
              <h4>Блок 2: Анализ обращений</h4>
              <p>Извлекаем суть, эмоции, вопросы за 5 секунд</p>
            </div>
            <div className="card">
              <FileText size={32} strokeWidth={2} />
              <h4>Блок 3: Промпты</h4>
              <p>Генерируем черновики ответов с помощью ИИ</p>
            </div>
            <div className="card">
              <FileCode size={32} strokeWidth={2} />
              <h4>Блок 4: Шаблоны</h4>
              <p>Адаптируем типовые ответы под конкретные обращения</p>
            </div>
            <div className="card">
              <CheckCircle size={32} strokeWidth={2} />
              <h4>Блок 5: Проверка</h4>
              <p>Редактируем и проверяем ИИ-тексты</p>
            </div>
            <div className="card">
              <Wrench size={32} strokeWidth={2} />
              <h4>Блок 6: Практикум</h4>
              <p>Работаем с реальными обращениями</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 3: Block 1 - What is AI
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <div className="time-badge">
            <Clock size={16} />
            Блок 1 • 15 минут
          </div>
          <h2>Что такое ИИ-ассистент</h2>
          
          <div className="highlight-box">
            <p><strong>ИИ — не замена человеку, а усилитель.</strong><br />
            Как калькулятор для бухгалтера или навигатор для водителя.</p>
          </div>
          
          <div className="grid-2">
            <div>
              <h3>Что ИИ может</h3>
              <ul className="check-list">
                <li>Анализировать текст (извлекать суть, эмоции, факты)</li>
                <li>Генерировать черновики ответов</li>
                <li>Упрощать канцелярит</li>
                <li>Проверять тональность текста</li>
              </ul>
            </div>
            <div>
              <h3>Чего ИИ НЕ может</h3>
              <ul className="check-list x-list">
                <li>Принимать решения за вас</li>
                <li>Знать внутренние регламенты (если не загрузили)</li>
                <li>Гарантировать юридическую точность</li>
                <li>Работать с персональными данными в публичных ИИ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 4: Data Security
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <h2>Безопасность данных</h2>
          
          <div className="warning-box">
            <p><strong>Важно!</strong> Публичные ИИ (ChatGPT, Claude) — НЕ для персональных данных граждан</p>
          </div>
          
          <div className="grid-3">
            <div className="card">
              <XCircle size={24} strokeWidth={2} color="#ef4444" />
              <h4>НЕ загружать</h4>
              <p>ФИО граждан, адреса, телефоны, паспортные данные</p>
            </div>
            <div className="card">
              <CheckCircle size={24} strokeWidth={2} color="#10b981" />
              <h4>Анонимизировать</h4>
              <p>Иван Иванович → Гражданин И.<br />ул. Ленина 15 → ул. Л., д. 15</p>
            </div>
            <div className="card">
              <Database size={24} strokeWidth={2} color="#3b82f6" />
              <h4>Корпоративные ИИ</h4>
              <p>GigaChat, YandexGPT — если есть доступ в организации</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 5: Block 2 - Analysis
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <div className="time-badge">
            <Clock size={16} />
            Блок 2 • 15 минут
          </div>
          <h2>Анализ обращений с ИИ</h2>
          
          <p>Обращения граждан часто длинные, эмоциональные, несструктурированные.<br />
          ИИ извлекает суть за 5 секунд.</p>
          
          <h3>Что извлекаем:</h3>
          <ol className="number-list">
            <li><strong>Суть проблемы</strong> — 1-2 предложения простым языком</li>
            <li><strong>Ключевые вопросы</strong> — что именно спрашивает гражданин</li>
            <li><strong>Эмоциональный фон</strong> — нейтральный/негативный/агрессивный</li>
            <li><strong>Даты и сроки</strong> — если указаны</li>
            <li><strong>Приоритет</strong> — срочно/обычно/можно отложить</li>
          </ol>
        </div>
      </div>
    )
  },

  // Slide 6: Prompt #1
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <h2>Промпт #1: Анализ обращения</h2>
          
          <div className="code-block">
            <code>{`Проанализируй обращение гражданина и извлеки:

1. СУТЬ ПРОБЛЕМЫ (1-2 предложения, простым языком)
2. КЛЮЧЕВЫЕ ВОПРОСЫ (списком)
3. ЭМОЦИОНАЛЬНЫЙ ФОН (нейтральный/негативный/агрессивный)
4. ДАТЫ И СРОКИ (если указаны)
5. РЕКОМЕНДУЕМЫЙ ПРИОРИТЕТ

Текст обращения:
[ВСТАВИТЬ ТЕКСТ]`}</code>
          </div>
          
          <div className="highlight-box">
            <p>Один промпт — один результат. Копируй, вставляй обращение, получай анализ.</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 7: Block 3 - Prompts Structure
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <div className="time-badge">
            <Clock size={16} />
            Блок 3 • 20 минут
          </div>
          <h2>Структура хорошего промпта</h2>
          
          <div className="grid-2">
            <div className="card">
              <h4>1. Роль</h4>
              <p>"Ты — помощник сотрудника органа власти"</p>
            </div>
            <div className="card">
              <h4>2. Контекст</h4>
              <p>Обращение гражданина, регламенты, ограничения</p>
            </div>
            <div className="card">
              <h4>3. Задача</h4>
              <p>Что именно нужно сделать (анализ, черновик, проверка)</p>
            </div>
            <div className="card">
              <h4>4. Ограничения</h4>
              <p>Стиль, тон, что НЕ делать</p>
            </div>
          </div>
          
          <div className="highlight-box">
            <p>Чем точнее опишешь задачу, тем лучше результат</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 8: Prompt #2
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <h2>Промпт #2: Генерация черновика</h2>
          
          <div className="code-block">
            <code>{`Ты — помощник сотрудника органа власти. 
Твоя задача — подготовить ЧЕРНОВИК ответа гражданину.

ОБРАЩЕНИЕ ГРАЖДАНИНА:
[ВСТАВИТЬ ТЕКСТ]

ВАЖНО: Сначала задай УТОЧНЯЮЩИЕ ВОПРОСЫ:
1. Есть ли регламенты/сроки по этому вопросу?
2. Какие действия уже предприняты?
3. Что можно обещать, а что нет?
4. Есть ли примеры ответов в таком стиле?

После моих ответов подготовь черновик.

ТРЕБОВАНИЯ:
- Официально-деловой, но понятный язык
- Эмпатичный тон
- НЕ обещать того, что не в компетенции`}</code>
          </div>
          
          <div className="highlight-box">
            <p><strong>Почему так лучше:</strong> Модель не угадывает — она спрашивает. Меньше шаблонов, больше конкретики.</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 9: Block 4 - Templates
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <div className="time-badge">
            <Clock size={16} />
            Блок 4 • 15 минут
          </div>
          <h2>Работа с шаблонами</h2>
          
          <div className="grid-2">
            <div>
              <h3>Проблема</h3>
              <p>Шаблоны не учитывают контекст конкретного гражданина. Копипаст = формализм.</p>
            </div>
            <div>
              <h3>Решение</h3>
              <p>ИИ адаптирует шаблон под обращение за 1-2 минуты вместо 5-10.</p>
            </div>
          </div>
          
          <h3>Экономия времени:</h3>
          <div className="grid-3">
            <div className="card">
              <h4>Без ИИ</h4>
              <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>5-10 мин</p>
              <p>на адаптацию шаблона</p>
            </div>
            <div className="card" style={{ borderColor: 'var(--accent)' }}>
              <h4>С ИИ</h4>
              <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>1-2 мин</p>
              <p>на адаптацию + проверку</p>
            </div>
            <div className="card">
              <h4>Результат</h4>
              <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--success)', marginBottom: '0.5rem' }}>3-5x</p>
              <p>быстрее</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 10: Block 5 - Review
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <div className="time-badge">
            <Clock size={16} />
            Блок 5 • 15 минут
          </div>
          <h2>Проверка и редактирование</h2>
          
          <div className="warning-box">
            <p><strong>ИИ ошибается!</strong> Галлюцинации, неточные факты, неподходящий тон. Финальное слово — за человеком.</p>
          </div>
          
          <h3>Что проверять:</h3>
          <div className="grid-2">
            <ul className="check-list">
              <li><strong>Факты</strong> — даты, нормы, ссылки</li>
              <li><strong>Юридическая корректность</strong></li>
            </ul>
            <ul className="check-list">
              <li><strong>Тон</strong> — не сухой, но и не панибратский</li>
              <li><strong>Канцелярит</strong> — убирать штампы</li>
            </ul>
          </div>
          
          <div className="highlight-box">
            <p>ИИ как редактор: Можно попросить проверить свой текст: "Проверь ответ на канцелярит и тон"</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 11: Prompts #4-5
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <h2>Промпты для проверки</h2>
          
          <div className="grid-2">
            <div>
              <h3>Промпт #4: Проверка ответа</h3>
              <div className="code-block" style={{ fontSize: '0.75rem' }}>
                <code>{`ПРОВЕРЬ текст ответа:

1. Канцелярит — замени на простой язык
2. Тон — не снисходительный?
3. Фактические ошибки
4. Пропущенные элементы

ТЕКСТ:
[ВСТАВИТЬ]`}</code>
              </div>
            </div>
            <div>
              <h3>Промпт #5: Упрощение</h3>
              <div className="code-block" style={{ fontSize: '0.75rem' }}>
                <code>{`УПРОСТИ текст:

1. Отглагольные → глаголы
   (проведение → провели)
2. Убери лишние слова
   (в настоящее время → сейчас)
3. Разбей длинные предложения
4. Убери штампы (в целях → чтобы)

ТЕКСТ:
[ВСТАВИТЬ]`}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 12: Block 6 - Practice
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <div className="time-badge">
            <Clock size={16} />
            Блок 6 • 30 минут
          </div>
          <h2>Практикум</h2>
          
          <p>Работаем в парах с типовыми обращениями</p>
          
          <div className="grid-3">
            <div className="card">
              <MessageSquare size={32} strokeWidth={2} />
              <h4>Кейс 1</h4>
              <p>Жалоба на ЖКХ (эмоциональная пенсионерка)</p>
            </div>
            <div className="card">
              <MessageSquare size={32} strokeWidth={2} />
              <h4>Кейс 2</h4>
              <p>Вопрос по льготам (многодетная мама)</p>
            </div>
            <div className="card">
              <MessageSquare size={32} strokeWidth={2} />
              <h4>Кейс 3</h4>
              <p>Агрессивное обращение (задержка ответа)</p>
            </div>
            <div className="card">
              <MessageSquare size={32} strokeWidth={2} />
              <h4>Кейс 4</h4>
              <p>Запрос информации (земельный участок)</p>
            </div>
            <div className="card">
              <MessageSquare size={32} strokeWidth={2} />
              <h4>Кейс 5</h4>
              <p>Благодарность (хороший МФЦ)</p>
            </div>
          </div>
          
          <div className="highlight-box">
            <p>Задание: Применить все 5 промптов к выбранному обращению</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 13: Rules & Few-shot
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <h2>Коллекция правил и примеров</h2>
          
          <div className="warning-box">
            <p><strong>Важно!</strong> Каждый новый чат = пустой контекст. История теряется. Правила нужно переносить из чата в чат.</p>
          </div>
          
          <div className="grid-2">
            <div className="card">
              <Bookmark size={24} strokeWidth={2} />
              <h4>rules.txt</h4>
              <p>Замечай что модель делает неправильно → фиксируй правило → переноси в следующий чат</p>
            </div>
            <div className="card">
              <FileCode size={24} strokeWidth={2} />
              <h4>examples.txt</h4>
              <p>Коллекция удачных ответов → используй как few-shot примеры</p>
            </div>
          </div>
          
          <div className="code-block" style={{ fontSize: '0.8rem' }}>
            <code>{`Пример файла правил:

# Правила для ответов гражданам

1. НЕ использовать фразы "в настоящее время", "в целях"
2. Всегда указывать конкретные сроки
3. НЕ обещать то, что не в компетенции
4. Начинать с эмпатии: "Понимаю ваше беспокойство..."

# Использование:
Скопируй правила в начало каждого нового чата`}</code>
          </div>
        </div>
      </div>
    )
  },

  // Slide 14: Materials
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <div className="time-badge">
            <Clock size={16} />
            Блок 7 • 10 минут
          </div>
          <h2>Раздаточные материалы</h2>
          
          <div className="grid-3">
            <div className="card">
              <FileText size={32} strokeWidth={2} />
              <h4>PDF с промптами</h4>
              <p>Все 5 промптов готовы к копированию</p>
            </div>
            <div className="card">
              <FileCode size={32} strokeWidth={2} />
              <h4>Шпаргалка</h4>
              <p>Правила работы с ИИ, анонимизация</p>
            </div>
            <div className="card">
              <ExternalLink size={32} strokeWidth={2} />
              <h4>Ссылки</h4>
              <p>Telegram-канал «Вайб-кодинг по Чуйкову»</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 15: Summary
  {
    type: 'default',
    content: (
      <div className="slide">
        <div className="slide-content">
          <h2>Главные выводы</h2>
          
          <div className="grid-2">
            <div className="card">
              <h4>1. ИИ — инструмент, не замена</h4>
              <p>Человек всегда проверяет и утверждает результат</p>
            </div>
            <div className="card">
              <h4>2. Анонимизация обязательна</h4>
              <p>Никаких персональных данных в публичных ИИ</p>
            </div>
            <div className="card">
              <h4>3. Промпты — это навык</h4>
              <p>Чем точнее опишешь, тем лучше результат</p>
            </div>
            <div className="card">
              <h4>4. Few-shot ускоряет работу</h4>
              <p>Коллекция примеров = консистентный стиль</p>
            </div>
          </div>
          
          <div className="highlight-box" style={{ marginTop: '2rem' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              Цель: Сократить время на ответ с 10 минут до 2-3 минут<br />
              без потери качества
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 16: Final
  {
    type: 'title',
    content: (
      <div className="slide title-slide">
        <div className="slide-content">
          <h1>Спасибо за внимание!</h1>
          <p className="subtitle">Вопросы?</p>
          
          <div className="meta-info" style={{ marginTop: '3rem' }}>
            <div className="meta-item">
              <span className="meta-label">Telegram</span>
              <span className="meta-value">@chuikoff</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Канал</span>
              <span className="meta-value">«Вайб-кодинг по Чуйкову»</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault()
        setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        setCurrentSlide(prev => Math.max(prev - 1, 0))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    slideRefs.current[currentSlide]?.scrollIntoView({ behavior: 'smooth' })
  }, [currentSlide])

  return (
    <div ref={containerRef}>
      {/* Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${((currentSlide + 1) / slides.length) * 100}%`,
          height: '3px',
          background: 'linear-gradient(90deg, var(--accent), var(--accent-light))',
          zIndex: 1000,
          transition: 'width 0.3s ease'
        }}
      />

      {/* Navigation Dots */}
      <nav
        style={{
          position: 'fixed',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          zIndex: 100
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: index === currentSlide ? 'var(--accent)' : 'var(--text-muted)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: index === currentSlide ? 'scale(1.5)' : 'scale(1)'
            }}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </nav>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={el => { slideRefs.current[index] = el }}
        >
          {slide.content}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
        disabled={currentSlide === 0}
        style={{
          position: 'fixed',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--bg-tertiary)',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
          opacity: currentSlide === 0 ? 0.3 : 1,
          zIndex: 100
        }}
      >
        <ChevronLeft size={24} color="var(--text-secondary)" />
      </button>

      <button
        onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
        disabled={currentSlide === slides.length - 1}
        style={{
          position: 'fixed',
          right: '5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--bg-tertiary)',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer',
          opacity: currentSlide === slides.length - 1 ? 0.3 : 1,
          zIndex: 100
        }}
      >
        <ChevronRight size={24} color="var(--text-secondary)" />
      </button>
    </div>
  )
}

export default App
