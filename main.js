var pict_arr= ["Grandfather.jpg","Grandmother.jpg","Father.jpg","Mother.jpg","Boy.jpg","Girl.png"]
var names= ["Ram Singh Mahail","Nirmala Mahail","Anand Prakash Mahail","Neelam Mahail","Lovik Mahail","Vatsalya Mahail"]
var i = 0
function update() {
 document.getElementById("images").src=pict_arr[i];
 document.getElementById("names").innerHTML=names[i];
 i++;
 if (i>5){
     i=0;
 }
}