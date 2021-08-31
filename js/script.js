/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

let studentsPerPage = 9; // this is how many of the students will be displayed, having it as a variable it gives the possibilty to change later


/*

Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page){ //list is the array object you want to itterate over, and page is which increment of itemsPerPage you will display
   let startIdx = (page * studentsPerPage) - studentsPerPage; 
   let endIdx = page * studentsPerPage;
   const studentList = document.querySelector(".student-list"); //where we will put in our students
   studentList.innerHTML = '';
   let testingList = '';
   for(let i = 0; i < list.length; i++){ 
      if(i >= startIdx && i < endIdx){
      studentList.insertAdjacentHTML('beforeend', //using template literals as opposed to multiple createElements to have a more readable code
      `<li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
         </div>
      </li>`);
      }
   } 
}  

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function paginationButtons(list){
   const linkList = document.querySelector(".link-list"); //where we will put the buttons
   const totButtons = Math.ceil(list.length / studentsPerPage); //gives a full number without decimals
   linkList.innerHTML = ''; //cleans out the inner HTML in case something is left over
   let buttonHTML = ''; // the variable we will use to insert the HTML
   for(let i = 0; i < totButtons; i++){ //loops over and creates the correct number of buttons with classes so that they can chosen easily
      buttonHTML += `
      <li>
         <button type="button" class="button">${i + 1}</button>
      </li>
      `
   }
linkList.insertAdjacentHTML('beforeend', buttonHTML);
const buttons = document.querySelectorAll('.button'); // chooses all the buttons with the correct class i.e the one that was created in the function
buttons[0].classList.add('active'); // gives the first button the class of active

linkList.addEventListener('click', (e) => {
   for(button of buttons){
      button.classList.remove('active'); //loops over the buttons and removes the active class before it gets put back on later
   }
   if(e.target.className === 'button'){ //checking if the target has the button class
      e.target.classList.add('active'); //here the clicked button gets the active class
      showPage(data, e.target.textContent); //this runs the showPage function with the dynamic buttons text content
   }

})
}

// functions that will go off when the site opens
paginationButtons(data); 
showPage(data, 1); //this will give the first 9 students in the document
searchComponent();
