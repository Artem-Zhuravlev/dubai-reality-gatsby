import React, { memo } from 'react';
import { Accordion, AccordionItemProps } from 'components/Accordion';
import './FaqSection.scss';

interface FaqSectionProps {
  className?: string
}

export const FaqSection = memo((props: FaqSectionProps) => {
  const { className } = props;
  const data: AccordionItemProps[] = [
    {
      title: "What are the system requirements for using your software?",
      content: "Our software is compatible with Windows, macOS, and Linux operating systems. It requires a minimum of 2GB RAM and 500MB of free disk space."
    },
    {
      title: "How do I reset my password?",
      content: "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions to reset your password via email."
    },
    {
      title: "Do you offer refunds?",
      content: "Yes, we offer refunds within 30 days of purchase. Please contact our customer support team with your purchase details to initiate the refund process."
    },
    {
      title: "Can I upgrade my subscription plan?",
      content: "Yes, you can upgrade your subscription plan at any time. Simply log in to your account and navigate to the subscription settings to upgrade."
    },
    {
      title: "Is there a mobile app available?",
      content: "Yes, we have a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play Store."
    },
    {
      title: "How do I contact customer support?",
      content: "You can contact our customer support team via email at support@example.com or through our live chat feature on our website during business hours."
    },
    {
      title: "What payment methods do you accept?",
      content: "We accept payments via credit card, PayPal, and bank transfer. Please note that additional fees may apply for certain payment methods."
    },
    {
      title: "Do you offer a free trial?",
      content: "Yes, we offer a free trial period of 14 days for new users. Sign up on our website to start your free trial today!"
    }
  ]

  return (
    <section className="faq-section section">
      <div className="container">
        <h3 className="h1 faq-section__title">FAQ</h3>
        <Accordion
          items={data}
        />
      </div>
    </section>
  );
});