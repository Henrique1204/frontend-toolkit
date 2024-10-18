import React from 'react';

import classNames from 'classnames';

const Error: Component<React.HTMLAttributes<HTMLSpanElement>> = ({
  testId = 'error',
  className = '',
  children,
  ...props
}) => {
  const classNameMerged = classNames('text-feedback-error-main', className);

  return (
    <span data-testid={testId} className={classNameMerged} {...props}>
      {children}
    </span>
  );
};

export default Error;
