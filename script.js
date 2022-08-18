let hi = confirm("Welcome to LCU");

// Enter username and Password
let name = prompt("Enter the name",'');
alert (name ?? undefined)
// Using Nullish 
let age = prompt("Enter the age",'');

// Checking the age 
if (age > 18){
    alert("Access Granted" )
}else{
    alert(" Access Denied")
    sys.exit()
}

// Enter the password
let password = prompt("Enter password",'');
let confirmPassword = prompt("Enter password again",'');

//Checking password
if (password == confirmPassword ){
    alert ('Password enter successfully')
}else{
    alert('Password Mismatched');
    sys.exit()
}
// creating function for employee details
function employeedetails(){
    confirm('USER'+""+name+'LOGIN SUCCESSFULLY');
}
employeedetails();

let movieYear = prompt('When did managaram released','')

switch(movieYear){
    case "2017":
        alert('Correct');
        break;
    default:
        alert('Incorrect'); 
}

let MovieName = prompt('Who acted in the movie kaithi','')

switch(secondMovieName){
    case "karthi":
        alert('Correct');
        break;
    default:
        alert ('Incorrect')
}

const answer = [
"2017",
"karthi"   
 ];

  for(let i=0; i<answer.length; i++) {
        document.write("<li> " + answer[i]);
     }
 

