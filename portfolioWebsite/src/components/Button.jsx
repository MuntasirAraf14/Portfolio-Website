// src/components/Button.jsx (The new and improved version)

import React from 'react';
import propTypes from 'prop-types';

// The Base Button component that contains all the logic
const Button = ({
  href,
  download,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' or 'outline'
  target = '_self',
  label,
  icon,
  classes = '' // Renamed from 'classes' to avoid conflict, good practice
}) => {
  // Define styles based on the variant
  const variantStyles = {
    primary: 'btn btn-primary',
    outline: 'btn btn-outline'
  };

  const finalClassName = `${variantStyles[variant]} ${classes}`;

  const content = (
    <>
      {label}
      {icon && (
        <span className="material-symbols-rounded ml-2" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  // If href is provided, render a link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={finalClassName}
        download={download}
      >
        {content}
      </a>
    );
  }

  // Otherwise, render a button
  return (
    <button
      type={type}
      className={finalClassName}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  href: propTypes.string,
  download: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  onClick: propTypes.func,
  type: propTypes.string,
  variant: propTypes.oneOf(['primary', 'outline']),
  target: propTypes.string,
  label: propTypes.string.isRequired,
  icon: propTypes.string,
  classes: propTypes.string,
};


// Export specialized versions for convenience. This is the magic!
// You still use <ButtonPrimary> and <ButtonOutline> in your app.

export const ButtonPrimary = (props) => <Button {...props} variant="primary" />;

export const ButtonOutline = (props) => <Button {...props} variant="outline" />;