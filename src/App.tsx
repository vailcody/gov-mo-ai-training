import './styles/theme.css'
import './styles/slides.css'
import PresentationShell from './components/PresentationShell'

// Import slides — order defines slide numbers (auto-computed via slideIndex)
import Title from './lessons/ai-intro/slides/Title'
import AboutAuthor from './lessons/ai-intro/slides/AboutAuthor'
import Plan from './lessons/ai-intro/slides/Plan'
import WhatIsAI from './lessons/ai-intro/slides/WhatIsAI'
import History from './lessons/ai-intro/slides/History'
import WhyNow from './lessons/ai-intro/slides/WhyNow'
import ExponentialGrowth from './lessons/ai-intro/slides/ExponentialGrowth'
import ComputeCost from './lessons/ai-intro/slides/ComputeCost'
import AutonomyLevels from './lessons/ai-intro/slides/AutonomyLevels'
import Block2Title from './lessons/ai-intro/slides/Block2Title'
import LLMExplained from './lessons/ai-intro/slides/LLMExplained'
import WhatIsLLMSimple from './lessons/ai-intro/slides/WhatIsLLMSimple'
import WhatIsContext from './lessons/ai-intro/slides/WhatIsContext'
import WhatIsMarkdown from './lessons/ai-intro/slides/WhatIsMarkdown'
import NextTokenExample from './lessons/ai-intro/slides/NextTokenExample'
import WhatIsPrompt from './lessons/ai-intro/slides/WhatIsPrompt'
import GoodPrompt from './lessons/ai-intro/slides/GoodPrompt'
import OneShotFewShot from './lessons/ai-intro/slides/OneShotFewShot'
import ContextMemory from './lessons/ai-intro/slides/ContextMemory'
import RulesFileSlide from './lessons/ai-intro/slides/RulesFileSlide'
import ExamplesFileSlide from './lessons/ai-intro/slides/ExamplesFileSlide'
import LawsFileSlide from './lessons/ai-intro/slides/LawsFileSlide'
import AttachEveryChatSlide from './lessons/ai-intro/slides/AttachEveryChatSlide'
import AssistantVsAgent from './lessons/ai-intro/slides/AssistantVsAgent'
import KodikWhat from './lessons/ai-intro/slides/KodikWhat'
import KodikWhyRussia from './lessons/ai-intro/slides/KodikWhyRussia'
import KodikCTA from './lessons/ai-intro/slides/KodikCTA'
import Block3Title from './lessons/ai-intro/slides/Block3Title'
import TextGeneration from './lessons/ai-intro/slides/TextGeneration'
import Classification from './lessons/ai-intro/slides/Classification'
import Automation from './lessons/ai-intro/slides/Automation'
import HousingExamples from './lessons/ai-intro/slides/HousingExamples'
import Block4Title from './lessons/ai-intro/slides/Block4Title'
import Hallucinations from './lessons/ai-intro/slides/Hallucinations'
import Privacy from './lessons/ai-intro/slides/Privacy'
import CanCannot from './lessons/ai-intro/slides/CanCannot'
import Block5Title from './lessons/ai-intro/slides/Block5Title'
import Case1 from './lessons/ai-intro/slides/Case1'
import Case2 from './lessons/ai-intro/slides/Case2'
import QandA from './lessons/ai-intro/slides/QandA'

const slides = [
  Title,
  AboutAuthor,
  Plan,
  WhatIsAI,
  History,
  WhyNow,
  ExponentialGrowth,
  ComputeCost,
  AutonomyLevels,
  Block2Title,
  LLMExplained,
  WhatIsLLMSimple,
  WhatIsContext,
  WhatIsMarkdown,
  NextTokenExample,
  WhatIsPrompt,
  GoodPrompt,
  OneShotFewShot,
  Hallucinations,
  ContextMemory,
  RulesFileSlide,
  ExamplesFileSlide,
  LawsFileSlide,
  AttachEveryChatSlide,
  AssistantVsAgent,
  KodikWhat,
  KodikWhyRussia,
  KodikCTA,
  Block3Title,
  TextGeneration,
  Classification,
  Automation,
  HousingExamples,
  Block4Title,
  Privacy,
  CanCannot,
  Block5Title,
  Case1,
  Case2,
  QandA,
]

function App() {
  return <PresentationShell slides={slides} />
}

export default App