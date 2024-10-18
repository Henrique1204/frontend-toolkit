import React from 'react';

import { MASKS } from '@utils/mask';

import * as Types from './types';

import Error from '@components/Form/Input/components/Error';
import InputStyled from '@components/Form/Input/components/InputStyled';
import Wrapper from '@components/Form/Input/components/Wrapper';

const BaseInput: Component<Types.InputProps> = ({
  testId = 'base-input',
  onChange,
  onKeyUp,
  onEnterSubmit,
  validateError,
  mask = 'none',
  onBlur,
  onFocus,
  classNames,
  ...props
}) => {
  const [validationError, setValidationError] = React.useState<string>('');
  const hasError = Boolean(validationError);

  const maskMethod = MASKS[mask];

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = maskMethod(target.value);
    onChange?.(maskedValue);
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (validateError && !props.disabled) setValidationError(validateError?.(value));

    onChange?.(maskMethod(value));

    onBlur?.(event);
  };

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (validateError && !props.disabled) setValidationError('');
    onFocus?.(event);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyUp) return onKeyUp(event);

    if (event.key === 'Enter' && onEnterSubmit) {
      event.preventDefault();

      onEnterSubmit();
    }
  };

  React.useEffect(() => {
    if (props.disabled) setValidationError('');
  }, [props.disabled]);

  return (
    <Wrapper testId={`${testId}-wrapper`} className={classNames?.wrapper}>
      <InputStyled
        testId={testId}
        {...props}
        hasError={hasError}
        className={classNames?.input}
        onChange={handleOnChange}
        onKeyUp={handleKeyUp}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />

      {hasError && (
        <Error testId={`${testId}-error`} className={classNames?.error}>
          {validationError}
        </Error>
      )}
    </Wrapper>
  );
};

export default BaseInput;
