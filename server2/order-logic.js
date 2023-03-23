const { SmartAPI } = require('smartapi-javascript')
var tulind = require('tulind');



const smartKey = 'Ovm1TZrg'
const client_id = "D141965"
const client_pass = "5361"
let refresh = "eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6IlJFRlJFU0gtVE9LRU4iLCJpYXQiOjE2Nzk0MjE1Mzl9.X1fai5iJ1IV5Vg-_1BGvZDeloKieBhNjuu96QmCO-MtzrxcSxoh1WHiCaw8ykfGGLgXBLMTcT8Ve7rtHFTqhVA";
let access = "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IkQxNDE5NjUiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjc5NDIxNTM5LCJleHAiOjE3NjU4MjE1Mzl9.qRJEkMJ0774j4HLf5ltpCm50LIHGs5T06GZ9GAgY_958CItIbwRWRe5PwSTGhOAcBaAjC2lC3WQoWDibPiWCmw";
let feed = "0853506889"

console.log(tulind.indicators.ema)


// const smart_api = new SmartAPI({
//     api_key: smartKey,
//     refresh_token: refresh,
//     access_token: access
// })

// console.log(smart_api)




// smart_api.generateSession(client_id, client_pass, "132380" )
//     .then((data) => {
//         console.log(data)

// })

// console.log("global")
// console.log(refresh)
// console.log(access)


// const smart_api = new SmartAPI({
//     api_key: smartKey,
//     refresh_token: refresh,
//     access_token: access
// })

//     // 
    
//    const getCandle = (stime, etime) =>{
//     smart_api.getCandleData({
//             "exchange": "NSE",
//             "symboltoken": "3045",
//             "interval": "ONE_MINUTE",
//             "fromdate": "2023-03-20 09:41",
//             "todate": "2023-03-20 09:43"
//         }).then((data) => {
//         console.log(data)
//     })
// }


//-------------SAMPLE DATA-------------

// [
//     [ '2023-03-20T09:40:00+05:30', 521.8, 521.8, 521, 521.2, 28149 ],
//     [ '2023-03-20T09:41:00+05:30', 521.4, 521.8, 521.2, 521.3, 19611 ],
//     [ '2023-03-20T09:42:00+05:30', 521.35, 521.6, 520.55, 521.55, 55155 ],
//     [ '2023-03-20T09:43:00+05:30', 521.7, 521.7, 521.25, 521.7, 12164 ]
// ]


// function padTo2Digits(num) {
//     return num.toString().padStart(2, '0');
//   }
  
//   function formatDate(date) {
//     return (
//       [
//         date.getFullYear(),
//         padTo2Digits(date.getMonth() + 1),
//         padTo2Digits(date.getDate()),
//       ].join('-') +
//       ' ' +
//       [
//         padTo2Digits(date.getHours()),
//         padTo2Digits(date.getMinutes()),
//         padTo2Digits(date.getSeconds()),
//       ].join(':')
//     );
//   }
//     console.log("Hello testing")
//     console.log(formatDate(new Date()))


//----------EMA AND DATA TESTING----------
const bars = [
    [ '2023-03-20T09:40:00+05:30', 521.8, 521.8, 521, 521.2, 28149 ],
    [ '2023-03-20T09:41:00+05:30', 521.4, 521.8, 521.2, 521.3, 19611 ],
    [ '2023-03-20T09:42:00+05:30', 521.35, 521.6, 520.55, 521.55, 55155 ],
    [ '2023-03-20T09:43:00+05:30', 521.7, 521.7, 521.25, 521.7, 12164 ]
    // [ timestamp, open, high, low, close, volume]
]


// extract the closing bars using filter option
const close = []

bars.map((bar)=>{
    close.push(bar[4])
})
// console.log(close)

let emas = null


// calculate ema using tulind
// console.log(tulind.indicators.ema)
tulind.indicators.ema.indicator([close], [9], function(err, results) {
    console.log("Result of ema is:");
    emas = results[0];
    console.log(emas)
  });

