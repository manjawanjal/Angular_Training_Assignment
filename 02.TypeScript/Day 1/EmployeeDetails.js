var product_name = "iPhone 12";
var unit_price = 50000;
var quantity = 10;
var discount_type;
(function (discount_type) {
    discount_type[discount_type["HAPPY20"] = 0.2] = "HAPPY20";
    discount_type[discount_type["SUPER50"] = 0.5] = "SUPER50";
})(discount_type || (discount_type = {}));
;
var delivery_mode;
(function (delivery_mode) {
    delivery_mode[delivery_mode["Home"] = 30] = "Home";
    delivery_mode[delivery_mode["Self"] = 0] = "Self";
})(delivery_mode || (delivery_mode = {}));
;
function process_order(product_name, unit_price, quantity, coupon, delivery) {
    console.log("\n");
    switch (coupon) {
        case "For20%": {
            if (delivery == "Home") {
                console.log("Order Details\n------------------");
                console.log("Product Name : " + product_name);
                console.log("Product Price : " + unit_price);
                console.log("Quantity : " + quantity);
                var total = (unit_price * quantity);
                total = total - total * discount_type["For20%"] + delivery_mode["Home"];
                console.log("Total Price after applying For20% : " + total);
                console.log("Deliver Mode : Home Delivery");
            }
            else {
                console.log("Order Details\n------------------");
                console.log("Product Name : " + product_name);
                console.log("Product Price : " + unit_price);
                console.log("Quantity : " + quantity);
                var total = unit_price * quantity;
                total = total - total * discount_type["For20%"];
                console.log("Total Price after applying For20% : " + total);
                console.log("Deliver Mode : Self Pickup");
            }
            break;
        }
        case "SUPER50": {
            if (delivery == "Home") {
                console.log("Order Details\n------------------");
                console.log("Product Name : " + product_name);
                console.log("Product Price : " + unit_price);
                console.log("Quantity : " + quantity);
                var total = unit_price * quantity;
                total = total - total * discount_type["SUPER50"] + delivery_mode["Home"];
                console.log("Total Price after applying SUPER50 : " + total);
                console.log("Deliver Mode : Home Delivery");
            }
            else {
                console.log("Order Details\n------------------");
                console.log("Product Name : " + product_name);
                console.log("Product Price : " + unit_price);
                console.log("Quantity : " + quantity);
                var total = unit_price * quantity;
                total = total - total * discount_type["SUPER50"];
                console.log("Total Price after applying SUPER50 : " + total);
                console.log("Deliver Mode : Self Pickup");
            }
            break;
        }
        default: {
            console.log("\nIncorrect Coupon Code");
            break;
        }
    }
}
process_order(product_name, unit_price, quantity, "SUPER50", "Home");
process_order(product_name, unit_price, quantity, "HAPPY20", "Self");
process_order(product_name, unit_price, quantity, "NEW100", "Self");
