
  const box = document.getElementById('mybox');

const btn = document.getElementById('checkout');

btn.addEventListener('click', function handleClick() {
if (box.style.display === 'none') {
  box.style.display = 'block';

  btn.textContent = 'Cancel';
} else {
  box.style.display = 'none';

  btn.textContent = 'Checkout';
}
});



function copyText() {
  
    /* Copy text into clipboard */
    navigator.clipboard.writeText
        ("3JU4TSp51GeVRdMRwJViLKKx7yGk1ARAjF");
}


    
function showHideDiv(ele) {
    var srcElement = document.getElementById(ele);
    if (srcElement != null) {
        if (srcElement.style.display == "block") {
            srcElement.style.display = 'none';
        }
        else {
            srcElement.style.display = 'block';
        }
        return false;
    }
}



function showOrHideDiv() {
var srcElement = document.getElementById("showOrHide");
if (srcElement != null) {
        if (srcElement.style.display == "block") {
            srcElement.style.display = 'none';
        }
        else {
            srcElement.style.display = 'block';
        }
        return false;
    }
}



function myFunction() {
var x = document.getElementById("myDIV");
if (window.getComputedStyle(x).display === "none") {
x.style.display = "block";
}
}





function openTab(tabName) {
var i, x;
x = document.getElementsByClassName("containerTab");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
document.getElementById(tabName).style.display = "block";
}



function htmlEncode(value) {  
    return $('<div/>').text(value)  
        .html();  
    }  
    $(function () {  
    $('#checkout').click(function () {        
        let finalURL =  
    'https://chart.googleapis.com/chart?cht=qr&chl=' +  
        htmlEncode($('#clipboardExample1').val()) +  
        '&chs=160x160&chld=L|0'   
        $('.qr-code').attr('src', finalURL);  
    });  
    }); 



    let bd=document.querySelector('.butss');
    let img=document.querySelector('.downloadimage');
    bd.addEventListener('click',()=>{
        let impath=img.getAttribute('src');
        let fn=getFileName(impath);
        saveAs(impath,fn);
    });
    function getFileName(str){
        return str.substring(str.lastIndexOf('/')+1);
    }

    function greet() {
        document.getElementById('result1').innerHTML = 'Sorry! ! This feature is not allowed in your country, please pay with Bitcoin';
        return false;
    }
    
    document.getElementById('go1').addEventListener('click', greet); 

    
 
      function copyTg() {
        document.getElementById("result1").style.display = "block";
      }










