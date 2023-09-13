import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { experiences } from '../../../constants'
import Image from 'next/image'
import { useDeviceType } from '../../../hooks'

const ExperienceCard = ({
  date,
  iconBg,
  icon,
  company_name,
  title,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={icon}
            alt={company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{}</h3>
        {title}
        <p className="text-[16px] font-semibold text-secondary">
          {company_name}
        </p>
      </div>
      <ul className="ml-5 mt-5 list-disc space-y-2">
        {points.map((point, i) => (
          <li
            key={`experience-point-${i}`}
            className="pl-1 text-[14px] tracking-wider text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Timeline = () => {
  const { isMobile } = useDeviceType()

  return (
    <VerticalTimeline animate={!isMobile}>
      {experiences.map((experience, i) => (
        <ExperienceCard key={experience.title} index={i} {...experience} />
      ))}
    </VerticalTimeline>
  )
}

export default Timeline
