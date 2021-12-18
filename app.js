console.log('this is a app for notes')

//show the pre storage notes
showItems();


//if users add the node add it to the localstorage
let addBtn=document.getElementById("createBtn");
addBtn.addEventListener("click",function(e){

    let txt=document.getElementById('txtArea')
    let notes= localStorage.getItem("notes");
    if(notes == null)
    {
        notesarr= [];
    }
    else
    {
        notesarr=JSON.parse(notes) ;
    }
    notesarr.push(txt.value)
    localStorage.setItem('notes',JSON.stringify(notesarr));
    txt.value="";
    console.log(notesarr)
    
    showItems();
})

// txt.addEventListener('blur',function(){
//     let txtInTextArea=txt.innerText;
//     localStorage.setItem('txt',txtInTextArea)
// })

//fun to show notes from localstorage
function showItems(){
    let notes= localStorage.getItem("notes");
    if(notes == null)
    {
        notesarr= [];
    }
    else
    {
        notesarr=JSON.parse(notes) ;
    }
    let html="";
    notesarr.forEach( function(element,index){
        html+= ` <div id="noteCard" class="noteCard my-2 mx-2" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body" id="cards">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete note</button>
        </div>
      </div>
           `        });

let yoursNotes= document.getElementById("notes");


    if(notesarr.length!=0)
    {
        yoursNotes.innerHTML=html;
    }
    else{
        yoursNotes.innerHTML=`<h3>Nothing to show!! Use Add Note to <B>Add</B> something </h3>`
    }


        }

// for deletion of notes

function deleteNode(index)
{
console.log('im deleting',index)
let notes= localStorage.getItem("notes");
if(notes == null)
{
    notesarr= [];
}
else
{
    notesarr=JSON.parse(notes) ;
}
notesarr.splice(index,1)
localStorage.setItem('notes',JSON.stringify(notesarr));
showItems();
}

//searching


let search= document.getElementById("searchBar");

search.addEventListener('input',function(){
    let txtInSearchBar=search.value.toLowerCase();
    console.log("input fired",txtInSearchBar)
let cards=document.getElementsByClassName('noteCard');

Array.from(cards).forEach(function(element){
    let txtOfCard= element.getElementsByTagName("p")[0].innerText;
    
    // console.log(txtOfCard);
    
    if(txtOfCard.includes(txtInSearchBar))
{
    element.style.display="block";
}
else{
    element.style.display="none"
}
})


})
