interface ResponseData<T> {
    data: T,
    status: number
}

const transactionResponse: ResponseData<string> = {
    data: "Transaction Successful",
    status: 200
}

const transactionResponse2: ResponseData<number> = {
    data: 12345,
    status: 200
}

// generic function to handle API responses
// generic function to handle API responses
// generic function to handle API responses

function handleApiResponse<T>(response: ResponseData<T>): void {
    console.log(`Status: ${response.status}`);
    console.log(`Data: ${response.data}`);
}

handleApiResponse(transactionResponse);
handleApiResponse(transactionResponse2);

// custom function with generic type parameter
// custom function with generic type parameter
// custom function with generic type parameter

function processData<T>(input: T): T {
    // Perform some processing on the input data
    console.log(`Processing data: ${input}`);
    return input;
}

const processedString = processData("Hello, World!");
const processedNumber = processData(42);


