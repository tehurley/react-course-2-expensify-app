import React from 'react';
import { connect } from 'react-redux';
import ExpenseItemList from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//Regular unconnected componet
const ExpenseList = (props) => (
   <div>
       <h1>Expense List</h1>
       {props.expenses.map((expense) => {
           return <ExpenseItemList key={expense.id} {...expense} />
        })}
   </div>
);

//function which maps store state to component props
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
     };
};

//create const for HOC, which uses the map function with the unconnected component to return the HOC
export default connect(mapStateToProps)(ExpenseList);
