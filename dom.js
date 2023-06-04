function incribtn (){
    var quantite = document.getElementById("id1");
    var nb= quantite.innerHTML;
    ++nb;
    document.getElementById('id1').innerHTML=nb;


    var pr=document.getElementById('price');
    var pricee=pr.innerHTML;
    var fprice= Number(pricee)+2.99;
    document.getElementById('price').innerHTML=fprice.toFixed(2);

};
function incribtn2 (){
    var quantite = document.getElementById("id2");
    var nb= quantite.innerHTML;
    ++nb;
    document.getElementById('id2').innerHTML=nb;


    var pr=document.getElementById('price2');
    var pricee=pr.innerHTML;
    var fprice= Number(pricee)+3.19;
    document.getElementById('price2').innerHTML=fprice.toFixed(2);

};
 function decrincribtn(){
    var quantite = document.getElementById("id1");
    var nb= quantite.innerHTML;
    nb--;

    if (nb<1){
        return false;
        }
    document.getElementById('id1').innerHTML=nb;


    var pr=document.getElementById('price');
    var pricee=pr.innerHTML;
    var fprice= Number(pricee)-2.99;
    if (fprice<2.99){
return false;}


    document.getElementById('price').innerHTML=fprice.toFixed(2);

 };
 function decrincribtn2(){
    var quantite = document.getElementById("id2");
    var nb= quantite.innerHTML;
    --nb;
    if (nb<1){
        return false;
        }
    document.getElementById('id2').innerHTML=nb;


    var pr=document.getElementById('price2');
    var pricee=pr.innerHTML;
    var fprice= Number(pricee)-3.19;
    if (fprice<3.19){
        return false;}
    document.getElementById('price2').innerHTML=fprice.toFixed(2);

 };    


function sommetotal (){
var somme1=document.getElementById('total-amount').innerHTML;
var x=document.getElementById('price2').innerHTML;
var y=document.getElementById('price').innerHTML;
total= Number(x)+Number(y);
document.getElementById('total-amount').innerHTML=total.toFixed(2);
var it=document.getElementById('nitems').innerHTML;
var z= document.getElementById('id1').innerHTML;
var z2= document.getElementById('id2').innerHTML;
var fit=Number(z)+Number(z2);
document.getElementById('nitems').innerHTML=fit;

}
function removeall(){
var ai=document.getElementById('allitems');
var gr=document.getElementById('grapes');
var ap=document.getElementById('apple');

ai.removeChild(grapes);
ai.removeChild(apple);
document.getElementById('total-amount').innerHTML=0.00;
document.getElementById('nitems').innerHTML=0; 

}
function removeItem(itemId) {
    const item = document.getElementById(itemId);
    if (item) {
      item.remove();
    }
  }
  