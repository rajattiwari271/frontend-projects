let count =0
let countElement = document.getElementById("count") ;



let increaseBtn = document.getElementById("increase");
increaseBtn.addEventListener("click", function(){
    count = count +1;
    countElement.textContent = count;

});
let decBtn = document.getElementById("decrease");
decBtn.addEventListener("click",function() 
{
    count = count-1;
    countElement.textContent = count;
})

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click",()=>{
    count =0;
    countElement.textContent =count;
})

let usr = document.getElementById("username")
let grt = document.getElementById("greetBtn")
let greeting = document.getElementById("greeting")


grt.addEventListener("click",()=>{
 if   (usr.value.trim() === ""){
  greeting.textContent = "please enter your name";}
else{
    
     greeting.textContent = "hello," + usr.value;
}
})

let clr = document.getElementById("colorBtn")

clr.addEventListener("click",()=>{
   let r =Math.floor(Math.random()*256)
      let g =Math.floor(Math.random()*256)
         let b =Math.floor(Math.random()*256)
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})


        let txt = document.getElementById("message");
        let chr = document.getElementById("charCount");
        txt.addEventListener("input",()=>
        {
            if (txt.value.length > 80) {
        txt.value = txt.value.slice(0, 80);
    }

    chr.textContent = txt.value.length;
        })


        let id = document.getElementById("todoInput")
        let add = document.getElementById("addTodo")
        let list = document.getElementById("todoList")

        add.addEventListener("click",()=>{
            let li = document.createElement("li");
            li.textContent = id.value
            list.appendChild(li)
            id.value=''
            let del = document.createElement("button")
            del.textContent = ' delete'
            li.appendChild(del)

            del.addEventListener("click",()=>{
            li.remove()
            })
        })