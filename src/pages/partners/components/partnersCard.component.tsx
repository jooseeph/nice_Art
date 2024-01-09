/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { PartnersCard } from '../partners';
import { usePartnersStyleCard } from './partnersCard.style';

const PartnersCardComponent = ({
  imageSrc,
  title,
  description,
  text,
  name,
  file,
  tag,
  onClick,
}: PartnersCard & { onClick: () => void }) => {
  const classes = usePartnersStyleCard();
  return (
    <div className='col-lg-3 col-6  '>
      <div className={` ${classes.card} `} onClick={onClick}>
        <div className={` ${classes.imageAndTitle}`}>
          <img src={file.url} alt={name} />
          <h2 className={classes.title}>{name}</h2>
        </div>
        <p className={classes.description}>{tag}</p>
      </div>
    </div>
  );
};

export default PartnersCardComponent;
