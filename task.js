// let list = document.querySelectorAll(".primary")
// console.log(list);

// let list = document.querySelector("ul")
// console.log(list.parentElement);
// console.log(list.previousElementSibling);
// console.log(list.children);
// console.log(list.firstElementChild);


// let list = document.querySelectorAll("li");
// list.forEach(item =>{
//     item.classList.add("item");
//     if (item.classList.contains("primary")!=true) {
//         item.classList.add("secondary")
//     }
// })
// console.log(document.querySelector("ul").innerHTML);







const data = [
        { "name": "Bitcoin", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Ethereum", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Ripple", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Litecoin", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
    { "name": "Ethereum Classic", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];

let body = document.body;
let table = document.createElement("table");
table.style.width = "100%";
table.style.textAlign = "center";
table.style.fontFamily = "'Roboto', sans-serif";
table.style.border = "1px solid black";
let thead = document.createElement("thead");
let headerRow = document.createElement("tr");
["Название", "Тикер", "Цена", "Изменение за 24 часа"].forEach(text => {
    let th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid black";
    headerRow.appendChild(th);
    th.style.backgroundColor = "lightblue";
});
thead.appendChild(headerRow);
table.appendChild(thead);

let tbody = document.createElement("tbody");

data.forEach(item => {
    let row = document.createElement("tr");

Object.values(item).forEach((value, index) => {
    let cell = document.createElement("td");
    if (index === 3) {
        cell.textContent = value + "%";
    } else {
        cell.textContent = value;
    }
    cell.style.border = "1px solid black";
    if (index === 3) {
        let change = +(value);
        if (change > 0) {
            cell.style.color = "green";
        } else {
            cell.style.color = "red";
        }
    }

        row.appendChild(cell);
});
tbody.appendChild(row);
});

table.appendChild(tbody);
body.appendChild(table);