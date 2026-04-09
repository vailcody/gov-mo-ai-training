import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide21BiasFairness({}: SlideProps) {
  return (
    <>
      <span className="slide-number">23</span>
      <h2 className="reveal">Предвзятость и справедливость</h2>

      <div className="highlight-box reveal">
        <p><strong>ИИ учится на данных, созданных людьми.</strong> Если в данных есть предвзятость — модель её унаследует и усилит.</p>
      </div>

      <div className="steps">
        <div className="step">
          <div className="step-number">01</div>
          <div>
            <div className="step-text">Данные содержат偏见</div>
            <div className="step-desc">Исторические данные отражают существующие стереотипы и неравенство</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div>
            <div className="step-text">Модель усиливает</div>
            <div className="step-desc">ИИ находит закономерности в данных, включая те, что ведут к дискриминации</div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div>
            <div className="step-text">Результат — несправедливость</div>
            <div className="step-desc">Автоматизированные решения могут быть предвзятыми по району, доходу, национальности</div>
          </div>
        </div>
      </div>

      <div className="highlight-box reveal" style={{ marginTop: '1.5rem' }}>
        <p><strong>Правило:</strong> любое автоматизированное решение в сфере ЖКХ должно проходить проверку на справедливость и не заменять решение человека.</p>
      </div>
    </>
  )
}