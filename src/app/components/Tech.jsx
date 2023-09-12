import { BallCanvas } from "./canvas"
import { Section } from './layout'
import { technologies } from "../constants"

const Tech = () => {
  console.log(BallCanvas)
  return (
    <Section id='tech' className='flex flex-row flex-wrap justify-center gap-10'>
      {
        technologies.map(({name, imgUrl}) => (
          <div className="w-28 h-28" key={name}>
            <BallCanvas imgUrl={imgUrl} />
          </div> 
        ))
      }
    </Section>
  )
}

export default Tech