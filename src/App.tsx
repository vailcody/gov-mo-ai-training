import './styles/theme.css'
import './styles/slides.css'
import PresentationShell from './components/PresentationShell'

// Import slides — order defines slide numbers (auto-computed via slideIndex)
import Title from './lessons/ai-intro/slides/Title'
import Plan from './lessons/ai-intro/slides/Plan'
import WhatIsAI from './lessons/ai-intro/slides/WhatIsAI'
import History from './lessons/ai-intro/slides/History'
import WhyNow from './lessons/ai-intro/slides/WhyNow'
import ExponentialGrowth from './lessons/ai-intro/slides/ExponentialGrowth'
import ComputeCost from './lessons/ai-intro/slides/ComputeCost'
import AutonomyLevels from './lessons/ai-intro/slides/AutonomyLevels'
import Block2Title from './lessons/ai-intro/slides/Block2Title'
import NeuralNetwork from './lessons/ai-intro/slides/NeuralNetwork'
import LLMExplained from './lessons/ai-intro/slides/LLMExplained'
import WhatIsPrompt from './lessons/ai-intro/slides/WhatIsPrompt'
import GoodPrompt from './lessons/ai-intro/slides/GoodPrompt'
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
import DemoChatGPT from './lessons/ai-intro/slides/DemoChatGPT'
import Case1 from './lessons/ai-intro/slides/Case1'
import Case2 from './lessons/ai-intro/slides/Case2'
import RussianModels from './lessons/ai-intro/slides/RussianModels'
import PromptEngineering from './lessons/ai-intro/slides/PromptEngineering'
import PracticalTips from './lessons/ai-intro/slides/PracticalTips'
import Checklist from './lessons/ai-intro/slides/Checklist'
import Regulation from './lessons/ai-intro/slides/Regulation'
import Ethics from './lessons/ai-intro/slides/Ethics'
import Implementation from './lessons/ai-intro/slides/Implementation'
import KeyTakeaways from './lessons/ai-intro/slides/KeyTakeaways'
import QandA from './lessons/ai-intro/slides/QandA'
import Closing from './lessons/ai-intro/slides/Closing'

const slides = [
  Title,
  Plan,
  WhatIsAI,
  History,
  WhyNow,
  ExponentialGrowth,
  ComputeCost,
  AutonomyLevels,
  Block2Title,
  NeuralNetwork,
  LLMExplained,
  WhatIsPrompt,
  GoodPrompt,
  Block3Title,
  TextGeneration,
  Classification,
  Automation,
  HousingExamples,
  Block4Title,
  Hallucinations,
  Privacy,
  CanCannot,
  Block5Title,
  DemoChatGPT,
  Case1,
  Case2,
  RussianModels,
  PromptEngineering,
  PracticalTips,
  Checklist,
  Regulation,
  Ethics,
  Implementation,
  KeyTakeaways,
  QandA,
  Closing,
]

function App() {
  return <PresentationShell slides={slides} />
}

export default App