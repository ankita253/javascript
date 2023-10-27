//alert("hellooo")
const addUserBtn = document.getElementById('addUser')
const userNameTextField = document.getElementById('username')

let userArray = []; //data store

addUserBtn.onclick = ()=>{
    // alert("hello")
    const name= userNameTextField.value;
    // alert(name)
    userArray.push({'name': name});
 //   console.log(userArray)
     saveData(userArray)
}

function saveData(userArray)
{
    // console.log(userArray)
    let str = JSON.stringify(userArray); //convert object into srting
    localStorage.setItem('users',str);


}