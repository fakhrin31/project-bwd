// sticky nav scroll
document.addEventListener('scroll', () =>{
    const header = document.querySelector('header');

    if (window.scrollY>0) {
        header.classList.add('scrolled');
    } else{
        header.classList.remove('scrolled');
    }
})


// hamburger
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Sesuaikan dengan tinggi navbar
            behavior: 'smooth'
        });
    });
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

let productsData = [];

// get data
function searchProduct(){
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data =>{
        productsData = data.products
        displayProduct(productsData)
    })
}

// sorting product
function sortProducts(order) {
    let sortedProducts = [...productsData];
    if (order === 'asc') {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'desc') {
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }
    displayProduct(sortedProducts);
}

// display data
function displayProduct(filteredProduct){
    let product_list = document.getElementById('productList');
    // console.log(filteredProduct)
    product_list.innerHTML = "";

    filteredProduct.forEach(element => {
        const productDiv = document.createElement("div");
        productDiv.setAttribute('class', 'productDiv animated animatedFadeInUp fadeInUp');
        productDiv.innerHTML=`
        <img src="${element.thumbnail}" class="image-product">
        <hr>
        <p class="titlelist"> ${element.title}</p>
        <p class="pricelist">$ ${element.price}</p>
        <p class="ratinglist"><i class="fa-solid fa-star" style="font-size: 14px;"></i> ${element.rating}</p>
        <button id="detail" onclick="openModal(${element.id})">Detail</button>`
        // console.log(element.images);

        product_list.append(productDiv);
    });
}
searchProduct();

//search product
document.getElementById('search').addEventListener('input', function(event){
    let searchInput = event.target.value.toLowerCase();
    let filteredProduct = productsData.filter(products => products.title.toLowerCase().includes(searchInput));
    return displayProduct(filteredProduct);
    // console.log(filteredProduct)
});

function productDetail(id){
    fetch('https://dummyjson.com/products/'+id)
    .then(res => res.json())
    .then(data =>{
        productsData = data
        displayProductDetail(productsData)
    })
}

function displayProductDetail(dataProductDetail){
    // console.log(dataProductDetail);
    document.getElementById("productImage").src = dataProductDetail.thumbnail;
    document.getElementById("productName").innerHTML=dataProductDetail.title; 
    document.getElementById("productPrice").innerHTML=`$ `+dataProductDetail.price; 
    document.getElementById("productDesc").innerHTML=dataProductDetail.description; 
}

// modal detail
function openModal(id) {
    productDetail(id);
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }