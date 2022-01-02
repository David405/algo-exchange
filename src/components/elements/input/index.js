import React from 'react'
import styles from './input.module.css'

const Input = ({
  type = 'text',
  placeholder = '',
  handleInputChange = () => {},
  name = '',
  value,
  ref,
  containerStyles,
  ...rest
}) => {
  return (
    <div className={styles.input_container} style={containerStyles}>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        autoComplete="new-password"
        name={name}
        value={value}
        ref={ref}
        {...rest}
      />
      {rest.error ? <p>{rest.error.message}</p> : null}
    </div>
  )
}

const TradeInputType = () => {
  return <div></div>
}

export { Input }
