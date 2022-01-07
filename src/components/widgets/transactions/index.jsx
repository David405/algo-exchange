import React,{useEffect,useState} from 'react'
import { transactionsData } from '../../../store/dummy_data';
import { FullTable } from '../../elements/table';

export function Transactions(props) {
    const [transaction, settransaction] = useState([])
    useEffect(() => {
        const updateOrderBook = () => {
            // run a cmd on table
            //check data changes from endpoint
            // RUN THE API HERE
            settransaction(transactionsData.transactions)
        }
        updateOrderBook()
    }, [transaction])
    return (
        <FullTable transaction={transaction}/>
    )
}
