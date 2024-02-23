function generateProductHTML(productName, productPrice) {
    return  `<div>
                <p>${productName}</p>
                <p>${productPrice}$</p>
            </div>`;
}


const productName = "computer";
const productPrice = 1000;
const productHTML = generateProductHTML(productName, productPrice);
console.log(productHTML);
