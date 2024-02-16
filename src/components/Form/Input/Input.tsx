import React, { memo } from 'react';
import { Field } from 'react-final-form';
import './Input.scss';
import classNames from 'classnames';

interface InputProps {
  className?: string;
  type?: 'text' | 'email' | 'tel';
  name: string;
  placeholder: string;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    name,
    placeholder
  } = props;

  const wrapperClass = classNames(
    'input-wrapper',
    className
  );

  return (
    <Field
      name={name}
    >
       {({ input, meta }) => (
        <div
          className={wrapperClass}
        >
          <input
            {...input}
            className={classNames(
              'input',
              { 'input--error': (meta.error || meta.submitError) && meta.touched }
            )}
            name={name}
            type={type}
            placeholder={placeholder}
          />
          {(meta.error || meta.submitError) && meta.touched && (
            <span className="input__error-message">
              {meta.error || meta.submitError}
            </span>
          )}
        </div>
      )}
    </Field>
  );
});