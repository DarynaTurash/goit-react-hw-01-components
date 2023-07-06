import css from './transactionHistory.module.css';
import PropTypes from 'prop-types';
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
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            />
            )}
            </tbody>
            </table>
    )
};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

