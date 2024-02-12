import React, { memo } from 'react';
import { Field } from 'react-final-form';
import './Textarea.scss';
import classNames from 'classnames';

interface TextareaProps {
  className?: string;
  name: string;
  placeholder: string;
}

export const Textarea = memo((props: TextareaProps) => {
  const {
    className,
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
          <textarea
            {...input}
            className={classNames(
              'textarea',
              { 'textarea--error': (meta.error || meta.submitError) && meta.touched }
            )}
            name={name}
            placeholder={placeholder}
          />
          {(meta.error || meta.submitError) && meta.touched && (
            <span className="textarea__error-message">
              {meta.error || meta.submitError}
            </span>
          )}
        </div>
      )}
    </Field>
  );
});