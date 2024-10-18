import React from 'react';

import classNames from 'classnames';

const Wrapper: Component<React.HTMLAttributes<HTMLDivElement>> = ({
  testId = 'wrapper',
  className = '',
  children,
  ...props
}) => {
  const classNameMerged = classNames('flex flex-col gap-2', className);

  return (
    <div data-testid={testId} className={classNameMerged} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
