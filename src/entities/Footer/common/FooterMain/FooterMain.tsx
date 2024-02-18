import React, { memo, useId } from 'react';
import './FooterMain.scss';
import { useModal } from 'context/ModalContext';
import { listData } from './listData';
import { List } from 'components/lists';
import { Button } from 'components/form/Button/Button';

export const FooterMain = memo(() => {
  const { openModal } = useModal();
  const id = useId();

  return (
    <div className='footer-main container-fluid'>
      {
        listData.map(({ title, list }, index) => (
          <div
            className="footer-main__col"
            key={`${id}_${index}`}
          >
            <List
              title={title}
              items={list}
            />
          </div>
        ))
      }

      <div className="footer-main__col">
        <div className="list-group">
          <h5 className="list-title">Contact</h5>
          <ul className="list">
            <li className="list__item">
              <address>
                964 Worthington Drive Dubai, UAE
              </address>
            </li>

            <li className="list__item">
              <a
                href="mailto:dubairealty@mail.com"
                className='list__link'
              >
                dubairealty@mail.com
              </a>
            </li>
          </ul>
        </div>
        <Button
          onClick={openModal}
        >
          Book a consultation
        </Button>
      </div>
    </div>
  );
});
