





const cafeList = document.querySelector('#cafe-list');

const form = document.querySelector('#add-cafe-form');


//create element and render cafe 
function renderCafe(doc)
{
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;

    li.appendChild(name);
    li.appendChild(city);
    cafeList.appendChild(li);
  


}

// -------------------------Getting Data-------------------
//get is asynchronus function so untill the data we get we have to w8 then trigger then function and then function will execute after the data is exccute
db.collection('cafes').get().then(
    //snapshot basically the representation  of diff data inside the class
 (snapshot)=>
 {
         snapshot.docs.forEach(doc => {
            renderCafe(doc);
             
         });
 }



)
//-----------------------Saving Data---------------------------
form.addEventListener('submit',(e) => {

e.preventDefault();
db.collection('cafes').add({
    name :form.name.value,
    city:form.city.value,
});

form.name.value = '';
form.city.value = '';
})