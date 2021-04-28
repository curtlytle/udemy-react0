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
                <ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date}/>
                <ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date}/>
                <ExpenseItem title={items[2].title} amount={items[2].amount} date={items[2].date}/>
                <ExpenseItem title={items[3].title} amount={items[3].amount} date={items[3].date}/>
            </Card>
        </div>
    );
};

export default Expenses;