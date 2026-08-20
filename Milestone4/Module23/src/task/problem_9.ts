interface Deposit {
    type: "deposit",
    amount: number
}

interface Withdrawal {
    type: "withdraw"
    amount: number
}

const  processTransaction = (balance:number, transaction: Deposit | Withdrawal):number | string => {
    if(transaction.type === 'deposit'){
        return balance + transaction.amount
    }

    if(transaction.type === 'withdraw'){
        if(transaction.amount > balance){
            return "Insufficient balace"
        }
    }

    return  balance - transaction.amount 
}

console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));

console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }));
