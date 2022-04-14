import './ExpenseItem.css'

const ExpenseItem = () => {
    return (
        <div className="expense-item">
            <div>April 14th 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$293.69</div>
            </div>
        </div>
    )
}

export default ExpenseItem;