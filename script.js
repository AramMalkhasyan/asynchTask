// let div = document.querySelector("#result");
// //1
// let id1 = document.querySelector("#id1");
// let name1 = document.querySelector("#name1");
// let userName1 = document.querySelector("#userName1");
// let email1 = document.querySelector("#email1");
// let address1 = document.querySelector("#address1");
// //2
// let id2 = document.querySelector("#id2");
// let name2 = document.querySelector("#name2");
// let userName2 = document.querySelector("#userName2");
// let email2 = document.querySelector("#email2");
// let address2 = document.querySelector("#address2");
// //3
// let id3 = document.querySelector("#id3");
// let name3 = document.querySelector("#name3");
// let userName3 = document.querySelector("#userName3");
// let email3 = document.querySelector("#email3");
// let address3 = document.querySelector("#address3");
// //4
// let id4 = document.querySelector("#id4");
// let name4 = document.querySelector("#name4");
// let userName4 = document.querySelector("#userName4");
// let email4 = document.querySelector("#email4");
// let address4 = document.querySelector("#address4");




// fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//     return response.json()
// }).then((response) => {
//    div.innerHTML = response[2].name
// })

// fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//     return response.json();
// }).then ((response) => {
//     id1.innerHTML = response[0].id;
//     name1.innerHTML = response[0].name;
//     userName1.innerHTML = response[0].username;
//     email1.innerHTML = response[0].email;
//     address1.innerHTML = response[0].address.street + " " + response[0].address.city + " " + response[0].address.zipcode;
//     //2
//     id2.innerHTML = response[1].id;
//     name2.innerHTML = response[1].name;
//     userName2.innerHTML = response[1].username;
//     email2.innerHTML = response[1].email;
//     address2.innerHTML = response[1].address.street + " " + response[0].address.city + " " + response[0].address.zipcode;
//     //3
//     id3.innerHTML = response[2].id;
//     name3.innerHTML = response[2].name;
//     userName3.innerHTML = response[2].username;
//     email3.innerHTML = response[2].email;
//     address3.innerHTML = response[2].address.street + " " + response[0].address.city + " " + response[0].address.zipcode;
//     //4
//     id4.innerHTML = response[3].id;
//     name4.innerHTML = response[3].name;
//     userName4.innerHTML = response[3].username;
//     email4.innerHTML = response[3].email;
//     address4.innerHTML = response[3].address.street + " " + response[0].address.city + " " + response[0].address.zipcode;

// })
//corect---------------------------------------------------------------------------------------------------------------
/*
let myUsers = null;
const button = document.querySelector("#button");
const table = document.querySelector("#table");
let div = document.querySelector("#result");

async function call() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  myUsers = users;
};

button.onclick = async () => {
  await call();
  const table = document.createElement("table");
  table.setAttribute("class", "table");
  div.appendChild(table);
  const header = document.createElement("tr"); 
  header.setAttribute("class", "table");
  table.appendChild(header);
  const keys = Object.keys(myUsers[0]);
  for(let i = 0; i < keys.length; i++){
    const headerRow = document.createElement("td");
    headerRow.setAttribute("class", "table");
    header.appendChild(headerRow);
    headerRow.innerHTML = keys[i];
  };
  for(let j = 0; j < myUsers.length; j++){
    const innerCal = document.createElement("tr");
    table.appendChild(innerCal);
    innerCal.setAttribute("class", "table");
    const values = Object.values(myUsers[j]);
    for(let k = 0; k < values.length; k++){
      const innerRow = document.createElement("td");
      innerCal.appendChild(innerRow);
      innerRow.setAttribute("class", "table");
      innerRow.innerHTML = values[k];
      if (typeof values[k] == "object"){
        const innerValues = Object.values(values[k]);
        let temp = "";
        for(let l = 0; l <innerValues.length - 1; l++){
          temp += innerValues[l];
        }
        innerRow.innerHTML = temp;
      };
    };
  };
}

*/
//--------------------------------------------------------------------------------------------------------------------
// recoursive method (correct)



let myUsers = null;
const button = document.querySelector("#button");
const div = document.querySelector("#result");


async function call(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  myUsers = users; 
}


button.onclick = async () => {
  await call(); 
  const table = document.createElement("table");
  table.setAttribute("class", "table");
  div.appendChild(table); 
  const headerTr = document.createElement("tr");
  headerTr.setAttribute("class", "table");
  table.appendChild(headerTr);
  const keys = Object.keys(myUsers[0]);
  for(let i = 0; i < keys.length; i++){
    const headerTd = document.createElement("td");
    headerTd.setAttribute("class", "table");
    headerTr.appendChild(headerTd);
    headerTd.innerHTML = keys[i];
  }
  let myStr = "";
  function returningAllValues(obj){
    let myArr = Object.values(obj);
    for(let i = 0; i < myArr.length; i++){
      if (typeof myArr[i] == "object") {
        let anotherObj = myArr[i];
        returningAllValues(anotherObj);
      }   else {
      myStr += myArr[i] + " ";
      }
    } 
    return myStr;
  }

  
  
  function innerTable(object){
    for(let j = 0; j < keys.length; j++){
      const innerTr = document.createElement("tr");
      innerTr.setAttribute("class", "table");
      table.appendChild(innerTr);
      const values = Object.values(object[j]);
      for(let k = 0; k < values.length; k++){
        const innerTd = document.createElement("td");
        innerTd.setAttribute("class", "table");
        innerTr.appendChild(innerTd);
        innerTd.innerHTML = values[k];
        if (typeof values[k] == "object"){
          myStr = "";
          innerTd.innerHTML = returningAllValues(values[k]);
        }
      }
    }
  }
  innerTable(myUsers);
}













