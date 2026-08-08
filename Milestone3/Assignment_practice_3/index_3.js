
const CouponApplier = (orders, discount = 10) => {

    let {total} = orders

    let updateOrder = {
        ...orders,
        total: total - total * discount / 100 
    }

    return updateOrder

}

let orders = { orderId: "A1", total: 500, customer: "Mim" }

console.log(CouponApplier(orders));
