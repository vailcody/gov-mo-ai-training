import './styles/theme.css'
import './styles/slides.css'
import PresentationShell from './components/PresentationShell'

// Import slides
import Slide01Title from './lessons/ai-intro/slides/Slide01Title'
import Slide02Plan from './lessons/ai-intro/slides/Slide02Plan'
import Slide03WhatIsAI from './lessons/ai-intro/slides/Slide03WhatIsAI'
import Slide04History from './lessons/ai-intro/slides/Slide04History'
import Slide05WhyNow from './lessons/ai-intro/slides/Slide05WhyNow'
import Slide06TypesAI from './lessons/ai-intro/slides/Slide06TypesAI'
import Slide07Block2Title from './lessons/ai-intro/slides/Slide07Block2Title'
import Slide08MLExplained from './lessons/ai-intro/slides/Slide08MLExplained'
import Slide09NeuralNetwork from './lessons/ai-intro/slides/Slide09NeuralNetwork'
import Slide10LLMExplained from './lessons/ai-intro/slides/Slide10LLMExplained'
import Slide11UnderTheHood from './lessons/ai-intro/slides/Slide11UnderTheHood'
import Slide12Block3Title from './lessons/ai-intro/slides/Slide12Block3Title'
import Slide13TextGeneration from './lessons/ai-intro/slides/Slide13TextGeneration'
import Slide14Classification from './lessons/ai-intro/slides/Slide14Classification'
import Slide15Automation from './lessons/ai-intro/slides/Slide15Automation'
import Slide16HousingExamples from './lessons/ai-intro/slides/Slide16HousingExamples'
import Slide17Block4Title from './lessons/ai-intro/slides/Slide17Block4Title'
import Slide18Hallucinations from './lessons/ai-intro/slides/Slide18Hallucinations'
import Slide19Privacy from './lessons/ai-intro/slides/Slide19Privacy'
import Slide20CanCannot from './lessons/ai-intro/slides/Slide20CanCannot'
import Slide21BiasFairness from './lessons/ai-intro/slides/Slide21BiasFairness'
import Slide22Block5Title from './lessons/ai-intro/slides/Slide22Block5Title'
import Slide23DemoChatGPT from './lessons/ai-intro/slides/Slide23DemoChatGPT'
import Slide24Case1 from './lessons/ai-intro/slides/Slide24Case1'
import Slide25Case2 from './lessons/ai-intro/slides/Slide25Case2'
import Slide26RussianModels from './lessons/ai-intro/slides/Slide26RussianModels'
import Slide27PromptEngineering from './lessons/ai-intro/slides/Slide27PromptEngineering'
import Slide28PracticalTips from './lessons/ai-intro/slides/Slide28PracticalTips'
import Slide29Checklist from './lessons/ai-intro/slides/Slide29Checklist'
import Slide30Regulation from './lessons/ai-intro/slides/Slide30Regulation'
import Slide31Ethics from './lessons/ai-intro/slides/Slide31Ethics'
import Slide32Implementation from './lessons/ai-intro/slides/Slide32Implementation'
import Slide33KeyTakeaways from './lessons/ai-intro/slides/Slide33KeyTakeaways'
import Slide34QandA from './lessons/ai-intro/slides/Slide34QandA'
import Slide35Closing from './lessons/ai-intro/slides/Slide35Closing'

const slides = [
  Slide01Title,
  Slide02Plan,
  Slide03WhatIsAI,
  Slide04History,
  Slide05WhyNow,
  Slide06TypesAI,
  Slide07Block2Title,
  Slide08MLExplained,
  Slide09NeuralNetwork,
  Slide10LLMExplained,
  Slide11UnderTheHood,
  Slide12Block3Title,
  Slide13TextGeneration,
  Slide14Classification,
  Slide15Automation,
  Slide16HousingExamples,
  Slide17Block4Title,
  Slide18Hallucinations,
  Slide19Privacy,
  Slide20CanCannot,
  Slide21BiasFairness,
  Slide22Block5Title,
  Slide23DemoChatGPT,
  Slide24Case1,
  Slide25Case2,
  Slide26RussianModels,
  Slide27PromptEngineering,
  Slide28PracticalTips,
  Slide29Checklist,
  Slide30Regulation,
  Slide31Ethics,
  Slide32Implementation,
  Slide33KeyTakeaways,
  Slide34QandA,
  Slide35Closing,
]

function App() {
  return <PresentationShell slides={slides} />
}

export default App