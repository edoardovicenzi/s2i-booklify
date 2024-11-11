import './style.css';

const WRAPPER_CSS_CLASS = 'suggestion-wrapper'
const LIST_CSS_CLASS = 'suggestion-list';
const LIST_ITEM_CSS_CLASS = 'suggestion-list-item';

class InputSuggestions{
    constructor(listItems = [], inputNode){
        this.setListItems(listItems);

    }
    createWrapperNode(){
        const wrapperElement = document.createElement("div")
        wrapperElement.classList.add(WRAPPER_CSS_CLASS);

        return wrapperElement
    }
    createListNode(){
        if (this.listItems && this.listItems.length > 0){
            const list = document.createElement("ul");
            list.classList.add(LIST_CSS_CLASS);


            for (const item of this.listItems) {
                const listItem = document.createElement("li");
                listItem.innerText = item;
                listItem.classList.add(LIST_ITEM_CSS_CLASS);
                list.appendChild(listItem);
            }

            return list
        }
        return undefined

    }
    appendListNode(listNode){
        if (this.wrapperElement && this.listNode){
            this.wrapperElement.innerHtml = "";
            this.wrapperElement.appendChild(listNode);
        }
    }
    setListItems(list = []){
        this.listItems = list;
        this.update();
        return this.listItems;
    }
    getSuggestionElement(){
        return this.wrapperElement
    }
    setEventListener(inputNode){
        if (inputNode.nodeType){
            if (inputNode.matches('input[type="text"]')){
                //event delegation
                this.wrapperElement.addEventListener("click", (event) => {
                    if (event.target.matches('li')){
                        inputNode.value = event.target.innerText;
                        try {
                           this.wrapperElement.parentNode.removeChild(this.wrapperElement);
                        } catch (error) {
                           console.log(error, this.wrapperElement);
                        }
                    }
                })
            }
            else{
                console.error('Unable to attach listeners to list wrapper: setEventListener requires a type text input');
            }
        }
        else {
            console.error('Unable to attach listeners to list wrapper: setEventListener requires DOM node');
        }
        this.wrapperElement
    }
    
    update(){
        this.wrapperElement = this.createWrapperNode();
        this.listNode = this.createListNode();
        this.appendListNode(this.listNode);
    }
}

export default InputSuggestions;
