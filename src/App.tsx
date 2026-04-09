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
import Slide07ComputeCost from './lessons/ai-intro/slides/Slide07ComputeCost'
import Slide08TypesAI from './lessons/ai-intro/slides/Slide08TypesAI'
import Slide09Block2Title from './lessons/ai-intro/slides/Slide09Block2Title'
import Slide10MLExplained from './lessons/ai-intro/slides/Slide10MLExplained'
import Slide11NeuralNetwork from './lessons/ai-intro/slides/Slide11NeuralNetwork'
import Slide12LLMExplained from './lessons/ai-intro/slides/Slide12LLMExplained'
import Slide13UnderTheHood from './lessons/ai-intro/slides/Slide13UnderTheHood'
import Slide14Block3Title from './lessons/ai-intro/slides/Slide14Block3Title'
import Slide15TextGeneration from './lessons/ai-intro/slides/Slide15TextGeneration'
import Slide16Classification from './lessons/ai-intro/slides/Slide16Classification'
import Slide17Automation from './lessons/ai-intro/slides/Slide17Automation'
import Slide18HousingExamples from './lessons/ai-intro/slides/Slide18HousingExamples'
import Slide19Block4Title from './lessons/ai-intro/slides/Slide19Block4Title'
import Slide20Hallucinations from './lessons/ai-intro/slides/Slide20Hallucinations'
import Slide21Privacy from './lessons/ai-intro/slides/Slide21Privacy'
import Slide22CanCannot from './lessons/ai-intro/slides/Slide22CanCannot'
import Slide23BiasFairness from './lessons/ai-intro/slides/Slide23BiasFairness'
import Slide24Block5Title from './lessons/ai-intro/slides/Slide24Block5Title'
import Slide25DemoChatGPT from './lessons/ai-intro/slides/Slide25DemoChatGPT'
import Slide26Case1 from './lessons/ai-intro/slides/Slide26Case1'
import Slide27Case2 from './lessons/ai-intro/slides/Slide27Case2'
import Slide28RussianModels from './lessons/ai-intro/slides/Slide28RussianModels'
import Slide29PromptEngineering from './lessons/ai-intro/slides/Slide29PromptEngineering'
import Slide30PracticalTips from './lessons/ai-intro/slides/Slide30PracticalTips'
import Slide31Checklist from './lessons/ai-intro/slides/Slide31Checklist'
import Slide32Regulation from './lessons/ai-intro/slides/Slide32Regulation'
import Slide33Ethics from './lessons/ai-intro/slides/Slide33Ethics'
import Slide34Implementation from './lessons/ai-intro/slides/Slide34Implementation'
import Slide35KeyTakeaways from './lessons/ai-intro/slides/Slide35KeyTakeaways'
import Slide36QandA from './lessons/ai-intro/slides/Slide36QandA'
import Slide37Closing from './lessons/ai-intro/slides/Slide37Closing'

const slides = [
  Slide01Title,
  Slide02Plan,
  Slide03WhatIsAI,
  Slide04History,
  Slide05WhyNow,
  Slide06ExponentialGrowth,
  Slide07ComputeCost,
  Slide08TypesAI,
  Slide09Block2Title,
  Slide10MLExplained,
  Slide11NeuralNetwork,
  Slide12LLMExplained,
  Slide13UnderTheHood,
  Slide14Block3Title,
  Slide15TextGeneration,
  Slide16Classification,
  Slide17Automation,
  Slide18HousingExamples,
  Slide19Block4Title,
  Slide20Hallucinations,
  Slide21Privacy,
  Slide22CanCannot,
  Slide23BiasFairness,
  Slide24Block5Title,
  Slide25DemoChatGPT,
  Slide26Case1,
  Slide27Case2,
  Slide28RussianModels,
  Slide29PromptEngineering,
  Slide30PracticalTips,
  Slide31Checklist,
  Slide32Regulation,
  Slide33Ethics,
  Slide34Implementation,
  Slide35KeyTakeaways,
  Slide36QandA,
  Slide37Closing,
]

function App() {
  return <PresentationShell slides={slides} />
}

export default App