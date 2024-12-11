const firebaseConfig = {
  apiKey: "AIzaSyDj4X1MNrBduNGbsBKZ_3iFb6_iiaeodPI",
  authDomain: "simpleform-d84cd.firebaseapp.com",
  databaseURL: "https://simpleform-d84cd-default-rtdb.firebaseio.com",
  projectId: "simpleform-d84cd",
  storageBucket: "simpleform-d84cd.firebasestorage.app",
  messagingSenderId: "1049765293150",
  appId: "1:1049765293150:web:36cf1d85a1ce0e52d258cf"
};

firebase.initializeApp(firebaseConfig);

var formdb=firebase.database().ref("simpleform")

document.getElementById("contactform").addEventListener("submit" ,submitform);

function submitform(e){
  e.preventDefault();

  var name=getElementVal("name");
  var emailid=getElementVal("emailid");
  console.log(name,emailid)


  saveMessages(name,emailid);

}

const saveMessages=(name,emailid)=>{
  var newcontactform= formdb.push()

  newcontactform.set({
    name: name,
    emailid:emailid

  })
};

const getElementVal=(id)=> {
  return document.getElementById(id).value;
}