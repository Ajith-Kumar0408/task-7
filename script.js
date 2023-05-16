Let request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    Let res = JSON.parse(request.response);
    console.log(res);

//countries in asia region

let result = res.filter((ele)=>ele.region == "Asia");
console.log(result);

let result1= result.map((ele)=>ele.name);
console.log(result1);

//countries population less than 200000

let pop= res.filter((ele)=>ele.population<200000);
console.log(pop);

let pop1=pop.map((ele)=>ele.name);
console.log(pop1);

//using for-each to print name,capital and flag of countries

let pop2=pop.forEach((element) => console.log(element.name,element.capital,element.flag));
console.log(pop2);

let red = res.reduce((acc,cv) => acc+cv.population,0);
console.log(red);

//countries using dollar in currency

let arr=res.filter((ele)=>ele.currencies == "dollar");
console.log(arr);

let arr1=arr.map((ele)=>ele.name);
console.log(arr1);

};
