import './styles/theme.css'
import './styles/slides.css'
import PresentationShell from './components/PresentationShell'

// Import slides
import Slide01Title from './lessons/ai-intro/slides/Slide01Title'
import Slide02Plan from './lessons/ai-intro/slides/Slide02Plan'
import Slide03WhatIsAI from './lessons/ai-intro/slides/Slide03WhatIsAI'
import Slide04History from './lessons/ai-intro/slides/Slide04History'
import Slide05WhyNow from './lessons/ai-intro/slides/Slide05WhyNow'
import Slide06ExponentialGrowth from './lessons/ai-intro/slides/Slide06ExponentialGrowth'
import Slide07TypesAI from './lessons/ai-intro/slides/Slide07TypesAI'
import Slide08Block2Title from './lessons/ai-intro/slides/Slide08Block2Title'
import Slide09MLExplained from './lessons/ai-intro/slides/Slide09MLExplained'
import Slide10NeuralNetwork from './lessons/ai-intro/slides/Slide10NeuralNetwork'
import Slide11LLMExplained from './lessons/ai-intro/slides/Slide11LLMExplained'
import Slide12UnderTheHood from './lessons/ai-intro/slides/Slide12UnderTheHood'
import Slide13Block3Title from './lessons/ai-intro/slides/Slide13Block3Title'
import Slide14TextGeneration from './lessons/ai-intro/slides/Slide14TextGeneration'
import Slide15Classification from './lessons/ai-intro/slides/Slide15Classification'
import Slide16Automation from './lessons/ai-intro/slides/Slide16Automation'
import Slide17HousingExamples from './lessons/ai-intro/slides/Slide17HousingExamples'
import Slide18Block4Title from './lessons/ai-intro/slides/Slide18Block4Title'
import Slide19Hallucinations from './lessons/ai-intro/slides/Slide19Hallucinations'
import Slide20Privacy from './lessons/ai-intro/slides/Slide20Privacy'
import Slide21CanCannot from './lessons/ai-intro/slides/Slide21CanCannot'
import Slide22BiasFairness from './lessons/ai-intro/slides/Slide22BiasFairness'
import Slide23Block5Title from './lessons/ai-intro/slides/Slide23Block5Title'
import Slide24DemoChatGPT from './lessons/ai-intro/slides/Slide24DemoChatGPT'
import Slide25Case1 from './lessons/ai-intro/slides/Slide25Case1'
import Slide26Case2 from './lessons/ai-intro/slides/Slide26Case2'
import Slide27RussianModels from './lessons/ai-intro/slides/Slide27RussianModels'
import Slide28PromptEngineering from './lessons/ai-intro/slides/Slide28PromptEngineering'
import Slide29PracticalTips from './lessons/ai-intro/slides/Slide29PracticalTips'
import Slide30Checklist from './lessons/ai-intro/slides/Slide30Checklist'
import Slide31Regulation from './lessons/ai-intro/slides/Slide31Regulation'
import Slide32Ethics from './lessons/ai-intro/slides/Slide32Ethics'
import Slide33Implementation from './lessons/ai-intro/slides/Slide33Implementation'
import Slide34KeyTakeaways from './lessons/ai-intro/slides/Slide34KeyTakeaways'
import Slide35QandA from './lessons/ai-intro/slides/Slide35QandA'
import Slide36Closing from './lessons/ai-intro/slides/Slide36Closing'

const slides = [
  Slide01Title,
  Slide02Plan,
  Slide03WhatIsAI,
  Slide04History,
  Slide05WhyNow,
  Slide06ExponentialGrowth,
  Slide07TypesAI,
  Slide08Block2Title,
  Slide09MLExplained,
  Slide10NeuralNetwork,
  Slide11LLMExplained,
  Slide12UnderTheHood,
  Slide13Block3Title,
  Slide14TextGeneration,
  Slide15Classification,
  Slide16Automation,
  Slide17HousingExamples,
  Slide18Block4Title,
  Slide19Hallucinations,
  Slide20Privacy,
  Slide21CanCannot,
  Slide22BiasFairness,
  Slide23Block5Title,
  Slide24DemoChatGPT,
  Slide25Case1,
  Slide26Case2,
  Slide27RussianModels,
  Slide28PromptEngineering,
  Slide29PracticalTips,
  Slide30Checklist,
  Slide31Regulation,
  Slide32Ethics,
  Slide33Implementation,
  Slide34KeyTakeaways,
  Slide35QandA,
  Slide36Closing,
]

function App() {
  return <PresentationShell slides={slides} />
}

export default App