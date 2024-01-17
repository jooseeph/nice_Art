import { useFooterStyles } from './footer.style';
import useLocalization from 'assets/lang';
import { NavLink } from 'react-router-dom';
import { Routes } from 'router/routes';
import niceartLogo from 'assets/images/statics/niceart.svg';
import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const FooterComponent = () => {
  const classes = useFooterStyles();
  const date = new Date().getFullYear();
  const translate = useLocalization();

  return (
    <div className={classes.footer}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 py-5'>
            <div className='row justify-between'>
              <div className='col-lg-3 col-md-4'>
                <div className={classes.logoImg}>
                  <NavLink to={Routes.home}>
                    <img src={niceartLogo} alt='logo' />
                  </NavLink>
                </div>
                <p className={classes.footerTxt}>
                  {translate('companyInformation')}
                </p>
                <ul className={classes.footerSocial}>
                  <li className='ftco-animate'>
                    <NavLink
                      to='#'
                      data-toggle='tooltip'
                      data-placement='top'
                      title='Twitter'
                    >
                      <FaFacebookF />
                    </NavLink>
                  </li>
                  <li className='ftco-animate'>
                    <NavLink
                      to='#'
                      data-toggle='tooltip'
                      data-placement='top'
                      title='Facebook'
                    >
                      <FaTwitter />
                    </NavLink>
                  </li>
                  <li className='ftco-animate'>
                    <NavLink
                      to='#'
                      data-toggle='tooltip'
                      data-placement='top'
                      title='Instagram'
                    >
                      <PiInstagramLogoFill />
                    </NavLink>
                  </li>
                  <li className='ftco-animate'>
                    <NavLink
                      to='#'
                      data-toggle='tooltip'
                      data-placement='top'
                      title='Instagram'
                    >
                      <FaLinkedinIn />
                    </NavLink>
                  </li>
                  <li className='ftco-animate'>
                    <NavLink
                      to='#'
                      data-toggle='tooltip'
                      data-placement='top'
                      title='Instagram'
                    >
                      <FaYoutube />
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className='col-lg-6 col-md-7 justify-end'>
                <div className='row justify-end'>
                  <div className='col-md-12 justify-end'>
                    <div className='row justify-end'>
                      <div className='col-4 col-lg-6 justify-end'>
                        <h2 className={classes.footHeading}>Site</h2>
                        <ul className='list-unstyled'>
                          <li>
                            <NavLink
                              to='#'
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              {translate('home_title')}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to='#'
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              {translate('about_title')}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to='#'
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              {translate('product_title')}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to='#'
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              {translate('partners_title')}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to='#'
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              {translate('contact_title')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className='col-8 col-lg-6 justify-end'>
                        <h2 className={classes.footHeading}>Contacts US</h2>
                        <ul className='list-unstyled'>
                          <li>
                            <NavLink
                              to='#'
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              <MdOutlineEmail />
                              <span className='pl-6'>contact@company.com</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to='#'
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              <MdOutlineLocalPhone />
                              <span className='pl-6'>(414) 687 - 5892</span>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to='#'
                              className={`${classes.footMenuItem} d-flex align-center`}
                            >
                              <CiLocationOn />
                              <span className='pl-6'>
                                {' '}
                                {translate('location')}
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className={`${classes.marginToprights}`}>
            <div className='row align-center'>
              <div className='col-12 col-md-6'>
                <div className={`${classes.copyRight}`}>
                  {translate('copyright')} © {date} {translate('rights')}.
                </div>
              </div>
              <div className='col-12 col-md-6'>
                <div className={`${classes.copyRight}`}>
                  <span>{translate('organisation')}</span>
                  <span className={classes.verticalLine}>|</span>
                  <NavLink to={Routes.about} className={classes.rightReserv}>
                    {translate('terms')}
                  </NavLink>
                  <span className={classes.verticalLine}>|</span>
                  <NavLink
                    to={Routes.about}
                    className={`${classes.rightReserv}`}
                  >
                    {translate('privacy')}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
