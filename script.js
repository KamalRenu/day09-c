var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload = function(){
    var a = JSON.parse(request.response);
    console.log(a);
    var out = a.forEach((a)=>{console.log(a.name+'-'+a.capital+'-'+a.flag)});
}