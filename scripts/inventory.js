var productsArr=JSON.parse(localStorage.getItem("products"));

display(productsArr);

function display(productsArr)
{
    productsArr.forEach(function(elem,i)
    {
        var card=document.createElement("div");
   
        var image=document.createElement("img");
        image.src=elem.url;

        var H2=document.createElement("h2");
        H2.innerText=elem.description;

        var sub=document.createElement("div");
        sub.setAttribute("id","sub")

        var p1=document.createElement("p")
        p1.innerText=elem.type;

        var p2=document.createElement("p");
        p2.innerText="₹"+" "+elem.price;

        var remove=document.createElement("button");
        remove.innerText="Remove";
        remove.setAttribute("id","remove_product")
        remove.addEventListener("click",function()
        {
            RemoveFn(elem,i)
        })
       
        sub.append(p1,p2);
        card.append(image,H2,sub,remove)
        document.querySelector("#all_products").append(card)
    })
  

}


function RemoveFn(elem,i)
{
    productsArr.splice(i,1);
    console.log(productsArr)
    localStorage.setItem("products",JSON.stringify(productsArr))
    window.location.reload();

}


document.querySelector("#add_more_products").addEventListener("click",moreFn)


function moreFn()
{
    window.location.href="index.html"
}