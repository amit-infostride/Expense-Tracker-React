
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'
import React from 'react'

const ExpenseItem = (props) => {

 
   
    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date2={props.date2} />
            <div className='expense-item__description'>
                <h2>{props.title2}</h2>
                <div className='expense-item__price'>${props.amount2}</div>
            </div>
            
        </Card>
        </li>
    )
}

export default ExpenseItem