//^^^^^^^^^^END^^^^^^^^^^






    // const check1 = async () => {

    //     const oneMinute = 60000000
    //     let now = new Date()
    //     let timeStart = formatDate(new Date(now - (3*oneMinute)))
    //     let timeEnd = formatDate(new Date(now - oneMinute))

    //     const bars = getCandle(timeStart, timeEnd)

    //     // extract the closing bars using filter option-----------DONE----------------
    //     const close = []

    //     bars.map((bar)=>{
    //          close.push(bar[4])
    //     })
    //     // console.log(close)


    //     // calculate ema using tulind---------------DONE-----------------
    //     // console.log(tulind.indicators.ema)
    //     tulind.indicators.ema.indicator([close], [3], function(err, results) {
    //         const emas = results[0];
    //         // console.log("Result of ema is:");
    //         // console.log(emas)
    //       });


    
        
        


    //     console.log(timeStart)
    //     console.log(timeEnd)
    // }

    // setInterval(check1,1000)
    // getCandle()











// User Methods
//         // return smart_api.getProfile()

//         // return smart_api.logout()
//         // console.log(data)

//         // return smart_api.getRMS();

//         // Order Methods
//         // return smart_api.placeOrder({
//         //     "variety": "NORMAL",
//         //     "tradingsymbol": "SBIN-EQ",
//         //     "symboltoken": "3045",
//         //     "transactiontype": "BUY",
//         //     "exchange": "NSE",
//         //     "ordertype": "LIMIT",
//         //     "producttype": "INTRADAY",
//         //     "duration": "DAY",
//         //     "price": "19500",
//         //     "squareoff": "0",
//         //     "stoploss": "0",
//         //     "quantity": "1"
//         // })

//         // return smart_api.modifyOrder({
//         //     "orderid": "201130000006424",
//         //     "variety": "NORMAL",
//         //     "tradingsymbol": "SBIN-EQ",
//         //     "symboltoken": "3045",
//         //     "transactiontype": "BUY",
//         //     "exchange": "NSE",
//         //     "ordertype": "LIMIT",
//         //     "producttype": "INTRADAY",
//         //     "duration": "DAY",
//         //     "price": "19500",
//         //     "squareoff": "0",
//         //     "stoploss": "0",
//         //     "quantity": "1"
//         // });

//         // return smart_api.cancelOrder({
//         //     "variety": "NORMAL",
//         //     "orderid": "201130000006424"
//         // });

//         // return smart_api.getOrderBook();

//         // return smart_api.getTradeBook();

      
//         // Portfolio Methods
//         // return smart_api.getHolding();

//         // return smart_api.getPosition();

//         // return smart_api.convertPosition({
//         //     "exchange": "NSE",
//         //     "oldproducttype": "DELIVERY",
//         //     "newproducttype": "MARGIN",
//         //     "tradingsymbol": "SBIN-EQ",
//         //     "transactiontype": "BUY",
//         //     "quantity": 1,
//         //     "type": "DAY"
//         // });


//         // GTT Methods
//         // return smart_api.createRule({
//         //    "tradingsymbol" : "SBIN-EQ",
//         //    "symboltoken" : "3045",
//         //    "exchange" : "NSE", 
//         //    "producttype" : "MARGIN",
//         //    "transactiontype" : "BUY",
//         //    "price" : 100000,
//         //    "qty" : 10,
//         //    "disclosedqty": 10,
//         //    "triggerprice" : 200000,
//         //    "timeperiod" : 365
//         // })
//         // return smart_api.modifyRule({
//         //             "id" : 1000014,
//         //             "symboltoken" : "3045",
//         //             "exchange" : "NSE", 
//         //             "qty" : 10

//         // })
//         // return smart_api.cancelRule({
//         //      "id" : 1000014,
//         //      "symboltoken" : "3045",
//         //      "exchange" : "NSE"
//         // })
//         // return smart_api.ruleDetails({
//         //     "id" : 25
//         // })
//         // return smart_api.ruleList({
//         //      "status" : ["NEW","CANCELLED"],
//         //      "page" : 1,
//         //      "count" : 10 
//         // })

//       // Historical Methods
//         // return smart_api.getCandleData({
//         //     "exchange": "NSE",
//         //     "symboltoken": "3045",
//         //     "interval": "ONE_MINUTE",
//         //     "fromdate": "2021-02-10 09:20",
//         //     "todate": "2021-02-10 09:21"
//         // })