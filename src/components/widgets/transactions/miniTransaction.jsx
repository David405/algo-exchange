import React,{useEffect,useState} from 'react'
import { transactionsData } from '../../../store/dummy_data';
import { TransactionTable } from '../../elements/table';

export function MiniTransactionWidget(props) {
    const [transaction, settransaction] = useState([])
    useEffect(() => {
        const updateTransaction = () => {
            // run a cmd on table
            //check data changes from endpoint
            // RUN THE API HERE
            let transactions =  transactionsData.transactions
            settransaction(transactions)
        }
        updateTransaction()
    }, [transaction])
    return (
        <TransactionTable transaction={transaction}/>
    )
}
