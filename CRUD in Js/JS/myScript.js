//Task 3
function persons(city, name) {
    this.city = city;
    this.name = name;

}
var firstPerson = new persons('lahore', 'Ali')
var secondPerson = new persons('karachi', 'Obaid')

console.log(firstPerson, secondPerson);

var newObj = {}

newObj[firstPerson.city] = firstPerson.name;

newObj[secondPerson.city] = secondPerson.name;

//console.log(newObj)

//Task 2 
var library = [{
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

function LIB(title, author, libraryID) {
    this.title = title;
    this.author = author;
    this.libraryID = libraryID
}

var newOBJ = new LIB('Harry Potter', 'J. K. Rowling', 6438)

library.push(newOBJ)

//for ascending
library.sort(function(a, b) {
    return Number(a.libraryID) - Number(b.libraryID);
});
// for descending

/*library.sort(function(a, b) {
    return Number(b.libraryID) - Number(a.libraryID);
});*/

//console.log(library)


//Task 1

let categories = [
    { id: 1, name: "Apparel"},
    { id: 2, name: "Machinery"},
    { id: 3, name: "Accessories"}
]

let company = [
    { id: 1, companyName: 'Amazon'},
    { id: 2, companyName: 'Alibaba'},
    { id: 3, companyName: 'eBay'},
    { id: 4, companyName: 'GlobalSources'}
]

let products = [
    { id: 1, name: 'Shirt', price: 529, categoryID: 1,companyID: 1},
    { id: 2, name: 'Pencils', price: 29, categoryID: 3, companyID: 2},
    { id: 3, name: 'Cleaning Equipment', price: 5092, categoryID: 2, companyID: 2},
    { id: 4, name: 'Hardware', price: 1092, categoryID: 2, companyID: 3},
    { id: 5, name: 'Jeans', price: 1300, categoryID: 1, companyID: 4}

]





//III
function DeleteProductByName() {
    var productName = document.getElementById('Inputdel').value;

    for (let i = 0; i < products.length; i++) {

        if (products[i].name == productName) {
            products.splice(i, 1)
            showProducts()

        }
    }

}
//IV
function GetCategoryProducts() {

    let categoryN = document.getElementById('Inputcat').value;
    for (let i = 0; i < products.length; i++) {
        if (products[i].categoryID == categoryName(categoryN)) {
            let Name = products[i].name
            let Price = products[i].price
            let Category = categoryid(products[i].categoryID)

            let Vendors = vendorid(products[i].vendorID)

            arr.push({ Name, Price, Category, Vendors })

        }


        var tbody = document.getElementById('Products-data');
        var rows = ''

        arr.forEach(function(product) {
            rows += `
            
                <tr>
           
                <td>${product.Name}</td>
                <td>${product.Price}</td>
                <td>${product.Category} </td>
                <td>${product.Vendors} </td>
        
                
            </tr>
                `
        });

        if (rows == '') {
            tbody.innerHTML = `<h3 style="color:red; margin-left:20px;">No record found</h3>`
        } else {



            tbody.innerHTML = rows;
        }
        document.getElementById('id04').style.display = 'none';


    }
}





//V
function GetVendorProducts() {
    let vendorFirstName = document.getElementById('Inputven').value;
    for (let i = 0; i < products.length; i++) {
        if (products[i].vendorID == GetVendorById(vendorFirstName)) {
            let Name = products[i].name
            let Price = products[i].price
            let Category = categoryid(products[i].categoryID)

            let Vendors = vendorid(products[i].vendorID)

            arr.push({ Name, Price, Category, Vendors })

        }


        var tbody = document.getElementById('Products-data');
        var rows = ''

        arr.forEach(function(product) {
            rows += `
            
                <tr>
           
                <td>${product.Name}</td>
                <td>${product.Price}</td>
                <td>${product.Category} </td>
                <td>${product.Vendors} </td>
               
        
                
            </tr>
                `
        });

        if (rows == '') {
            tbody.innerHTML = `<h3 style="color:red; margin-left:20px;">No record found</h3>`
        } else {



            tbody.innerHTML = rows;
        }
        document.getElementById('id03').style.display = 'none';


    }
}

//VI
function GetCheapProducts() {
    let maxPrice = document.getElementById('Inputprice').value;
    for (let i = 0; i < products.length; i++) {
        if (products[i].price <= maxPrice) {
            let Name = products[i].name
            let Price = products[i].price
            let Category = categoryid(products[i].categoryID)

            let Vendors = vendorid(products[i].vendorID)

            arr.push({ Name, Price, Category, Vendors })

        }


        var tbody = document.getElementById('Products-data');
        var rows = ''

        arr.forEach(function(product) {
            rows += `
            
                <tr>
           
                <td>${product.Name}</td>
                <td>${product.Price}</td>
                <td>${product.Category} </td>
                <td>${product.Vendors} </td>
        
                
            </tr>
                `
        });

        if (rows == '') {
            tbody.innerHTML = `<h3 style="color:red; margin-left:20px;">No record found</h3>`
        } else {



            tbody.innerHTML = rows;
        }
        document.getElementById('id02').style.display = 'none';




    }
}

//VII
function GetProductById() {
    let productId = document.getElementById('InputId').value;


    for (let i = 0; i < products.length; i++) {
        if (products[i].id == productId) {


            let Name = products[i].name
            let Price = products[i].price
            let Category = categoryid(products[i].categoryID)

            let Vendors = vendorid(products[i].vendorID)

            arr.push({ Name, Price, Category, Vendors })

        }


        var tbody = document.getElementById('Products-data');
        var rows = ''

        arr.forEach(function(product) {
            rows += `
                <tr>
           
                <td>${product.Name}</td>
                <td>${product.Price}</td>
                <td>${product.Category} </td>
                <td>${product.Vendors} </td>
        
                
            </tr>
                `
        });
        if (rows == '') {
            tbody.innerHTML = `<h3 style="color:red; margin-left:20px;">No record found for this Product Id</h3>`
        } else {



            tbody.innerHTML = rows;
        }
        document.getElementById('id01').style.display = 'none';






    }


}



//extra function
function showForm() {

    document.getElementsByClassName('modal-back')[0].style.display = 'block';

}

function GetVendorById(vendorFirstName) {


    for (let i = 0; i < vendors.length; i++) {
        if (vendors[i].firstName == vendorFirstName) {
            return vendors[i].id

        }
    }
}

function categoryName(name) {
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].name == name) {
            return categories[i].id

        }
    }
}
//for category id

