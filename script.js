/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.filter(user=>user.profession==="developer").
  map(user=>console.log(`id : ${user.id}, Name : ${user.name}, Age : ${user.age}, Profession : ${user.profession}`));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(user=>{
    if(user.profession==="developer"){
      console.log(`id : ${user.id}, Name : ${user.name}, Age : ${user.age}, Profession : ${user.profession}`);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  const newEmployee={id : 4, name : "susan", age : 28, profession : "doctor"};
  arr.push(newEmployee);
  arr.forEach(user=>{
    console.log(`id : ${user.id}, Name : ${user.name}, Age : ${user.age}, Profession : ${user.profession}`);
  })
  
}

function removeAdmin() {
  //Write your code here, just console.log
  const filterarr=arr.filter(user=>user.profession!=="admin");
  filterarr.forEach(user=>console.log(`id : ${user.id}, Name : ${user.name}, Age : ${user.age}, Profession : ${user.profession}`));
}

function concatenateArray() {
  //Write your code here, just console.log
  const newWorker=[
    {id:5, name:"shivam", age:29, profession:"CRM"},
    {id:6, name:"sonu", age:39, profession:"Police"},
    {id:7, name:"bhumo", age:25, profession:"Backend developer"},
];

  const combinedArr=arr.concat(newWorker);
  combinedArr.forEach(user=>console.log(`id : ${user.id}, Name : ${user.name}, Age : ${user.age}, Profession : ${user.profession}`));

}
