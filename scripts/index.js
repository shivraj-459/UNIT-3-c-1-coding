//store the products array in localstorage as "products"
var productsArr=JSON.parse(localStorage.getItem("products"))||[];

document.querySelector("#add_products").addEventListener("click",Myfun);


function Products(Type,Description,Price,Url)
{
    this.type=Type
    this.description=Description
    this.price=Price
    this.url=Url
}



function Myfun()
{
    event.preventDefault();

{
        var Type =document.querySelector("#type").value;
        var Description=document.querySelector("#desc").value;
        var Price=document.querySelector("#price").value;
        var Url=document.querySelector("#image").value;
}

        var x=new Products(Type,Description,Price,Url);
    // obj={

    //     type:products.type.value,
    //     description:products.desc.value, 
    //     price:products.price.value,
    //     url:products.image.value

    // }
       
    productsArr.push(x);

    console.log(productsArr)

    localStorage.setItem("products",JSON.stringify(productsArr))


}



document.querySelector("#show_products").addEventListener("click",ShowFn);

function ShowFn()
{
    window.location.href="inventory.html"
}

