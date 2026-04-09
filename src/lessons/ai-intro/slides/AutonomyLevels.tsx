import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideAutonomyLevels({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')
  return (
    <>
      <span className="slide-number">{num}</span>
      <h2 className="reveal">Четыре уровня автономии ИИ</h2>

      <div className="autonomy-levels reveal">
        <div className="autonomy-level">
          <div className="autonomy-num">01</div>
          <div className="autonomy-content">
            <h3>Полностью ручное</h3>
            <p>Человек делает всё сам. ИИ не участвует.</p>
          </div>
        </div>

        <div className="autonomy-level">
          <div className="autonomy-num">02</div>
          <div className="autonomy-content">
            <h3>ИИ готовит — человек утверждает</h3>
            <p>ИИ предлагает варианты, человек выбирает и одобряет.</p>
          </div>
        </div>

        <div className="autonomy-level">
          <div className="autonomy-num">03</div>
          <div className="autonomy-content">
            <h3>ИИ исполняет — человек проверяет</h3>
            <p>ИИ действует самостоятельно, человек контролирует результат.</p>
          </div>
        </div>

        <div className="autonomy-level accent">
          <div className="autonomy-num">04</div>
          <div className="autonomy-content">
            <h3>Полностью автоматизировано</h3>
            <p>ИИ работает без участия человека. Только мониторинг.</p>
          </div>
        </div>
      </div>
    </>
  )
}