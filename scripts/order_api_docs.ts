// import * as fs from 'fs';

// const orderApiDocs = {
//     base_url: "<http://localhost:3001/api/getinfo/>",
//     endpoints: {
//         "/getinfo": {
//             method: "GET",
//             description: "Retrieve the menu of flavors and customizations.",
//             parameters: null,
//             response: {
//                 description: "A JSON object containing available flavors and toppings along with their counts.",
//                 content_type: "application/json"
//             }
//         }
//     }
// };

// const orderApiDocsJson = JSON.stringify(orderApiDocs, null, 2);

// fs.writeFile('order_api_docs.ts', `export const orderApiDocs = ${orderApiDocsJson};`, (err) => {
//     if (err) throw err;
//     console.log('Scoopsie API docs file has been created!');
// });
