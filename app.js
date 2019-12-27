
function solution() {

    let arr = [
        {
            "ProductID": 1,
            "ProductName": "Chai",
            "UnitPrice": 18,
            "UnitsInStock": 39,
            "DeliveryOn": new Date(1996, 8, 20).toDateString()
        },
        {
            "ProductID": 2,
            "ProductName": "Chang",
            "UnitPrice": 19,
            "UnitsInStock": 17,
            "DeliveryOn": new Date(1996, 7, 12).toDateString()
        },
        {
            "ProductID": 3,
            "ProductName": "Aniseed Syrup",
            "UnitPrice": 10,
            "UnitsInStock": 0,
            "DeliveryOn": new Date(1996, 8, 26).toDateString()
        },
        {
            "ProductID": 4,
            "ProductName": "Chef Anton's Cajun Seasoning",
            "UnitPrice": 22,
            "UnitsInStock": 53,
            "DeliveryOn": new Date(1996, 9, 19).toDateString()
        },
        {
            "ProductID": 5,
            "ProductName": "Chef Anton's Gumbo Mix",
            "UnitPrice": 21.35,
            "UnitsInStock": 0,
            "DeliveryOn": new Date(1996, 7, 17).toDateString()
        },
        {
            "ProductID": 6,
            "ProductName": "Grandma's Boysenberry Spread",
            "UnitPrice": 25,
            "UnitsInStock": 120,
            "DeliveryOn": new Date(1996, 9, 19).toDateString()
        },
        {
            "ProductID": 7,
            "ProductName": "Uncle Bob's Organic Dried Pears",
            "UnitPrice": 30,
            "UnitsInStock": 0,
            "DeliveryOn": new Date(1996, 7, 22).toDateString()
        },
        {
            "ProductID": 8,
            "ProductName": "Northwoods Cranberry Sauce",
            "UnitPrice": 40,
            "UnitsInStock": 0,
            "DeliveryOn": new Date(1996, 11, 1).toDateString()
        },
        {
            "ProductID": 9,
            "ProductName": "Mishi Kobe Niku",
            "UnitPrice": 97,
            "UnitsInStock": 29,
            "DeliveryOn": new Date(1997, 1, 21).toDateString()
        },
        {
            "ProductID": 10,
            "ProductName": "Ikura",
            "UnitPrice": 31,
            "UnitsInStock": 31,
            "DeliveryOn": new Date(1996, 8, 5).toDateString()
        }
    ];


    let stock = $('.mainList');

    for (let i = 0; i < arr.length; i++) {

        let simpleArticle = $('<article>');

        let h3 = $('<h3>');
        h3.text(arr[i]["ProductName"]);

        let simpleUl = $('<ul class="simplelist">');
        let simpleImage;

        if (arr[i]["UnitsInStock"] === 0) {
            simpleImage = $(`<img src="./Images/outOfStock.jpg" alt=" "/>`);
        } else {
            simpleImage = $(`<img src="./Images/${i + 1}.jpg" alt=" "/>`);
        }

        let simpleLi1 = $(`<li>Price: ${arr[i]["UnitPrice"]}$</li>`);
        let simpleLi2 = $(`<li>Available: ${arr[i]["UnitsInStock"]} pcs</li>`);
        let simpleLi3 = $(`<li>Delivered on ${arr[i]["DeliveryOn"]}</li>`);

        simpleUl.append(simpleLi1);
        simpleUl.append(simpleLi2);
        simpleUl.append(simpleLi3);

        simpleArticle.append(h3);
        simpleArticle.append(simpleImage);
        simpleArticle.append(simpleUl);

        stock.append(simpleArticle);


    }


}
