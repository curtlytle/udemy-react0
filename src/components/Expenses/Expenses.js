import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import './ExpensesFilter.css';

// function Expenses(props) {
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterCHangeHandler = fyear => {
        console.log('Expenses.js');
        console.log(fyear);
        setFilteredYear(fyear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;

    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onYearSelected={filterCHangeHandler} />
                {filteredExpenses.map(expense =>
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                )}
            </Card>
        </div>
    );
};

export default Expenses;