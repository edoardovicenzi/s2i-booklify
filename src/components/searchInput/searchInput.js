import './style.css';
import SuggestionsNode from '../inputSuggestions/inputSuggestions.js';
import SUBJECTS from '../../static_js/subjects.js'

const suggestionsNode = new SuggestionsNode();

function searchInput(id, name = "", placeholder = ""){
    const searchInputElement = document.createElement('input');
    searchInputElement.classList.add('search-input');
    searchInputElement.setAttribute("id", id);
    searchInputElement.setAttribute("type", "text");
    searchInputElement.setAttribute('name', name);
    searchInputElement.setAttribute('placeholder', placeholder);
    searchInputElement.setAttribute('autocomplete', 'off');

    //Event listener
    searchInputElement.addEventListener("input", handleChange);
    return searchInputElement
}

function handleChange(event){
    const t = event.target;
    const parentWrapper = t.parentNode;

    checkAndRemoveNode(parentWrapper, suggestionsNode.getSuggestionElement())

    if (t.value.length){
        const subjectNames = SUBJECTS.map((el) => el.name.toLowerCase());
        const filteredSubjects = subjectNames.filter((el) => el.includes(t.value.toLowerCase()));

        if (filteredSubjects.length){
        suggestionsNode.setListItems(filteredSubjects.slice(0, 5));
        suggestionsNode.setEventListener(t);
        parentWrapper.appendChild(suggestionsNode.getSuggestionElement());

        }
    }
}

function checkAndRemoveNode(parent, nodeToRemove){
        if (parent.contains(nodeToRemove)){
            parent.removeChild(nodeToRemove);
        }
}
export default searchInput;
