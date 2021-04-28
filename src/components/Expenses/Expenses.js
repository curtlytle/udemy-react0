import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import './ExpensesFilter.css';

// function Expenses(props) {
const Expenses = (props) => {
    const items = props.items;
    const [filteredYear, setFilteredYear] = useState('2020');

    const YearSelectedHandler = selectedYear => {
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onYearSelected={YearSelectedHandler} />
                {props.items.map(expense =>
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                )}
            </Card>
        </div>
    );
};

export default Expenses;