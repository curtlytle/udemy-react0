import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    const cancelFormHandler = () => {
        setShowForm(false);
    }

    const startFormHandler = () => {
        setShowForm(true);
    }


    return (
        <div className="new-expense">
            {!showForm && <button onClick={startFormHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelFormHandler}/>}
        </div>
    );

}

export default NewExpense;