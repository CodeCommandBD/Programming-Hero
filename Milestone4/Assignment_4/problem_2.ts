type Booking = {
    name: string;
    guests: number;
    time: string
}


const formatBookingConfirmation = (booking: Booking):string =>{
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
}

console.log(formatBookingConfirmation({ name: "Aisha", guests: 4, time: "7:00 PM" }));
