import { Button, Form, Input } from 'antd';
import { useContactStyle } from './contact.style';
import { ArrowRight } from 'assets/images/icons/arrows';
import Image1 from 'assets/images/statics/contactPhoto1.svg';
import Image2 from 'assets/images/statics/contactPhoto2.svg';
import Image3 from 'assets/images/statics/contactPhoto3.svg';
import Image4 from 'assets/images/statics/contactPhoto4.svg';
import { useContact } from './actions/contact.query';
import useLocalization from 'assets/lang';
const ContactComponent = () => {
  const translate = useLocalization();

  const classes = useContactStyle();
  const initialValues = {
    email: '',
    phone: '',
  };

  const mutation = useContact();

  const onFinish = values => {
    mutation.mutate(values);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className={`left col-lg-5  col-sm-12 ${classes.left}`}>
          <h1 style={{ fontWeight: '60px' }}>{translate('contactTitle')}</h1>
          <p>{translate('contactText')}</p>
          <h1> {translate('contactTitleSecond')}</h1>
          <p>{translate('contactTextSecond')}</p>
          <br />
          <br />
          <p>{translate('contactTextThird')}</p>
          <h1>{translate('contactEmail')} </h1>
          <p>{translate('contactEmailText')}</p>
          <h1>{translate('contactCall')}</h1>
          <p>{translate('contactCallText')}</p>
        </div>
        <div className={` col-lg-7 col-sm-12 ${classes.img}`}>
          <div className='column top'>
            <img src={Image1} alt='Image 1' />
            <img className='specialImage' src={Image2} alt='Image 2' />
          </div>
          <div className='column bottom '>
            <img src={Image3} alt='Image 3' />
            <img src={Image4} alt='Image 4' />
          </div>
        </div>
      </div>
      <section className={`col-sm-12 ${classes.form}`}>
        <div className={classes.overlay}></div>
        <div
          className='row '
          style={{ paddingTop: '70px', paddingBottom: '80px' }}
        >
          <div className={` col-lg-6 col-sm-12  ${classes.leftTitle}`}>
            <h1>{translate('contactFormTitle')}</h1>
            <p>{translate('contactFormText')}</p>
          </div>

            <div className={`col-lg-6 col-sm-12  pl-75 ${classes.submitForm}`}>
              <Form
                onFinish={onFinish}
                name='login'
                initialValues={initialValues}
                layout='vertical'
              >
                <div className={`row justify-between`}>
                  <Form.Item className={classes.submitInput} name='email'>
                    Ad Soyad
                    <Input placeholder='Enter your username or email address' />
                  </Form.Item>
                  <Form.Item className={classes.submitInput} name='email'>
                    E-poçt
                    <Input placeholder='Enter your username or email address' />
                  </Form.Item>

                  <Form.Item className={classes.submitInput} name='phone'>
                    Əlaqə nömrəsi
                    <Input placeholder='Contact Number'></Input>
                  </Form.Item>
                  <Form.Item className={classes.submitInput} name='mövzu'>
                    Mövzu
                    <Input placeholder='Mövzu seçin'></Input>
                  </Form.Item>

                  <Form.Item
                    className={`${classes.submitInput} w-100`}
                    name='message'
                  >
                    Mesajınız
                    <Input placeholder='Mesajınızı daxil edin.'></Input>
                  </Form.Item>
                  <Button className=' w-100' htmlType='submit'>
                    Submit <ArrowRight />
                  </Button>
                </div>
              </Form>
            </div>
        </div>
      </section>

      <section
        className='mapSection relative'
        style={{ height: '440px', width: '100%' }}
      >
        <div className={classes.maps}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.7699404105!2d49.6898078218915!3d40.3947365196588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1703572048350!5m2!1sen!2saz'
            height='440'
            className='w-100'
            loading='lazy'
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;
