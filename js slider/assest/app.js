// var Person={
//    ad:'kamil',
// }

// function fezail(x){
   
//    if(typeof(x)==='number'){
//     var mezahir=x.toString()
//     console.log(mezahir.length)
//    }
   
// }

// fezail(234)

// var Person={
//    ad:'kamil',
//    soyad:'memmedov',
//    yas:25
// }
// function qacay(x){

//     var property=Object.keys(x)
//     for(var i =0; i<property.length;i++){
//         if(property[i]==='ad'){
//           Person.fulname=Person.ad
//           delete Person.ad
          
//         }
//     }
//     console.log(Person)
// }


// function copu (arr){
//     for(var i=0; i<arr.length;i++){
//         for(var j =0;  j< arr.length; j++){
//             if(arr[i]>arr[j]){
//                 var number=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=number;
//             }
//         }
        
//     }
//     console.log(arr)
// }
// copu([1,23,12,556,32])

// function ehliman(x,y){
//     var num=0
//     for(var i=0;i<x.length;i++){
//         for(var j =0;j<y.length;j++){
//             if(x[i]==y[j]){
//               num++
//               break;
//             }
            
            
            
//         }
//     }
//     if(num==y.length){
//         return false;
//     }
//     else{
//         return true;
//     }
   
// }
// console.log(ehliman([2,3,4,5],[1,2,3,4,5]))


var sliderimg=[
    "slider-img.png",
    "faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg",
    "shanghai.jpg"
]
var img=document.querySelector(".galery img")
img.src=sliderimg[0];
var right=document.querySelector(".right i")
var left=document.querySelector(".left i")

var index=0; //flag
right.onclick=function(){
    
    index++
    if(index>sliderimg.length-1){
        index=0
    }
    img.src=sliderimg[index]
}
left.onclick=function(){
    index--;
    if(index<0){
        index=sliderimg.length-1;
    }
    img.src=sliderimg[index]
}
var dot_area= document.querySelector(".dots");
var iconindex=0;
for(var i=0;i<sliderimg.length;i++){
    var icon= document.createElement("i")
    icon.setAttribute("class","fa-solid fa-circle-dot icons")
    icon.setAttribute('id',`${iconindex}`)
    dot_area.appendChild(icon);
    iconindex++;
}
var icons=document.getElementsByClassName('icons')
for(var i=0;i<icons.length;i++){
    icons[i].onclick=function(){
        var id=this.id;
        img.src=sliderimg[id]
    }
}
setInterval(() => {
    index++
    if(index>sliderimg.length-1){
        index=0
    }
    img.src=sliderimg[index]
}, 3000);

