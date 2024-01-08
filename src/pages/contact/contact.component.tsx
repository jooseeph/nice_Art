import { Button, Form, Input } from 'antd';
import { useContactStyle } from './contact.style';
import { ArrowRight } from 'assets/images/icons/arrows';

const ContactComponent = () => {
  const classes = useContactStyle();
  const initialValues = {
    email: '',
    phone: '',
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className={`left col-lg-5  col-sm-12 ${classes.left}`}>
          <h1 style={{ fontWeight: '60px' }}>DISCOVER US</h1>
          <p>
            Flick is here to help you; Our experts are available to answer any
            questions you might have. We’ve got the answers.
          </p>
          <h1>Visit Us</h1>
          <p>
            Office no. G-02. Building 1, Ground Floor. Dubai Media City – Dubai
          </p>
          <br />
          <br />
          <p>Feel free to get in touch with us through our channels:</p>
          <h1>Email US</h1>
          <p>javidan.nasib@gmai.com</p>
          <h1>Call US</h1>
          <p>+994 51 535 11 35</p>
        </div>
        <div className={` col-lg-7 col-sm-12 ${classes.img}`}>
          <div className='column top'>
            <img
              src='/src/assets/images/statics/contactPhoto1.svg'
              alt='Image 1'
            />
            <img className='specialImage'
              src='/src/assets/images/statics/contactPhoto2.svg'
              alt='Image 2'
            />
          </div>
          <div className='column bottom '>
            <img
              src='/src/assets/images/statics/contactPhoto3.svg'
              alt='Image 3'
            />
            <img
              src='/src/assets/images/statics/contactPhoto4.svg'
              alt='Image 4'
            />
          </div>
        </div>
      </div>
      <section className='formSection col-sm-12'>
        <div className={classes.overlay}></div>
        <div
          className='row '
          style={{ paddingTop: '120px', paddingBottom: '120px' }}
        >
          <div className={` col-lg-6 col-sm-12  ${classes.leftTitle}`}>
            <h1>Have a project! Let’s diascuss </h1>
            <p>
              Vehicula elit est, neque non mattis pharetra, urna lectus magnis.
              Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna
              egestas est aliquet facilisis elit sit. Massa libero turpis
              facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu
              senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo
              libero diam.
            </p>
          </div>

          <div className={`col-lg-6 col-sm-12  pl-75 ${classes.submitForm}`}>
            <Form name='login' initialValues={initialValues} layout='vertical'>
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
