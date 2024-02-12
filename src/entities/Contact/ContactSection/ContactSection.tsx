import React, { memo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { trimCharacters } from 'helpers/trimCharacters';
import './ContactSection.scss';

export const ContactSection = memo(() => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          companyName,
          phone,
          address,
          email
        }
      }
    }
  `);

  const {
    companyName,
    phone,
    address,
    email
  } = data.site.siteMetadata;

  return (
    <div className="contact-section section">
      <article className="contact-section__info">
        <h3 className="contact-section__title">{companyName}</h3>
        <address className="contact-section__address">{address}</address>
        <ul className="contact-section__list">
          <li className="contact-section__list-item">
            Phone: 
            <a href={`tel:+${trimCharacters(phone)}`} className="contact-section__link">{phone}</a>
          </li>
          <li className="contact-section__list-item">
            Email: 
            <a href={`mailto:${email}`} className="contact-section__link">{email}</a>
          </li>
        </ul>
      </article>
      <div className="contact-section__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924533.3408686928!2d54.49409420509182!3d25.153996415121888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z0JTRg9Cx0LDQuSAtINCe0LHRitC10LTQuNC90LXQvdC90YvQtSDQkNGA0LDQsdGB0LrQuNC1INCt0LzQuNGA0LDRgtGL!5e0!3m2!1sru!2sua!4v1707745563512!5m2!1sru!2sua"
          width="600"
          height="450"
          style={{ border: 0}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
});