<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        body {
            background-color: antiquewhite;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: inline;
            flex-direction: row;
            height: 100vh; /* Ensure the body takes up the full viewport height */
            justify-content: space-between; /* Pushes the content and button apart */
        }

        h1 {
            text-align: center;
            color: black;
            padding: 20px 0;
        }

        .product-container {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 60px;
            flex-wrap: wrap;
            flex-grow: 1; /* Makes the content section grow to take up space */
        }

        .product {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
            transition: transform 0.3s ease-in-out;
        }

        .product img {
            height: 250px;
            width: 250px;
            object-fit: cover;
            border-radius: 8px;
        }

        .product-description {
            font-style: italic;
            margin-top: 10px;
        }

        .product-price {
            font-weight: bold;
            font-size: 18px;
            color: green;
            margin-top: 10px;
        }

        .product button {
            background-color: #28a745; /* Green color */
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 10px;
            transition: background-color 0.3s;
        }

        .product button:hover {
            background-color: #218838; /* Darker green on hover */
        }

        .product:hover {
            transform: scale(1.05); /* Slightly enlarge product on hover */
        }

        .product1 {
            text-align: center; /* Center align the button */
            margin-bottom: 20px; /* Add space from bottom */
        }

        .product1 button {
            background-color: #218838;
            border: none;
            color: white;
            cursor: pointer;
            padding: 15px 30px;
            font-size: 16px;
            transition-duration: 0.4s;
        }

        .product1 button:hover {
            background-color: aqua;
        }
    </style>
    <title>MYNTRA</title>
</head>
<body>
    <h1>BABY CLOTHING</h1>
    <div class="product-container">
        <div class="product">
            <img src="C:\Users\priya\Downloads\pngegg (29).png" alt="pink baby">
            <div class="product-description">PINK BABY CLOTH</div>
            <div class="product-price">RS.600</div>
            <button onclick="addtocart()">ADD TO CART</button>
        </div>
        <div class="product">
            <img src="C:\Users\priya\Downloads\pngegg (28).png"alt="pant ND SHIRT">
            <div class="product-description">BOY BABY DRESS</div>
            <div class="product-price">RS.1000</div>
            <button onclick="addtocart()">ADD TO CART</button>
        </div>
        <div class="product">
            <img src="C:\Users\priya\Downloads\pngegg (27).png"alt="ROMBERS">
            <div class="product-description">ROMPERS</div>
            <div class="product-price">RS.1400</div>
            <button onclick="addtocart()">ADD TO CART</button>
        </div>
        <div class="product">
            <img src="C:\Users\priya\Downloads\pngegg (26).png"alt="GOWN">
            <div class="product-description">FROCK</div>
            <div class="product-price">RS.600</div>
            <button onclick="addtocart()">ADD TO CART</button>
        </div>
        <div class="product">
            <img src="C:\Users\priya\Downloads\pngegg (25).png" alt="GOWN">
            <div class="product-description">FROCK</div>
            <div class="product-price">RS.650</div>
            <button onclick="addtocart()">ADD TO CART</button>
        </div>
        <div class="product">
            <img src="C:\Users\priya\Downloads\pngegg (24).png" alt="GOWN PANT">
            <div class="product-description">FROCK &PANT</div>
            <div class="product-price">RS.750</div>
            <button onclick="addtocart()">ADD TO CART</button>
        </div>

    </div>

    <script>
        function addtocart() {
            alert("Added to cart");
        }
        
    </script>

    <!-- Move the "Home" button to the bottom center of the page -->
    <div class="product1">
        <button type="button" onclick="window.location.href='page5.html'">PREVIOUS</button>
        <button type="button" onclick="window.location.href='page11.html'">HOME</button>
        <button type="button" onclick="window.location.href='BEAUTY.html'">NEXT</button>"
        
        
    
    </div>
</body>
</html>