//Static js
import subjects from "../static_js/subjects.js";
import getWorksBySubject from "../api/getWorksBySubject.js";

//Components
import UserForm from '../components/userForm/userForm.js';

//Style
import './style.css';

const userForm = new UserForm("form-subject");


const page = document.querySelector("#page")
page.appendChild(userForm.getFormElement());

page.addEventListener("submit", function(e){
    if (e.target.matches("form"))
        e.preventDefault();
})

