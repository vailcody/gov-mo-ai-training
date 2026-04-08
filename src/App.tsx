import './styles/theme.css'
import './styles/slides.css'
import PresentationShell from './components/PresentationShell'

// Import slides
import Slide01Title from './lessons/ai-intro/slides/Slide01Title'
import Slide02Plan from './lessons/ai-intro/slides/Slide02Plan'
import Slide03WhatIsAI from './lessons/ai-intro/slides/Slide03WhatIsAI'
import Slide04History from './lessons/ai-intro/slides/Slide04History'

const slides = [
  Slide01Title,
  Slide02Plan,
  Slide03WhatIsAI,
  Slide04History,
]

function App() {
  return <PresentationShell slides={slides} />
}

export default App
