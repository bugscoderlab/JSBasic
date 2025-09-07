async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = response.json();
        console.log(response, data)

        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

async function displayData() {
    try {
        const data = await fetchData('https://dogapi.dog/api/v2/breeds');
        console.log(data);
    } catch (error) {
        console.error('Display error:', error);
    }
}
displayData();


// console.log((async () => await fetchData('https://dogapi.dog/api/v2/breeds'))());


// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(response, data);
//     } catch (error) {
//         console.log("fetch error: ", error)
//         return {"error": error}
//     }
// }
// console.log(fetchData('https://dogapi.dog/api/v2/breesds'))


// function tryCatchSequence() {
//     console.log('0. Before try ... catch');
    
//     try {
//         console.log('1. Inside try');
//         let result = getResult();
//         return result;
//     } catch (error) {
//         console.log('2. Inside catch');
//         return 'returned from catch';
//     } finally {
//         console.log('3. Inside finally');
//     }

//     console.log('4. Outside try ... catch');
// }

// let result = tryCatchSequence();
// console.log('5. Result:', result);

// function basicErrorHandling() {
//     try {
//         let result = getResult();
//         console.log('Result:', result);
//         return result;
//     } catch (error) {
//         console.error('! Error occurred:', error.message);
//         return null;
//     } finally {
//         console.log('Cleanup operations');
//     }
// }
// basicErrorHandling();


// function getResult() {
//     return "get result function"
// }



