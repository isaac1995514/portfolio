'use client'

import { Tilt } from 'react-tilt'

import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoPython,
} from 'react-icons/bi'
import { TbBrandThreejs } from 'react-icons/tb'

const TechIconMap = {
  'HTML 5': AiFillHtml5,
  'CSS 3': BiLogoCss3,
  JavaScript: BiLogoJavascript,
  TypeScript: BiLogoTypescript,
  'React JS': BiLogoReact,
  'Redux Toolkit': BiLogoRedux,
  'Tailwind CSS': BiLogoTailwindCss,
  'Node JS': BiLogoNodejs,
  'Three JS': TbBrandThreejs,
  git: AiFillGithub,
  python: BiLogoPython,
}

const NeonCard = ({ name, color }) => {
  const IconComponent = TechIconMap[name]

  return (
    <Tilt className="shadow-neon-white border-neon-white animate-card-shadow grid h-36 w-28 place-content-center rounded-lg border-2 bg-purple-600/10 shadow-lg">
      <div className="flex h-28 w-28 flex-col justify-center gap-2 align-baseline text-6xl">
        <IconComponent className=" flex h-28 w-28" />
        <p className="text-neon-white text-center text-sm">{name}</p>
      </div>
    </Tilt>
  )
}

export default NeonCard
