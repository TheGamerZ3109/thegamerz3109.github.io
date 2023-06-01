// not origionally written by me, just editted and commented

const version="Script Version: '1.8.1.4";

console.log(version);

function m() { // makes a link for us to host this webpage
  var r='',c='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  for ( var i = 0; i < 5; i++ ) {
    r += c.charAt(Math.floor(Math.random() * 36));
 }
 return r;
}

if (location.host != "chrome.google.com" || !location.pathname.startsWith("/webstore")) {
  location.href = "https://chrome.google.com/webstore" + m();
  //sets the website/host of the html thingy, could be done by hosting it on device but its more difficult - probably
}


// what is this? who is this? where is this? greatest question of science
document.head.innerHTML = `
<style>
tr:nth-child(even){background-color: #f2f2f2;}
tr:hover {background-color: #ddd;}
td, th {
border: 1px solid #ddd;
padding: 8px;
font-family: Arial, Helvetica, sans-serif;
border-collapse: collapse;
}
.switch {
position: relative;
display: inline-block;
width: 40px;
height: 23px;
}
.switch input {
opacity: 0;
width: 0;
height: 0;
}
.slider {
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: .2s;
transition: .2s;
}
.slider:before {
position: absolute;
content: "";
height: 17px;
width: 17px;
left: 3px;
bottom: 3px;
background-color: white;
-webkit-transition: .2s;
transition: .2s;
}
input:checked + .slider {
background-color: #2196F3;
}
input:focus + .slider {
box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
-webkit-transform: translateX(17px);
-ms-transform: translateX(17px);
transform: translateX(17px);
}
/* Rounded sliders */
.slider.round {
border-radius: 23px;
}
.slider.round:before {
border-radius: 50%;
}
</style>
`;
document.body = document.createElement("body");

document.toggleEnabled = function(id){ // actually changes the extension enabling thing
  var clickedRow = document.getElementById(id);
  chrome.management.setEnabled(id, clickedRow.children[0].children[0].children[0].checked);

  alert("Toggled Enable - " + id)
};

document.search = function(){
  alert("Connected" + document.getElementById("verycoolID").value)
}

//toggleInstalled has been removed because I think its more secured and so far what I can tell is that it fires the pop up and waits for a response,
//when its an admin forced installed extension it either doesnt do the pop up or shuts it down immiedeitly, a way to get around this would be
//somehow intercepting the pop-up and auto answering it before chrome/admin features does it

// document.toggleInstalled = function(id){ // actually changes the extension enabling thing
//   var clickedRow = document.getElementById(id);
//   chrome.management.uninstall(id);

//   alert("Uninstalled - " + id)
// };

// idk lol, I think it makes the UI accessibly or something
document.upperBodyData = "<p>"
document.upperBodyData += "<input type='button' " + " onclick=\"search()\"</br>"
document.upperBodyData += "<input id='verycoolID' name='txtQuestion' type='text'/>"
document.upperBodyData += "</p>"

document.newBodyData = "<table>"

chrome.management.getAll(function(){ //gets all the extensions

  arguments[0].forEach(function(extension){ //loop to get each extension

    console.log(extension.permissions); // idk lol could be usful

    /*
    extensions arguments page - for later reference
    description: string
    enabled: bool
    homepageUrl: string
    hostPermissions: array/list 
    icons: array
    id: string
    installType: string
    isApp: bool
    mayDisable: bool
    name: string
    offlineEnabled: bool
    optionsUrl: string
    permissions: array
    shortName: string
    type: string
    updateUrl: string
    version: string
    */

      document.newBodyData += "<tr id="+extension.id+">"
      //document.upperBodyData += "<tr id="+extension.id+">"
      /*
      if ("icons" in extension) {
          document.newBodyData += "<td><img src='"+extension.icons[0]['url']+"'/></td>"
      }    
      */
      document.newBodyData += "<td><label class='switch'><input type='checkbox' " + (extension.enabled ? "checked" : "") + " onclick=\"toggleEnabled('"+extension.id+"')\"><span class='slider round'></span></label></td>"
      //document.newBodyData += "<td><label class='switch'><input type='checkbox' " + (extension.enabled ? "checked" : "") + " onclick=\"toggleInstalled('"+extension.id+"')\"><span class='slider round'></span></label></td>"

      //first switch does enabled
      //second switch does installed

      //document.newBodyData += "<td><label class='button'><input type='button' " + (extension.enabled ? "checked" : "") + " onclick=\"toggleInstalled('"+extension.id+"')\"</td>"

      document.newBodyData += "<td> extension name: '"+extension.name+"'</td>"
      document.newBodyData += "<td> extension id: '"+extension.id+"'</td>"
      document.newBodyData += "<td> extension installType: '"+extension.installType+"'</td>"
      document.newBodyData += "<td> extension version: '"+extension.version+"'</td>"
      document.newBodyData += "<td> extension isApp: '"+extension.isApp+"'</td>"
      document.newBodyData += "<td> extension mayDisable: '"+extension.mayDisable+"'</td>"

      // try{
      //   document.newBodyData += "<td> children 0: '"+extension.children[0]+"'</td>"
      // }catch{
      //   document.newBodyData += "<td> children 0: Wrong </td>"
      // }

      

      document.newBodyData += "<td>"+version+"</td>"

      // adds the name, id, type, etc, and switch to the UI

      document.newBodyData += "</tr>"
  });
  document.newBodyData += "</table>"
 // document.body_2 += "</p>"
  document.body.innerHTML += document.newBodyData;
  document.body.innerHTML += document.upperBodyData;
})
