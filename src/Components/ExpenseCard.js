import "./ExpenseCard.css";

const ExpenseCard = ({className, children}) => {
    const classes = `card-style ${className}`
    return (
        <div className={classes}>{children}</div>
    )
}

export default ExpenseCard;