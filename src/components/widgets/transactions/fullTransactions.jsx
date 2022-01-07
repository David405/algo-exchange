import React,{useEffect,useState} from 'react'
import { transactionsData } from '../../../store/dummy_data';
import { FullTable } from '../../elements/table';

export function FullTransactionWidget(props) {
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
        <FullTable transaction={transaction}/>
    )
}
