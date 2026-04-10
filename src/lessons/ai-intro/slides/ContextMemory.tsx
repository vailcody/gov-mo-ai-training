import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideContextMemory({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Главные причины галлюцинаций</h2>

      <div className="steps reveal">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Отсутствие необходимого контекста</div>
            <div className="step-desc">Как и у людей, без нужных вводных модель начинает достраивать картину по догадкам.</div>
          </div>
        </div>

        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Нет встроенного механизма памяти</div>
            <div className="step-desc">Новый чат не сохраняет автоматически договорённости, примеры и важные уточнения из предыдущего диалога.</div>
          </div>
        </div>

        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Знания ограничены моментом обучения</div>
            <div className="step-desc">Модель знает только те сведения, которые были доступны на момент её обучения, и может не знать свежих изменений.</div>
          </div>
        </div>
      </div>
    </>
  )
}
