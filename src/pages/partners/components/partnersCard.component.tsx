/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { PartnersCard } from '../partners';
import { usePartnersStyleCard } from './partnersCard.style';

const PartnersCardComponent = ({
  imageSrc,
  title,
  description,
  text,
  onClick,
}: PartnersCard & { onClick: () => void }) => {
  const classes = usePartnersStyleCard();
  return (
    <div className='col-3 p-16  '>
      <div className={` ${classes.card} `} onClick={onClick}>
        <div className={` ${classes.imageAndTitle}`}>
          <img src={imageSrc} alt={title} />
          <h2 className={classes.title}>{title}</h2>
        </div>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default PartnersCardComponent;
