import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideServerSetup({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')
  return (
    <>
      <span className="slide-number">{num}</span>
      <h2 className="reveal">Покупка сервера и домен</h2>

      <div className="steps reveal">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Выбор провайдера</div>
            <div className="step-desc">VPS-сервер: Hetzner, Timeweb, Selectel, Reg.ru. Достаточно 2–4 ГБ RAM для начала</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Операционная система</div>
            <div className="step-desc">Ubuntu Server 22.04/24.04 LTS — стандарт для веб-приложений и Докер</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Домен</div>
            <div className="step-desc">Покупка домена и привязка DNS-записей к IP-адресу сервера</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Первое подключение</div>
            <div className="step-desc">SSH-доступ по ключу, обновление системы, базовая настройка</div>
          </div>
        </div>
      </div>
    </>
  )
}