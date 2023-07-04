import css from './transactionHistory.module.css';
import { TransactionRow } from "./transactionRow";

export const TransactionHistory = ( {items} ) => {
    return (
        <table className={css.transactionhistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
            {items.map(item => 
            <TransactionRow
            key={item.id}
            id={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            />
            )}
            </tbody>
            </table>
    )
};

