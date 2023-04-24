import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const initalvalues = {
        enteredTitle: ' ',
        enteredAmount: ' ',
        enteredDate: ' ',
    }

    const [userInput, setUserInput] = useState(initalvalues)

    const ChangeHandler = (event) => {
        // prevstate
        setUserInput((prevstate) => {
            return { ...prevstate, [event.target.name]: event.target.value }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData)
        setUserInput(initalvalues)   // to empty the input fields after submit
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" name='enteredTitle' onChange={ChangeHandler} value={userInput.enteredTitle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' name='enteredAmount' onChange={ChangeHandler} value={userInput.enteredAmount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min='01-1-2019' max='31-12-2025' name='enteredDate' onChange={ChangeHandler} value={userInput.enteredDate} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm