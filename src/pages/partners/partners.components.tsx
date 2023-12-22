/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { PartnersCard } from './partners';
import { partnersStyle, partnersStyleCard } from './partners.style';
import { generateGuid } from 'core/helpers/generate-guid';
import { ArrowRight } from 'assets/images/icons/arrows';

const PartnersCardComponent = ({
  imageSrc,
  title,
  description,
  text,
  onClick,
}: PartnersCard & { onClick: () => void }) => {
  const classes = partnersStyleCard();
  return (
    <div className={`col-lg-3 col-sm-6 ${classes.card}`} onClick={onClick}>
      <div className={classes.imageAndTitle}>
        <img src={imageSrc} alt={title}  />
        <h2 className={classes.title}>{title}</h2>
      </div>
      <p className={classes.description}>{description}</p>
    </div>
  );
};
export const PartnersComponent = () => {
  const cardsData = [
    {
      imageSrc: '/src/assets/images/statics/amazon.svg',
      title: 'Amazon',
      description: 'E-commerce',
      text: 'Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ',
    },
    {
      imageSrc: '/src/assets/images/statics/cola.svg',
      title: 'Coca-Cola',
      description: 'E-commerce',
      text: 'Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ',
    },
    {
      imageSrc: '/src/assets/images/statics/google.svg',
      title: 'Google',
      description: 'E-commerce',
      text: 'Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ',
    },
    {
      imageSrc: '/src/assets/images/statics/samsung.svg',
      title: 'Samsung',
      description: 'E-commerce',
      text: 'Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ',
    },
    {
      imageSrc: '/src/assets/images/statics/apple.svg',
      title: 'Apple',
      description: 'E-commerce',
      text: 'Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ',
    },
    {
      imageSrc: '/src/assets/images/statics/toyota.svg',
      title: 'Toyota',
      description: 'E-commerce',
      text: 'Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ',
    },
  ];
  const [selectedCard, setSelectedCard] = useState<PartnersCard | null>(null);
  const classes = partnersStyle();

  const handleCardClick = (card: PartnersCard) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };
  return (
    <div className={classes.container}>
      <div className={`${classes.title} row justify-between`}>
        <div className={`${classes.left} col-md-5`}>
          <h1>Title for Partners or Lorem Ipsum motto</h1>
        </div>
        <div className={`${classes.right} col-md-7`}>
          <h1 className={classes.rightTitle}>Lectus mauris pulvinar</h1>
          <p className={classes.rightText}>
            Commodo interdum at lorem eget amet placerat nunc posuere. Viverra
            lacus, nisl cursus senectus malesuada leo donec pellentesque. Id
            faucibus nulla adipiscing pellentesque vulputate quis pulvinar.
            Sapien est vestibulum in porttitor volutpat.
          </p>
          <button className={classes.mainBtn}>
            Became a partner <ArrowRight />{' '}
          </button>
        </div>
      </div>
      <div className='row'>
        {cardsData.map(card => (
          <PartnersCardComponent
            key={generateGuid()}
            {...card}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
      {selectedCard && (
        <div className={classes.modalOverlay} onClick={handleCloseModal}>
          <div
            className={`${classes.modalContent} row  align-center`}
            onClick={e => e.stopPropagation()}
          >
            <div className="row">
            <div className='col-2'>
              <img src={selectedCard.imageSrc} alt={selectedCard.title} />
            </div>
            <div className='col-10'>
              <h2>{selectedCard.title}</h2>
              <h2>{selectedCard.description}</h2>
            </div>
            </div>
            <p>{selectedCard.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnersComponent;
