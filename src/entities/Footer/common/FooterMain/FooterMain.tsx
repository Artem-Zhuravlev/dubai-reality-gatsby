import React, { memo } from 'react';
import './FooterMain.scss';
import { listData } from './listData';
import { List } from 'components/lists';
import { Button } from 'components/form';

export const FooterMain = memo(() => {
  return (
    <div className='footer-main container-fluid'>
      {
        listData.map(({ title, list }) => (
          <div className="footer-main__col">
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
        <Button>
          Book a consultation
        </Button>
      </div>
    </div>
  );
});
