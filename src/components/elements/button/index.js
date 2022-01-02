import React from 'react';
import { Loader } from '../../../assets/icons';
import btnStyles from './button.module.css';

const Button = ({
  label,
  className,
  type,
  onClick,
  loading,
  disabled,
  loadingText,
}) => {
  return (
    <button
      className={[
        btnStyles.btn,
        loading ? btnStyles.disabled : null,
        `${className}`,
      ].join(' ')}
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
    >
      <div className={btnStyles.loading_container}>
        {loading ? (
          <>
            <div>
              <img src={Loader} alt="Loading..." height="30" width="30" />
            </div>
            <div style={loading ? { opacity: 0.6 } : null}>{loadingText}</div>
          </>
        ) : (
          <div>{label}</div>
        )}
      </div>
    </button>
  );
};

export default Button;
export { SidebarMobileToggle } from './sidebarMobileToggle';

