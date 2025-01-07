let cartDeailsObj = JSON.parse(localStorage.getItem("cartDetailsObj")) ?? [];
let cartCount = cartDeailsObj?.length || 0;

//setting the local storage data
localStorage.setItem("cartDetailsObj", JSON.stringify(cartDeailsObj));

console.log(document.querySelectorAll('buttons'));

document.addEventListener("DOMContentLoaded", function () {
  const page2ProductDetails = [
    {
      productId: "blueShrtMen",
      imgURL: "./dharsh_pro_img/blueshirt.png",
      productName: "BLUE SHIRT",
      productPrice: "RS.2000",
    },

    {
      productId: "whiteShrtMen",
      imgURL: "./dharsh_pro_img/pngegg (2).png",
      productName: "WHITE SHIRT",
      productPrice: "RS.3000",
    },
    {
      productId: "blackShrtMen",
      imgURL: "./dharsh_pro_img/pngegg (3).png",
      productName: "BLACK SHIRT",
      productPrice: "RS. 2500",
    },
    {
      productId: "GREENShrtMen",
      imgURL: "./dharsh_pro_img/pngegg (4).png",
      productName: "GREEN SHIRT",
      productPrice: "RS. 2000",
    },
    {
      productId: "blueShrtMen",
      imgURL: "./dharsh_pro_img/pngegg (1).png",
      productName: "BLUE FORMAL SHIRT",
      productPrice: "RS. 3500",
    },
    {
      productId: "bluefrmlShrtMen",
      imgURL: "./dharsh_pro_img/pngegg (5).png",
      productName: "BLUE FORMAL SHIRT",
      productPrice: "RS. 4000",
    },
  ];
  const page3ProductDetails = [
    {
      productId: "blackpant",
      imgURL: "./dharsh_pro_img/pngegg (10).png",
      productName: "BLACK PANT",
      productPrice: "RS.5000",
    },

    {
      productId: "bluepant",
      imgURL: "./dharsh_pro_img/pngegg (9).png",
      productName: "BLUE JEANS",
      productPrice: "RS.4500",
    },
    {
      productId: "blackpant",
      imgURL: "./dharsh_pro_img/pngegg (8).png",
      productName: "BLUE JEAN",
      productPrice: "RS.5000",
    },
    {
      productId: "bluepant",
      imgURL: "./dharsh_pro_img/pngegg (7).png",
      productName: "DARK BLUE JEAN",
      productPrice: "RS.3500",
    },
    {
      productId: "sandalpant",
      imgURL: "./dharsh_pro_img/pngegg (6).png",
      productName: "SANDAL PANT",
      productPrice: "RS.5000",
    },
  ];
  const page4ProductDetails = [
    {
      productId:"bluepochampaly saree" ,
      imgURL:"./dharsh_pro_img/pngegg (13).png" ,
      productName:"BLUE POCHAMPALI SAREE" ,
      productPrice: "RS.4000",
    },
    {
      productId:"DESIGNERSAREE" ,
      imgURL:"./dharsh_pro_img/pngegg (17).png" ,
      productName:"DESIGNER SAREE" ,
      productPrice: "RS.2500",
    },

    {
      productId:"RED SAREE" ,
      imgURL:"./dharsh_pro_img/pngegg (16).png" ,
      productName:"RED SAREE" ,
      productPrice: "RS.3000",
    },

    {
      productId:"BLUE DESIGNER SAREE" ,
      imgURL:"./dharsh_pro_img/pngegg (15).png" ,
      productName:"BLUE DESIGNER SAREE" ,
      productPrice: "RS.4000",
    },

    {
      productId:"pink saree",
      imgURL:"./dharsh_pro_img/pngegg (14).png" ,
      productName:"PINK SAREE" ,
      productPrice: "RS.2500",
    },
    {
      productId:"black saree" ,
      imgURL:"./dharsh_pro_img/pngegg (11).png" ,
      productName:"BLACK SAREE" ,
      productPrice: "RS.2000",
    },
  ];
  const page5ProductDetails = [
    {
      productId:"RED SALWAR",
      imgURL:"./dharsh_pro_img/pngegg (21).png" ,
      productName:"RED SALWAR",
      productPrice: "RS.3000",
    },
      {
        productId:"YELLOW SALWAR" ,
        imgURL:"./dharsh_pro_img/pngegg (18).png" ,
        productName:"YELLOW SALWAR" ,
        productPrice: "RS.4000",
      },
      {
        productId:"YELLOW SALWAR" ,
        imgURL:"./dharsh_pro_img/pngegg (19).png" ,
        productName: "YELLOW SALWAR",
        productPrice: "RS.4500",
      },

      {
        productId:"PINK WITH SKYBLUE" ,
        imgURL:"./dharsh_pro_img/pngegg (23).pnG" ,
        productName:"SKYBLUE SALWAR" ,
        productPrice: "RS.4000",
      },

      {
        productId:"PINK SALWAR" ,
        imgURL: "./dharsh_pro_img/pngegg (22).png",
        productName:"PINK SALWAR" ,
        productPrice: "RS.1000",
      },
    ];
    const page6ProductDetails = [
      {
        productId:"PINK AND BLACK PANT",
        imgURL:"./dharsh_pro_img/pngegg (24).png" ,
        productName:"PINK AND BLACK PANT",
        productPrice: "RS.1 300",
      },
      {
        productId:"PINK FROCK",
        imgURL:"./dharsh_pro_img/pngegg (25).png" ,
        productName:"PINK FROCK",
        productPrice: "RS.700",
      },
      {
        productId:"BABY PINK FROCK",
        imgURL:"./dharsh_pro_img/pngegg (26).png" ,
        productName:"BABY PINK FROCK",
        productPrice: "RS.800",
      },
      {
        productId:"ROMPERS",
        imgURL:"./dharsh_pro_img/pngegg (27).png" ,
        productName:"ROMPERS",
        productPrice: "RS.1000",
      },
      {
        productId:"PINK BABY SET",
        imgURL:"./dharsh_pro_img/pngegg (29).png" ,
        productName:"PINK BABY SET",
        productPrice: "RS.2000",
      },
    ];
    const furnitureProductDetails = [
      {
        productId:"furniture set",
        imgURL:"./dharsh_pro_img/pngegg (37).png" ,
        productName:"FURNITURE SET",
        productPrice: "RS.85,300",
      },
      {
        productId:"BED AND COT",
        imgURL:"./dharsh_pro_img/pngegg (38).png" ,
        productName:"BED AND COT",
        productPrice: "RS.130000",
      },

      {
        productId:"bed and cot",
        imgURL:"./dharsh_pro_img/pngegg (39).png" ,
        productName:"BED AND COT",
        productPrice: "RS.90000",
      },

      {
        productId:"CHAIR",
        imgURL:"./dharsh_pro_img/pngegg (40).png" ,
        productName:"CHAIR",
        productPrice: "RS.13000",
      },

      {
        productId:"PREMIUM BED",
        imgURL:"./dharsh_pro_img/pngegg (41).png" ,
        productName:"PREMIUM BED",
        productPrice: "RS.300000",
      },
    ];
    const BEAUTYProductDetails = [
      {
        productId:"PINK LIPSTICK",
        imgURL:"./dharsh_pro_img/pngegg (30).png" ,
        productName:"PINK LIPSTICK",
        productPrice: "RS.1500",
      },
      {
        productId:"SET",
        imgURL:"./dharsh_pro_img/pngegg (31).png" ,
        productName:"LIPSTICK SET",
        productPrice: "RS.2900",
      },
      {
        productId:"RED MAC",
        imgURL:"./dharsh_pro_img/pngegg (32).png" ,
        productName:"RED MAC LIPSTICK",
        productPrice: "RS.2000",
      },
      {
        productId:"PACK OF 3",
        imgURL:"./dharsh_pro_img/pngegg (33).png" ,
        productName:"PACK OF 3 LIPSTICK",
        productPrice: "RS.3000",
      },
      {
        productId:"RED LIPSTICK",
        imgURL:"./dharsh_pro_img/pngegg (34).png" ,
        productName:"RED LIPSTICK",
        productPrice: "RS.4000",
      },
    ];



  createProducts(page2ProductDetails, "#page-2-product-container");

  createProducts(page3ProductDetails, "#page3-product-container");

  createProducts(page4ProductDetails, "#page4-product-container");

  createProducts(page5ProductDetails, "#page5-product-container");

  createProducts(page6ProductDetails, "#page6-product-container");

  createProducts(furnitureProductDetails, "#furniture-product-container");

  createProducts(BEAUTYProductDetails, "#BEAUTY-product-container");






  document.querySelector(".cart-count").innerHTML = cartCount;

});

