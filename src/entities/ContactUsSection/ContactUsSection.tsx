import React, { memo } from 'react';
import { Form } from "react-final-form";
import { emailPattern } from '../../utils/validators';
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import './ContactUsSection.scss';


export const ContactUsSection = memo(() => {
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const onSubmit = async (values: { email: string; }) => {
    await sleep(300)

    if (!emailPattern.test(values.email)) {
      return { email: 'Email is not valid' }
    }
    window.alert('LOGIN SUCCESS!')
  }

  return (
    <section className="contact-us section">
      <div className="container">
        <strong
          className="contact-us__question"
        >
          Do you have any questions?
        </strong>
        <h3 className="contact-us__title">
          Contact us
        </h3>
        <Form
          onSubmit={onSubmit}
          render={({
            handleSubmit,
            submitting
          }) => (
            <form
              onSubmit={handleSubmit}
              className="contact-us__form"
            >
              <Input
                type="text"
                name="email"
                placeholder="Enter your mail"
              />
              <Button
                buttonType="submit"
                size="large"
                mode="dark"
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