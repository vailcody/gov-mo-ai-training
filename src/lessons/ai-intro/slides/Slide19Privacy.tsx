import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide19Privacy({}: SlideProps) {
  return (
    <>
      <span className="slide-number">19</span>
      <h2 className="reveal">Конфиденциальность данных</h2>

      <div className="highlight-box reveal">
        <p><strong>Всё, что вы отправляете в ИИ, может быть использовано для обучения или хранения.</strong> Для государственных органов это критический риск.</p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Риски</h3>
          <ul>
            <li>Персональные данные граждан в запросах</li>
            <li>Служебная информация в облачных сервисах</li>
            <li>Данные могут храниться на серверах за рубежом</li>
            <li>Невозможно полностью удалить отправленные данные</li>
          </ul>
        </div>

        <div className="card highlighted">
          <h3>Правила безопасности</h3>
          <ul>
            <li>Не вводите персональные данные в публичные сервисы</li>
            <li>Используйте корпоративные решения с локальным размещением</li>
            <li>Обезличивайте данные перед обработкой</li>
            <li>Следуйте регламенту 152-ФЗ «О персональных данных»</li>
          </ul>
        </div>
      </div>
    </>
  )
}