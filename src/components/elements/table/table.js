import React from 'react';
import tableStyles from './table.module.css';

const Table = ({ children, className }) => {
  return (
    <table className={[tableStyles.table, `${className}`].join(' ')}>
      {children}
    </table>
  );
};

export default Table;