function addToCart(productDetails) {
  let cartDeailsObj = localStorage.getItem("cartDetailsObj");

  cartDeailsObj = JSON.parse(cartDeailsObj);

//   console.log(cartDeailsObj);

  cartDeailsObj.push(productDetails);

  cartCount++;

  localStorage.setItem("cartDetailsObj", JSON.stringify(cartDeailsObj));

  document.querySelector(".cart-count").innerHTML = cartCount;
}

// To create product cards
function createProducts(productDetails, containerID) {
  if (document.querySelector(containerID) !== null) {
    let finalProductHTML = "";

    //for of loop - to iterate over arrays
    for (const item of productDetails) {
      const productHTML = `<div class="product">
            <img src="${item.imgURL}" alt="Blue Shirt">
            <div class="product-description">${item.productName}</div>
            <div class="product-price">${item.productPrice}</div>
            <button class="add-to-cart" data-item-info='${JSON.stringify(item)}'>ADD TO CART</button>
        </div>`;

      finalProductHTML += productHTML;
    }

    // console.log(finalProductHTML);

    const element = document.querySelector(containerID);

    element.insertAdjacentHTML("beforeend", finalProductHTML);
   // element.innerHTML=  finalProductHTML;

    const buttons = document.querySelector(containerID).querySelectorAll(".add-to-cart");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const productInfo = event.target.getAttribute("data-item-info");
            addToCart(productInfo);
        });
      });
    }
  }
//const imageIcon = document.getElementById('imageIcon');

// Add a click event listener
//imageIcon.addEventListener('click', () => {
// Call the function when the image is clicked
// handleImageClick();
//});

// Define the function to execute on click

function handleImageClick() {
  alert("Image icon clicked!");
 // console.log("The image icon was pressed.");
  // Add any additional logic here
}
