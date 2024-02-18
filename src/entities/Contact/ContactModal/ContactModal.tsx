import React, { memo } from 'react';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { useModal } from 'context/ModalContext';
import './ContactModal.scss';
import { Form } from 'react-final-form';
import { Button, Input } from '../../../components/form';

export const ContactModal = memo(() => {
  const { isOpen, closeModal } = useModal();

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const onSubmit = async () => {
    await sleep(300)
    window.alert('LOGIN SUCCESS!')
  }

  return (
    <ModalWindow
      isOpen={isOpen}
    >
      <div
        className="contact-modal"
      >
        <h3
          className="h2 contact-modal__title"
        >
          Leave your contacts
        </h3>
        <h4
          className="contact-modal__subtitle"
        >
          we will contact you within three hours
        </h4>
        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors: { name?: string; phone?: string } = {}
            if (!values.name) {
              errors.name = 'Name is required'
            }
            if (!values.phone) {
              errors.phone = 'Phone is required'
            }
            return errors;
          }}
          render={({
            handleSubmit,
            submitting
          }) => (
            <form
              onSubmit={handleSubmit}
              className="contact-modal__form"
            >
              <Input
                type="text"
                name="name"
                placeholder="Name"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
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
    </ModalWindow>
  );
});