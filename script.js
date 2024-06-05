import {items} from"./data.js";

const formEle=document.getElementById("item-form");
//place,location,date,link,image,list container
const listEle=document.getEllementById("list-container");
const placeInput=document.getElementById("place");
const locationInput=document.getElementById("loaction");
const imageInput=document.getElementById("image");
const linkInput=document.getElementById("link");
const dateInput=document.getElementById("date");

function addItem(e)
e.preventDefault();

const place=placeInput.value();
const location=locatonInput.value();
const image=imageInput.value();
const link=linkInput.value();
const date=dateInput.value();

items.push{
place:place;
loaction:location;
image:image;
link:link;
date:date;
}

function renderList(){
    listEle.innerHTML=items.map((item)=>
        <div class="card">
    <img src=${item.image} alt=${item.place}/>
    <div class="card-content">
      <div class="card-header">
        <div class="card-header-text">
          <a 
          target="_blank"
          href="https://www.indiatajmahaltour.com/holiday-packages/taj-mahal-tours-from-bangalore.htm">Taj Mahal</a>
          <p>agra,india</p>
        </div>
        <div class="card-header-actions">
          <button>
            <img src="assets/edit-icon.svg"
            alt="edit-icon"></button>
            <button>
            <img src="assets/trash-icon.svg"alt="trash-icon">
          </button>
        </div>
      </div>
      <p>${item.plan}
        </p>
      <div class="card-footer">26 May 2024</div>
    </div>
  </div>
};
}
renderList();
formEle.addEventListener("sumbit",console.log("submit"));

