import type { SlideProps } from '../../../components/PresentationShell'

export default function SlideSSHKeys({ slideIndex }: SlideProps) {
  const num = String(slideIndex + 1).padStart(2, '0')
  return (
    <>
      <span className="slide-number">{num}</span>
      <h2 className="reveal">SSH-ключи</h2>

      <div className="steps reveal">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Генерация</div>
            <div className="step-desc">ssh-keygen создаёт пару: приватный ключ (id_rsa) и публичный (id_rsa.pub)</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Настройка</div>
            <div className="step-desc">Публичный ключ копируется на сервер в ~/.ssh/authorized_keys</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Сохранение</div>
            <div className="step-desc">Приватный ключ хранится только на компьютере. Никогда не передавать и не публиковать</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div>
            <div className="step-text">Проверка</div>
            <div className="step-desc">ssh user@server — подключение без пароля, по ключу. Парольный вход отключается</div>
          </div>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p>Потеряли приватный ключ — потеряли доступ. Храните копию в надёжном месте.</p>
      </div>
    </>
  )
}