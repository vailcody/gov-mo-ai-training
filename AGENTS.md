# Правила работы над проектом gov-mo-ai-training

## Стек
- React + TypeScript + Vite
- CSS: vanilla CSS (theme.css + slides.css)
- Расположение слайдов: `src/lessons/{theme}/slides/*.tsx`

## Пути к картинкам
Проект использует `base: '/gov-mo-ai-training/'` в `vite.config.ts`.  
Картинки из `public/` **всегда** указываются через `import.meta.env.BASE_URL`:

```tsx
const BASE = import.meta.env.BASE_URL
<img src={`${BASE}ai-intro/image.jpg`} alt="..." />
```

**Никогда** не использовать абсолютный путь от корня домена: ~~`src="/ai-intro/image.jpg"`~~ — это ломает загрузку на GitHub Pages.

## Стили
- Глобальные стили: `src/styles/theme.css`, `src/styles/slides.css`
- Компонентные стили не используются — всё в глобальных CSS-файлах

## Нумерация слайдов
- Используется `slideIndex` из `SlideProps`
- Номер форматируется как `String(slideIndex + 1).padStart(2, '0')` для отображения

## Билд и деплой
- `npm run build` → генерирует `docs/` (не `dist/`)
- Деплой на GitHub Pages через `docs/` папку

## Новые слайды
- Копировать шаблон из существующего слайда той же темы
- Импортировать в `App.tsx` и добавлять в массив слайдов
- CSS добавлять в `slides.css` с комментарием-секцией
