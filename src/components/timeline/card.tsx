import React from 'react';
import { TimelineCardProps } from '../../interfaces';

const Card = ({
  id,
  role,
  company,
  timeInRole,
  location,
  responsibilities,
  isEducation,
  skills,
}: TimelineCardProps) => {
  return (
    <div id={`${id}`} className='experience-card'>
      <h5 className='experience-card__title'>{role}</h5>
      <div className='experience-card__company'>{company}</div>
      <div className='experience-card__row'>
        <span className='experience-card__time-in-role'>{timeInRole}</span>
        <span className='experience-card__location'>{location}</span>
      </div>
      <div className='experience-card__divider' />
      <div className='experience-card__responsibilities'>
        {!isEducation ? 'Responsibilities/Tasks' : ''}
      </div>
      <div
        className='experience-card__responsibilities--content'
        dangerouslySetInnerHTML={{ __html: responsibilities }}
      />
      {!isEducation && skills.length ? (
        <>
          <div className='experience-card__divider' />
          <div className='experience-card__responsibilities'>Skills</div>
          <div className='experience-card__responsibilities--skills'>
            <>
              {skills.map((skill) => {
                return (
                  <span
                    key={skill}
                    className={
                      'experience-card__responsibilities--skills__skill'
                    }
                  >
                    {skill}
                  </span>
                );
              })}
            </>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Card;
