import { StickyHeader } from './components/StickyHeader'
import { HeroSection } from './components/HeroSection'
import { WhySection } from './components/WhySection'
import { PlatformSteps } from './components/PlatformSteps'
import { SkillSpotlight } from './components/SkillSpotlight'
import { ProSection } from './components/ProSection'
import { TrustBand } from './components/TrustBand'
import { SkillRoadmap } from './components/SkillRoadmap'
import { FaqAccordion } from './components/FaqAccordion'
import { FinalCtaBand } from './components/FinalCtaBand'
import { SiteFooter } from './components/SiteFooter'

export default function App() {
  return (
    <>
      <StickyHeader />
      <main>
        <HeroSection />
        <WhySection />
        <PlatformSteps />
        <SkillSpotlight />
        <ProSection />
        <TrustBand />
        <SkillRoadmap />
        <FaqAccordion />
        <FinalCtaBand />
      </main>
      <SiteFooter />
    </>
  )
}
