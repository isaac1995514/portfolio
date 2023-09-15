import { BallCanvas } from '../../canvas'
import { Section } from '../../layout'
import { technologies } from '../../../constants'
import { NeonCard } from '@/app/components'

const Tech = () => {
  return (
    <>
      <Section
        id="tech"
        className="hidden flex-row flex-wrap justify-center gap-10 sm:flex"
      >
        {technologies.map(({ name, imgUrl }) => (
          <div className="h-28 w-28" key={name}>
            <BallCanvas imgUrl={imgUrl} />
          </div>
        ))}
      </Section>
      <Section
        id="tech"
        className="flex flex-row flex-wrap justify-center gap-10 sm:hidden"
      >
        {technologies.map(({ name }) => (
          <NeonCard key={name} name={name} />
        ))}
      </Section>
    </>
  )
}

export default Tech
