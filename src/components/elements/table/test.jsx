
import React from 'react'
import {Button} from './components/elements/button';
import { useState, useEffect, useMemo } from 'react';
import btnStyle from './components/elements/button/button.module.css';
import Table from './components/elements/table/table';
import TableBody from './components/elements/table/tbody';
import TableHead from './components/elements/table/thead';
import TableHeader from './components/elements/table/th';
import TableRow from './components/elements/table/tr';
import TableData from './components/elements/table/td';
import axios from 'axios';
import { useTable } from 'react-table';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const getTransactions = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products/');
      if (res.status === 200) {
        console.log(res.data);
        setTransactions(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const _transactionObject =
    transactions.length > 0 ? Object.keys(transactions[0]) : [];
  const columns = useMemo(
    () =>
      transactions
        ? _transactionObject
            .filter(key => key !== 'rating')
            .map(key => {
              return { Header: key, accessor: key };
            })
        : [],
    [transactions]
  );

  const data = useMemo(() => [...transactions], [transactions]);
  const { getTableProps, getTableBodyProps, rows, headerGroups, prepareRow } =
    useTable({
      columns: columns,
      data: data,
    });

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="App">
      <div style={{ width: '400px' }}>
        <Button
          label="Buy Primary"
          loading={loading}
          className={[btnStyle.btn_secondary, btnStyle.btn_block].join(' ')}
          type="button"
          loadingText="Signing In..."
        />
      </div>
      Welcome to Algorand{' '}
      {transactions.length > 0 && (
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups?.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup?.headers.map(column => (
                  <TableHeader {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </TableHeader>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows?.map(row => {
              prepareRow(row);

              return (
                <TableRow {...row.getRowProps()}>
                  {row?.cells.map(cell => (
                    <TableData {...cell.getCellProps()}>
                      {cell?.render('Cell')}
                    </TableData>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default App;
