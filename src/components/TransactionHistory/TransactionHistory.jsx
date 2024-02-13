import React from 'react';
import css from './Transaction.module.css'

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.container}>
      <thead className={css.articles}>
        <tr>
          <th className={css.borders}>Type</th>
          <th className={css.borders}>Amount</th>
          <th className={css.borders}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={css.borders}>{capitalizeFirstLetter(item.type)}</td>
            <td className={css.borders}>{item.amount}</td>
            <td className={css.borders}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
