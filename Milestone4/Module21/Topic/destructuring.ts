const device = {
    name: 'iphone',
    type: "smartPhone",
    price: 500,
    color: 'red'
}

const {name:deviceName, ...deviceInfo } = device

const one: number[] = [2,2,5,4,7]
const two: number[] = [2,2,5,4,7]

const allnum: number[] = [...one, ...two]