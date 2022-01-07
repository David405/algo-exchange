import React,{useEffect,useState} from 'react'
import { tradeBuyData, tradeSellData } from '../../../store/dummy_data';
import { SmallTable } from '../../elements/table';

export function OrderBook(props) {
    const [buyTransactions, setbuyTransactions] = useState([])
    const [sellTransactions, setsellTransactions] = useState([])
    useEffect(() => {
        const updateOrderBook = () => {
            // run a cmd on table
            //check data changes from endpoint
            // RUN THE API HERE
            setbuyTransactions(tradeBuyData);
            setsellTransactions(tradeSellData)
        }
        updateOrderBook()
    }, [buyTransactions])
    return (
        <SmallTable buyTransactions={buyTransactions} sellTransactions={sellTransactions}/>
    )
}
