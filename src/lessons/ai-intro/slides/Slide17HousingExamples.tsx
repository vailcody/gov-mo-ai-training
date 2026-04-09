import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide16HousingExamples({}: SlideProps) {
  return (
    <>
      <span className="slide-number">17</span>
      <h2 className="reveal">Примеры для ЖКХ</h2>

      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Сортировка обращений</div>
            <div className="step-desc">ИИ определяет: отопление, водоснабжение, лифт, уборка — и направляет в нужный отдел</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Подготовка ответов</div>
            <div className="step-desc">Черновик ответа на обращение на основе нормативной базы и шаблонов</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Мониторинг повторных жалоб</div>
            <div className="step-desc">Автоматическое выявление системных проблем по одному адресу</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Анализ фото и видео</div>
            <div className="step-desc">Распознавание типа проблемы по фотографии от жильца</div>
          </div>
        </div>
      </div>
    </>
  )
}