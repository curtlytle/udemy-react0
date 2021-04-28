import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css';

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
                <ExpensesFilter selectedYear={filteredYear} onYearSelected={filterCHangeHandler}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;