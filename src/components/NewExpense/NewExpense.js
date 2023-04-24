import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const saveExpenseDataHandler =(enteredExpenseDataWhichWeAreGettingFromFormSubmit)=>{
        const expenseData2 ={
            ...enteredExpenseDataWhichWeAreGettingFromFormSubmit,
            id:Math.random().toString()
        }
        // console.log(expenseData2);
        // forward data to app.js
        props.onAddExpense(expenseData2)
        
    }
 
  return (
    <div className='new-expense'>
       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense