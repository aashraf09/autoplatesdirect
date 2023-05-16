// to print the Text on Number Plates
function myFunction() {
    var x = document.getElementById("registration-number").value;
    document.getElementById("inner_content").innerHTML = x;
    document.getElementById("inner_content1").innerHTML = x;
}

// To change the display of plates e.g front only/rear only/both
function my() {
    var y = document.getElementById("plate").value;
    if(y == 'front-plates'){
        document.getElementById("registration_result1").style.display = "none";
        document.getElementById("registration_result").style.display = "inline-block";
        console.log("kuch b");
    }
    else if(y == 'rear-plates'){
        document.getElementById("registration_result").style.display = "none";
        document.getElementById("registration_result1").style.display = "inline-block";
        console.log("kuch b1");
    }
    else if(y == 'front-and-rear'){
        document.getElementById("registration_result").style.display = "inline-block";
        document.getElementById("registration_result1").style.display = "inline-block";
        console.log("kuch b1");
    }
  }

//   To add the border
  function changeBorder() {
    var design = document.getElementById("plate-border").value;
    if(design == 'no-border'){
        document.getElementById("inner_content1").style.border = "none";
        document.getElementById("inner_content").style.border = "none";
        console.log("kuch b");
    }
    else if(design == 'border-black'){
        document.getElementById("inner_content").style.border = "2px solid black";
        document.getElementById("inner_content1").style.border = "2px solid black";
        console.log("kuch b1");
    }
    else if(design == 'border-red'){
        document.getElementById("inner_content").style.border = "2px solid red";
        document.getElementById("inner_content1").style.border = "2px solid red";
        console.log("kuch b1");
    }
    else if(design == 'border-green'){
        document.getElementById("inner_content").style.border = "2px solid green";
        document.getElementById("inner_content1").style.border = "2px solid green";
        console.log("kuch b1");
    }
    else if(design == 'border-pink'){
        document.getElementById("inner_content").style.border = "2px solid pink";
        document.getElementById("inner_content1").style.border = "2px solid pink";
        console.log("kuch b1");
    }
    else if(design == 'border-blue'){
        document.getElementById("inner_content").style.border = "2px solid blue";
        document.getElementById("inner_content1").style.border = "2px solid blue";
        console.log("kuch b1");
    }
  }


// changing plate type from normal to legal and style plates
  function changeType(){
      var c = document.getElementById('plate-types').value;
    if(c == 'legal'){
        document.getElementById('inner_content').style.letterSpacing = "1px";
        document.getElementById('inner_content1').style.letterSpacing = "1px";
    }
    else if(c == 'show-plate'){
        document.getElementById('inner_content1').style.letterSpacing = "6px";
        document.getElementById('inner_content').style.letterSpacing = "6px";
    }
  }

//   To transform the text into 3d and 4d
function transform3D(){
    var a = document.getElementById('plate-styles').value;
    if(a == 'simple-plates'){
        document.getElementById('inner_content').style.fontFamily = 'Charles Wright';
        document.getElementById('inner_content1').style.fontFamily = 'Charles Wright';
        document.getElementById('inner_content').classList.remove("threeD");
        document.getElementById('inner_content1').classList.remove("threeD");
        console.log("simple");
    }
    else if(a == '3d-plates'){
        document.getElementById('inner_content').classList.add("threeD");
        document.getElementById('inner_content1').classList.add("threeD");
    }
    else if(a == '4d-plates'){
        document.getElementById('inner_content').classList.add("threeD");
        document.getElementById('inner_content1').classList.add("threeD");
    }
}

// For the price
function priceChanger(){
    var front_price = 12.99;
    var total_price = 20.98;
    var plate_display = document.getElementById("plate").value;
    var border = document.getElementById("plate-border").value;
    if (border == 'no-border' && plate_display == 'front-plates'){
        document.getElementById('prices').innerHTML = front_price;
    }
    else if(border == 'no-border' && plate_display == 'rear-plates'){
        document.getElementById('prices').innerHTML = front_price;
    }
    else if (border == 'no-border' && plate_display == 'front-and-rear'){
        document.getElementById('prices').innerHTML = total_price;
    }
    else if(border !== 'no-border' && plate_display == 'front-plates'){
        document.getElementById('prices').innerHTML = front_price + 3;
    }
    else if(border !== 'no-border' && plate-display == 'rear-plates'){
        document.getElementById('prices').innerHTML = front_price + 3;
    }
    else if(border !== 'no-border' && plate_display == 'front-and-rear'){
        document.getElementById('prices').innerHTML = total_price + 3;
    }
    
}