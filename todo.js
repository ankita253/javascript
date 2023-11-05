//alert("hellooo")
const addUserBtn = document.getElementById('addUser')     //button
const userNameTextField = document.getElementById('username')   //input
const recordsDisplay = document.getElementById('records')

let edit_id = null;

const btnText= addUserBtn.innerText

let userArray = []; //data store

//data get
let objstr = localStorage.getItem('users')
//console.log(objstr)
if (objstr != null) {
    userArray = JSON.parse(objstr)     //convert string data to object
}
console.log(userArray)

displaydata()


addUserBtn.onclick = () => {
    // alert("hello")
    const name = userNameTextField.value;     //to get data
    //update user
    if (edit_id != null) {
        userArray.splice(edit_id, 1,{
            'name': name
        })
        edit_id = null
    } else {
        userArray.push({ 'name': name });
        //console.log(UserArray);
    }
    saveData(userArray)
    userNameTextField.value="";
    addUserBtn.innerText=btnText

}

function saveData(userArray) {
    // console.log(userArray)
    let str = JSON.stringify(userArray); //convert object into srting
    localStorage.setItem('users', str);
    displaydata()
}

function displaydata() {
    //console.log(userArray)

    let data = '';
    userArray.forEach((user, i) => {
        //console.log(user);
        data += ` <tr>
        <th>${i + 1}</th>
        <td>${user.name}</td>
        <td><i class="btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo(${i})'></i> <i class="btn btn-danger text-white fa fa-trash" onclick='DeleteInfo(${i})'></i></td>
        </tr>`;
        console.log(data)
    })
    recordsDisplay.innerHTML = data;
}

function EditInfo(id) {
    //alert(i)
    edit_id = id
    userNameTextField.value = userArray[id].name;
    addUserBtn.innerText = 'Update User';
}

function DeleteInfo(id)
{
    userArray.splice(id,1);
    saveData(userArray);
}