let inventory = [
    {
        sku: "SKU-001", 
        name: "T-Shirt", 
        price: 15.99, 
        stock: 25 
    },
    {
        sku: "SKU-002", 
        name: "Jeans", 
        price: 49.99, 
        stock: 10 
    },
    {
        sku: "SKU-003", 
        name: "Hoodie", 
        price: 22.99, 
        stock: 5 
    },
    {
        sku: "SKU-004",
        name: "Socks", 
        price: 3.99, 
        stock: 15 
    }
];

console.log("Inventory Summary:");
inventory.forEach(product => {
    console.log(`${product.sku} | ${product.name} | $${product.price} | Stock: ${product.stock}`);
}
)

inventory.push(   //added new product
   {
     sku: "SKU-005",
     name: "Hat",
     price: 11.99,
     stock: 20
   }
);

let removedProduct = inventory.pop(); //removed the last product

inventory[0].price = 16.99;
inventory[2].stock += 5;

let orders = [
    {
        orderId: "ORD-301",
        items: 
        [
            {sku: "SKU-001", qty: 2},
            {sku: "SKU-004", qty: 1}
        ]
    },
    {
        orderId: "ORD-302",
        items:
        [
            {sku: "SKU-002", qty: 4}
        ]
    }
];
orders.forEach(order =>{
    let canFulfill = true;
    let orderTotal = 0;
    order.items.forEach(item => {
        let product = inventory.find(p => p.sku === item.sku);

        if (!product || product.stock < item.qty) {      //checks if enough stock
            canFulfill = false;
        }
    });
    
    if (canFulfill) {
        order.items.forEach(item => {
            let product = inventory.find(p => p.sku === item.sku);
            product.stock -= item.qty;
            orderTotal += product.price * item.qty;     //price * qty
        });
        console.log(`Order ${order.orderId} processed. Total: $${orderTotal.toFixed(2)}`);
    } 
    else {
        console.log(`Order ${order.orderId} cannot be fulfilled.`);
    }
});

let totalInventoryValue = inventory.reduce((total,product) =>   //how much everything worth
    {return total + product.price * product.stock;}, 0); 
console.log(`Total Inventory Value: $${totalInventoryValue.toFixed(2)}`);

let lowStockItems = inventory.filter(product => product.stock <= 10);   //what are low stocked items
console.log(lowStockItems);

let priceList = inventory.map(product => {     //price list
    return `${product.sku} — $${product.price}`;
}); console.log(priceList);









