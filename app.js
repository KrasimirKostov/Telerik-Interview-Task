    /* The static collection I will display */
    const arr = [
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
    
    /* main function of our project. It is called on document load */
    function solution() {
        const stock = $('.mainList');
    
      
        arr.forEach((item, index) => {
            stock.append(buildProductTile(item, index));
        });
    }
    
    
    /* for the purpose of simplifying the main function,
        the construction of each product template is moved to this function. */
    function buildProductTile(item, index) {
        const simpleArticle = $('<article>');
    
        const h3 = $('<h3>');
        h3.text(item["ProductName"]);
    
        const simpleUl = $('<ul class="simplelist">');
        let simpleImage;
        const availableItems = $(`<li>Available: ${item["UnitsInStock"]} pcs</li>`);
    
        /* I check whether or not our product is available and load the photo accordingly.
            Also, I color the Available text with green when available and red when not. */
        if (item["UnitsInStock"] === 0) {
            simpleImage = $(`<img src="./Images/outOfStock.jpg" alt=" "/>`);
            availableItems.addClass("not-available");
        } else {
            simpleImage = $(`<img src="./Images/${index + 1}.jpg" alt=" "/>`);
        }
    
        simpleUl.append($(`<li>Price: ${item["UnitPrice"]}$</li>`));
        simpleUl.append(availableItems);
        simpleUl.append($(`<li>Delivered on ${item["DeliveryOn"]}</li>`));
    
        /* Append all elements to the main article element. */
        simpleArticle.append(h3);
        simpleArticle.append(simpleImage);
        simpleArticle.append(simpleUl);
    
        return simpleArticle;
    }
    