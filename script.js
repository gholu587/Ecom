var products = [
  { name: "Phone", price: 30000, cat: "electronics" },
  { name: "Laptop", price: 60000, cat: "electronics" },
  { name: "Tablet", price: 25000, cat: "electronics" },
  { name: "Headphones", price: 2000, cat: "electronics" },
  { name: "Smart Watch", price: 8000, cat: "electronics" },
  { name: "Camera", price: 45000, cat: "electronics" },
  { name: "Keyboard", price: 1500, cat: "electronics" },
  { name: "Mouse", price: 800, cat: "electronics" },
  { name: "Speaker", price: 3000, cat: "electronics" },
  { name: "Power Bank", price: 1800, cat: "electronics" },

  { name: "T-Shirt", price: 800, cat: "clothing" },
  { name: "Jeans", price: 1500, cat: "clothing" },
  { name: "Jacket", price: 3500, cat: "clothing" },
  { name: "Shoes", price: 2500, cat: "clothing" },
  { name: "Cap", price: 500, cat: "clothing" },
  { name: "Sweater", price: 2200, cat: "clothing" },
  { name: "Shorts", price: 900, cat: "clothing" },
  { name: "Socks", price: 300, cat: "clothing" },
  { name: "Belt", price: 700, cat: "clothing" },
  { name: "Hoodie", price: 2800, cat: "clothing" }
];

var body = document.getElementById("tableBody");
var select = document.getElementById("option");

function show(list) {
  body.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    body.innerHTML +=
      "<tr>" +
      "<td>" + list[i].name + "</td>" +
      "<td>₹" + list[i].price + "</td>" +
      "<td>" + list[i].cat + "</td>" +
      "</tr>";
  }
}

function applyOption() {
  var value = select.value;
  var list = products.slice();


  if (value == "electronics" || value == "clothing") {
    var f = [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].cat == value) f.push(list[i]);
    }
    list = f;
  }

  
  if (value == "low") {
    list.sort(function(a, b) { return a.price - b.price; });
  }
  if (value == "high") {
    list.sort(function(a, b) { return b.price - a.price; });
  }

  show(list);
}

show(products);   
