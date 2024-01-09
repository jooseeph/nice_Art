/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from 'react';
import { PartnersCard } from './partners';
import { usePartnersStyle } from './partners.style';
import { generateGuid } from 'core/helpers/generate-guid';
import { ArrowRight } from 'assets/images/icons/arrows';
import colors from 'assets/styles/abstracts/color';
import PartnersCardComponent from './components/partnersCard.component';
import { usePartners } from './actions/partners.query';
import useLocalization from 'assets/lang';

export const PartnersComponent = () => {
  const translate = useLocalization();

  const { data } = usePartners();
  console.log('PartnersComponent ~ data', data);

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
  const classes = usePartnersStyle();

  const handleCardClick = useCallback((card: PartnersCard) => {
    setSelectedCard(card);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCard(null);
  }, []);

  
  return (
    <div className='container'>
      <div className={`${classes.title} row justify-between`}>
        <div className={`${classes.left} col-md-5`}>
          <h1>{translate('partnersTitle')}</h1>
        </div>
        <div className={`${classes.right} col-md-7  `}>
          <h1 className={classes.rightTitle}>
            {translate('partnersTitleSecond')}
          </h1>
          <p className={classes.rightText}>{translate('partnersText')}</p>
          <button className={classes.mainBtn}>
            {translate('partnersButton')} <ArrowRight />{' '}
          </button>
        </div>
      </div>
      <div className='row mb-150 '>
        {data &&
          data.map((card: PartnersCard) => (
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
            className={`${classes.modalContent} row align-center`}
            onClick={e => e.stopPropagation()}
          >
            <div className='col-12'>
              <div className='row'>
                <div>
                  <img
                    style={{ width: 60, height: 60 }}
                    src={selectedCard.file?.url}
                    alt={data.name}
                  />
                </div>
                <div className='ml-20 mt-10 mb-20'>
                  <h2>{selectedCard.name}</h2>
                  <h3>{selectedCard.tag}</h3>
                </div>
              </div>
            </div>
            <p style={{ padding: 4 }}>{selectedCard.description}</p>
            <div className='col-12 p-0 '>
              <div className='row justify-start'>
                <div className='col-6'>
                  <button
                    className={`btn btn-block w-100 ${classes.mainBtn}`}
                    
                  >
                    Visit Website
                  </button>
                </div>

                <div className='col-6'>
                  <button
                    style={{
                      backgroundColor: colors.light,
                      color: colors.titleGreen,
                      border: '1px solid green',
                    }}
                    onClick={handleCloseModal}
                    className={`btn btn-block w-100 ${classes.mainBtn}`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnersComponent;
