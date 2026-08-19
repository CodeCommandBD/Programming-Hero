// access modifier : pubplic, private, protected
class BkasAccount {
    public phone:string
    private balance: number
    pin: number
    protected history:any =[]


    constructor (phone:string, balance: number, pin: number) {
        this.phone = phone
        this.balance = balance
        this.pin = pin
    }

    getBalance(pin:number){
        if(pin === this.pin){
            return this.balance
        }
        return `pin req`
    }
}

const bkashAcc = new BkasAccount('012458456', 5000, 223)

console.log(bkashAcc.getBalance(123));