let categoryInfo = (id) => {
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id == id) {
            return categories[i].name
        }
    }
}
//for vendor id
let companyInfo = (id) => {
    for (let i = 0; i < company.length; i++) {
        if (company[i].id == id) {
            return company[i].companyName

        }
    }
}

console.log(companyInfo(company[0].id))
//console.log(categoryInfo(categories[1].id))




let addProduct = () =>{
    let prod = {
        id: Number(document.getElementById('id').value),
        name: document.getElementById('name').value,
        price: Number(document.getElementById('price').value),
        categoryID: Number(document.getElementById('cat').value),
        companyID: Number(document.getElementById('com').value)
    }
  
         products.push(prod);
         displayProduct();
   
 

 


}


let editProducts = (i) => {

    document.getElementById('id').value = products[i].id;
    document.getElementById('name').value = products[i].name;

    document.getElementById('price').value = products[i].price;
    document.getElementById('cat').value = products[i].categoryID;
    document.getElementById('com').value = products[i].companyID;

} 

let saveProducts = (i) =>{
   
    var prod = products[i];
    prod.id = document.getElementById('id').value;
    prod.name = document.getElementById('name').value;

    prod.price = document.getElementById('price').value;
    prod.categoryID = document.getElementById('cat').value;
    prod.companyID = document.getElementById('com').value;

    products[i] = prod;
    displayProduct();
}

let deleteProduct = (i) =>{
    products.splice(i,1);   
    displayProduct();
      
}



let displayProduct=()=>{



let tbody = document.getElementById('product-data');
let rows = '';

products.forEach((products,i) => {
    rows+= `<tr><th scope="row"></th>
    <td>${products.name}</td>
    <td>${products.price}</td>
    <td>${categoryInfo(products.categoryID)}</td>
    <td>${companyInfo(products.companyID)}</td>
    <td><button type="button" class="btn btn-primary" onclick="editProducts(${i})">Edit</button></td>
    <td><button type="button" class="btn btn-Info" onclick="saveProducts(${i})">Save</button></td>

    <td><button type="button" class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
    </tr>`;
   
});

tbody.innerHTML = rows;


}
displayProduct();