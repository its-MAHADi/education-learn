import React from 'react'
import HeroSection from '../../components/ui/Home/HeroSection'
import Marque from '../../components/ui/Home/Marque'
import Process from '../../components/ui/Home/Process'
import TuitionProgram from '../../components/ui/Home/TuitionProgram'
import ForParents from '../../components/ui/Home/ForParents'
import ForSchool from '../../components/ui/Home/ForSchool'
import LearningRe from '../../components/ui/Home/LearningRe'
import TestamonialSlider from '../../components/ui/Home/TestamonialSlider'
import TuitionFrom from '../../components/ui/Home/TuitionFrom'

function Home() {
  return (
    <div>
     <HeroSection/>
     <Marque />
     <Process />
     <TuitionProgram/>
     <ForParents/>
     <ForSchool/>
     <LearningRe/>
     <TestamonialSlider/>
     <TuitionFrom/>
    </div>
  )
}

export default Home
