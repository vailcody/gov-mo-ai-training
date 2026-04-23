import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideKodikWhyRussia({ slideIndex }: SlideProps) {
  return (
    <>
      <span className="slide-number">{String(slideIndex + 1).padStart(2, '0')}</span>
      <h2 className="reveal">Почему Kodik уместен в российском контексте</h2>

      <div className="card-grid reveal">
        <div className="card highlighted">
          <h3>Для пользователя в РФ</h3>
          <ul>
            <li>Доступен без VPN</li>
            <li>Можно оплачивать российской картой</li>
            <li>Есть доступ к зарубежным моделям</li>
          </ul>
        </div>

        <div className="card">
          <h3>Для работы с данными</h3>
          <ul>
            <li>Есть встроенный анонимайзер</li>
            <li>Персональные данные можно убирать перед отправкой в облако</li>
            <li>Это особенно важно для обращений граждан и служебных текстов</li>
          </ul>
        </div>
      </div>
    </>
  )
}
