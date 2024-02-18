import React, { memo } from 'react';
import './ContactForm.scss';
import { Form } from 'react-final-form';
import { Button } from 'components/Form/Button/Button';
import { Input } from 'components/Form/Input/Input';
import { Textarea } from 'components/Form/Textarea/Textarea';
import { emailPattern } from 'utils/validators';

interface ContactFormProps {
  className?: string
}

export const ContactForm = memo((props: ContactFormProps) => {
  const { className } = props;

  const onSubmit = (values: { email: string; message: string }) => {
    if (!emailPattern.test(values.email)) {
      return {
        email: 'Email is not valid',
      };
    }
    window.alert('LOGIN SUCCESS!')
  }

  return (
    <section className="contact-form section">
      <div className="container">
        <h2 className="contact-form__title">
          <mark>Be in touch</mark> <br /> with us
        </h2>

        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors: { email?: string; message?: string } = {}
            if (!values.email) {
              errors.email = 'Email is required'
            }
            if (!values.message) {
              errors.message = 'Message is required'
            }
            return errors;
          }}
          render={({
            handleSubmit,
            submitting
          }) => (
            <form
              onSubmit={handleSubmit}
              className='contact-form__form'
            >
              <Input
                type="text"
                name="name"
                placeholder="Name"
              />
              <Input
                type="text"
                name="email"
                placeholder="Email*"
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <Textarea
                name="message"
                placeholder="Message *"
                className='contact-form__message'
              />
              <Button
                buttonType="submit"
                size="large"
                disabled={submitting}
              >
                Submit
              </Button>
            </form>
          )}
        />
      </div>
    </section>
  );
});