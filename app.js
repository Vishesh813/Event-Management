
var etext="An event is created with event id = ";
var department,status,raised,d,c;


function checkEventId(){
    let id=document.getElementById("eventId").value;
    if(id=="")
    document.getElementById("err1").innerHTML="Please fill id";
    else{
    etext+=id;   
    checkDepartment();
   }
}


function checkDepartment(){
    var options1=document.getElementsByTagName("option");
      for(let i=0;i<options1.length;i++){
      if(options1[i].selected==true) { 
      department=options1[i].value; 
      break;
    }
  }
    if(department=="") document.getElementById("err2").innerHTML="Please choose department";
    else{
      checkStatus();
    }
 
}

function checkStatus(){
    var st=document.getElementById("status");
    status=st.options[st.selectedIndex].value;
    if(status=="")
    document.getElementById("err3").innerHTML="Please choose status";
    else
    checkDescription();

}

function checkDescription(){
  d=document.getElementById("description").value;
  if(d=="") document.getElementById("err4").innerHTML="Please fill";
  else
  checkRaisedBy();
}
function checkRaisedBy(){
   raised=document.getElementById("raisedBy").value;
   if(raised=="") document.getElementById("err5").innerHTML="Please fill";
   else
   checkContact();
}

function checkContact(){
  c=document.getElementById("contactPhone").value;
  if(c=="") document.getElementById("err6").innerHTML="Please fill";
  else
  display();
}



function validateCreation(){
checkEventId();
}

function display(){
  var text=etext+
  "<br><br>"
  +"Department:"+department+"<br>"
  +"Status:"+status+"<br>"+
  "Raised By:"+raised+"<br><br>"
  +"<a href='index.html'><button id='close'>Close</button></a>"
  document.getElementById("resultDiv").innerHTML=text;
}