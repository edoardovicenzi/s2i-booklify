//Components
import createSearchInput from '../../components/searchInput/searchInput.js';
import {submitButton, loadMoreButton} from '../../components/submitButton/submitButton.js';
import ResultList from '../../components/resultList/index.js';

//Utility (API)
import fetchWorksBySubject from '../../api/getWorksBySubject.js';

//Style
import './style.css';

class UserForm{
    constructor(id){
        this.id = id;
        this.createDOM();
    }

    //DOM Manipulation
    createDOM(){
        this.userFormElement = document.createElement('form')
        this.userFormElement.setAttribute('id', this.id);
        this.userFormElement.classList.add('form');

        this.userFormElement.appendChild(this.createUserSearchInput('book-subjects', 'book-subjects', 'Enter a book subject...'))
        //
        this.attachEventListener();
        return this.userFormElement;
    }
    createUserSearchInput(inputId, inputName, inputPlaceholder){
        this.searchInputName = inputName;

        const searchInput = createSearchInput(inputId, inputName, inputPlaceholder);
        const searchButton = submitButton('SEARCH');
        this.searchWrapper = document.createElement('div');

        this.searchWrapper.classList.add('search-wrapper');


        this.searchWrapper.appendChild(searchInput)
        this.searchWrapper.appendChild(searchButton)
        return this.searchWrapper
    }
    createHomeResultList(results = []){
        this.resultList = new ResultList(results).getList();
        //Append results to form
        this.userFormElement.appendChild(this.resultList);

        try {
            this.userFormElement.querySelector('.form-submit-button-load-more').remove();
        } catch (error) {
            
        }
        finally{
            //since we look at 10 items a time if we have less the user is prevented from loading more
            if(results.length > 9){
                //Append the load more button only if we dont have it already
                this.userFormElement.appendChild(this.createLoadMore());
            }
        }

        return this.resultList
    }

    createLoadMore(){
        const button = loadMoreButton();
        return button
    }

    //Event handlers

    disableSubmitButton(toDisabled, buttons = []){
        for (const submitButton of buttons){
            if (toDisabled){
                submitButton.setAttribute('disabled', 'true')
            }
            else{
                //override in case we need it (load more button)
                if (!submitButton.dataset.remainsDisabled){
                    submitButton.removeAttribute('disabled')
                }
            }
                submitButton.querySelector('span').classList.toggle('hidden');
                submitButton.querySelector('.spinner').classList.toggle('hidden');
        }
    }

    //Event handlers
    attachEventListener(){
        this.userFormElement.addEventListener('submit', (event) =>{
            //We will use async to load functions
            event.preventDefault();
            const t = event.target;
            //it's a <form> so we can access all inputs within the 'elements' property
            const inputValue = t.elements[this.searchInputName].value
            
            if (!inputValue && !inputValue.toString().trim()){
                //TODO: Add invalid feedback
                return
            }

            this.userSubject = inputValue;

            this.handleLoadingResults(this.userSubject, event);
        })
    }
    async handleLoadingResults(value, submitEvent){
        //disable all submits (prevent user making concurrent requests)
        const submitButtons = this.userFormElement.querySelectorAll('button[type="submit"]');
        const pressedButton = submitEvent.submitter;


        this.disableSubmitButton(true, submitButtons);

        //Case user searches a subject
        if (pressedButton.matches('.form-submit-button')){
            const results = await fetchWorksBySubject(value);
            try {
                this.userFormElement.removeChild(this.resultList);
            } catch (error) {

            }
            this.createHomeResultList(results.works);
        }
        //Case user wants to load more
        else if (pressedButton.matches('.form-submit-button-load-more')){
            const listLength = this.resultList.children.length;
            const results = await fetchWorksBySubject(value, {offset: listLength});

            if (results.works.length){
                const newResultNodes = new ResultList(results.works).getListItems();
                for (const newResultNode of newResultNodes){
                    this.resultList.appendChild(newResultNode);
                }
            }
            //prevent user to make any other requests
            else{
                // pressedButton.dataset.remainsDisabled = true;
                pressedButton.remove();
            }
        }

        //enable all submits again
        this.disableSubmitButton(false, submitButtons);
    }

    //Getters
    getFormElement(){
        return this.userFormElement;
    }
    getSearchWrapper(){
        return this.searchWrapper;
    }


}
export default UserForm;
