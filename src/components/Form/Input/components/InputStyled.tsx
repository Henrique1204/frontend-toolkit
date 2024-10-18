import React from 'react';

import classNames from 'classnames';

const InputStyled: Component<
  MergeTypes<[React.InputHTMLAttributes<HTMLInputElement>, { hasError?: boolean }]>
> = ({ testId = 'input', className = '', hasError, disabled, ...props }) => {
  const classNameMerged = classNames(
    'bg-neutral-white-100 border-2 border-solid rounded-md py-1.5 px-2 outline-none text-base text-neutral-black-600 font-normal transition-all duration-300 ease-in-out placeholder:text-neutral-black-900',
    !disabled && 'hover:border-primary-light',
    !disabled && 'focus:border-primary-light',
    hasError ? 'border-feedback-error-main' : 'border-neutral-black-800',
    'disabled:bg-neutral-white-300 disabled:placeholder:text-neutral-black-800 disabled:cursor-not-allowed',
    className
  );

  return <input data-testid={testId} className={classNameMerged} disabled={disabled} {...props} />;
};

export default InputStyled;
