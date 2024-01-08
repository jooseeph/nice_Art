import image from '../../assets/images/statics/aboutpageimage.png';
import { useAboutStyles } from './about.style';
import { Home } from 'assets/images/icons/home';
import { ArrowRight } from 'assets/images/icons/arrows';
import { FingerPrint } from 'assets/images/icons/fingerPrint';
import useLocalization from 'assets/lang';
const AboutComponent = () => {
  const {
    headerTitle,
    headerTopText,
    headerMidText,
    headerBtmText,
    aboutImage,
    navIcon,
    navText,
    purposeRight,
    purposeLeft,
    topPurposeRight,
    midPurposeRight,
    btmPurposeRight,
    rightTopText,
    rightTexts,
    strategiesTitle,
    strategiesParagraph,
    strategiesBtm,
    purpose,
    fingerprint,
  } = useAboutStyles();
  const translate = useLocalization();

  return (
    <div className='container'>
      <div className='row '>
        <div className={`${navIcon}`}>
          <span>
            <Home />
          </span>
          <span>
            <ArrowRight />
          </span>
          <span className={`${navText}`}>About us</span>
        </div>
      </div>
      <div className='row'>
        <div className={`left col-lg-5  col-sm-12`}>
          <h1 className={`${headerTitle} mt-20`}>
            Title for about us or Lorem Ipsum motto
          </h1>
        </div>
        <div className='col-lg-1'></div>
        <div className={`right col-lg-6  col-sm-12 `}>
          <p className={`${headerTopText} `}> {translate('who_are_us')}</p>
          <p className={`${headerMidText} my-10 `}>
            Lectus mauris pulvinar sit ?
          </p>
          <p className={`${headerBtmText}`}>
            Vehicula elit est, neque non mattis pharetra, urna lectus magnis.
            Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas
            est aliquet facilisis elit sit. Massa libero turpis facilisi mattis
            sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam
            euismod cum cursus. Enim nunc quis commodo leo libero diam.{' '}
          </p>
        </div>
      </div>
      <section className='row'>
        <div className='col-sm-1'></div>
        <img className={`${aboutImage} col-sm-10`} src={image} alt='My Image' />
        <div className='col-sm-1'></div>
      </section>
      <section className='row purposes'>
        <div className={`${purpose}`}>
          <div className={`${purposeLeft}`}>
            <p className={`${headerTopText} `}> {translate('our_purpose')}</p>
            <p className={`${headerMidText} my-10 `}>
              Id duis id turpis mi quisque. Nulla.
            </p>
            <p className={`${headerBtmText} pr-5 `}>
              Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea
              turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu,
              augue. Egestas et amet neque placerat aliquam tempo
            </p>
          </div>
          <div className={`${purposeRight}`}>
            <div className={`${topPurposeRight}`}>
              <div className={`${fingerprint}`}>
                <FingerPrint />
              </div>
              <div className={`${rightTexts}`}>
                <p className={`${rightTopText} `}>
                  Adipiscing phasellus orci in dictumst faucibus ullamcorper
                  odio faucibus. Nunc.
                </p>
                <p className={`${headerBtmText} `}>
                  Malesuada tortor fringilla ut faucibus. Urna tellus lectus
                  platea turpis non. Tellus odio eu ante{' '}
                </p>
              </div>
            </div>
            <div className={`${midPurposeRight} `}>
              <div className={`${fingerprint}`}>
                <FingerPrint />
              </div>{' '}
              <div className={`${rightTexts}`}>
                <p className={`${rightTopText} `}>
                  Adipiscing phasellus orci in dictumst faucibus ullamcorper
                  odio faucibus. Nunc.
                </p>
                <p className={`${headerBtmText} `}>
                  Malesuada tortor fringilla ut faucibus. Urna tellus lectus
                  platea turpis non. Tellus odio eu ante{' '}
                </p>
              </div>
            </div>
            <div className={`${btmPurposeRight} `}>
              <div className={`${fingerprint}`}>
                <FingerPrint />
              </div>{' '}
              <div className={`${rightTexts}`}>
                <p className={`${rightTopText} `}>
                  Adipiscing phasellus orci in dictumst faucibus ullamcorper
                  odio faucibus. Nunc.
                </p>
                <p className={`${headerBtmText} `}>
                  Malesuada tortor fringilla ut faucibus. Urna tellus lectus
                  platea turpis non. Tellus odio eu ante{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='row strategies mb-100'>
        <div className='row col-sm-12'>
          <div className='col-lg-5 col-sm-12'>
            <p className={`${headerTopText} mt-60 `}>
              {' '}
              {translate('our_strategy')}
            </p>
            <p className={`${headerMidText} my-10 `}>
              Id duis id turpis mi quisque. Nulla.
            </p>
          </div>
          <div className='col-7 col-sm-12'> </div>
          <div className='col-lg-4'></div>
          <div className='col-lg-8 col-sm-12'>
            <div className={`${strategiesBtm} `}>
              <div className=''>
                <div className={`${fingerprint}`}>
                  <FingerPrint />
                </div>
                <div className='my-40'>
                  <p className={`${strategiesTitle} my-16 `}>Title</p>
                  <p className={`${strategiesParagraph} pr-10`}>
                    Pulvinar amet ullamcorper nec nullam accumsan, iaculis
                    risus. Feugiat nulla in imperdiet tellus sit lobortis.
                    Cursus adipiscing aliquam dignissim.
                  </p>
                </div>
              </div>
              <div className=''>
                <div className={`${fingerprint}`}>
                  <FingerPrint />
                </div>
                <div className='my-40'>
                  <p className={`${strategiesTitle} my-16 `}>Title</p>
                  <p className={`${strategiesParagraph} pr-10`}>
                    Pulvinar amet ullamcorper nec nullam accumsan, iaculis
                    risus. Feugiat nulla in imperdiet tellus sit lobortis.
                    Cursus adipiscing aliquam dignissim.
                  </p>
                </div>
              </div>
            </div>{' '}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutComponent;
