import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import 'styles/main.scss';
import { MainLayout } from "layouts/MainLayout/MainLayout";
import { ContactForm, ContactSection } from "entities/Contact";

const ContactPage: React.FC<PageProps> = () => {
  

  return (
    <MainLayout>
      <ContactSection />
      <ContactForm />
    </MainLayout>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contacts</title>
