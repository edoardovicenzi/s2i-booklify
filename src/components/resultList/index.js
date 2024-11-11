//Utility (API)
import fetchWorkByID from '../../api/getWorkByID.js';
//Style
import './style.css';


export default class ResultList{
    constructor(results){
        this.resultList = document.createElement('ul');
        this.resultList.classList.add('result-list');

        results.map(result => {
            const listItem = this.createBookListItem(result);

            //Append item to list
            this.resultList.appendChild(listItem);
        });
        this.resultList.addEventListener("click", event => {
            //Add event listener to show description
            const resultItem = event.target.closest('.result-list-item');
            if (!resultItem){
                return;
            }
            else if (!this.resultList.contains(resultItem)){
                return
            }
            const hanlder = this.hanldeResultDescription.bind(this);
            this.hanldeResultDescription(resultItem);
        });

    }
    //Getters
    getList(){
        return this.resultList
    }
    getListItems(){
        return this.resultList.children
    }
    //DOM creation
    createBookListItem(result){
        //The item will be a card with header and body
        const listItem = document.createElement('li');
        listItem.classList.add('result-list-item');

        //since pop() deletes AND returns the last element
        listItem.id = result.key.split("/").pop(); 

        const listItemHeader = document.createElement('div');
        listItemHeader.classList.add('result-list-item-header');


        const authorsLabelSpan = this.createItemHeaderLabel();
        listItemHeader.appendChild(authorsLabelSpan);


        const authorAnchors = result.authors.map(author => {
            //TODO: FUTURE WORKS: clickable authors
            const anchorTag = document.createElement('a');
            anchorTag.href = "#" //PLACEHOLDER
            anchorTag.innerText = author.name
            return anchorTag
        })
        const authorsElements = this.createItemHeaderContent(authorAnchors);
        //Append author spans to header
        authorsElements.map(el => {
            listItemHeader.appendChild(el);
        })

        //Append Header
        listItem.appendChild(listItemHeader);


        const listItemBody = this.createListItemBody([{
            sectionName: "",
            sectionContent: result.title,
            type: "title"}]);
        listItemBody.classList.add('result-list-item-body');
        //Populate the title

        //Append Body
        listItem.appendChild(listItemBody);


        return listItem
    }
    createItemHeaderLabel(label = ""){
        const labelSpan = document.createElement('span');
        labelSpan.classList.add('result-list-item-header-span-label');
        labelSpan.innerText = label.toString().trim() + " ";
        return labelSpan
    }
    createItemHeaderContent(content = []){
        const res = [];
        const contentSpan = document.createElement('span');
        contentSpan.classList.add('result-list-item-header-span-content');

        const hiddenSpan = document.createElement('span');
        hiddenSpan.classList.add('hidden','result-list-item-header-span-content', 'result-list-item-header-span-content-hidden');

        content.map((contentElement, i, array) => {
            if (i < 4){
                if (contentElement.nodeType){
                    contentSpan.appendChild(contentElement);
                }
                else{
                    contentSpan.append(contentElement);
                }
            }
            else{
                if (contentElement.nodeType){
                    hiddenSpan.appendChild(contentElement);
                }
                else{
                    hiddenSpan.append(contentElement);
                }

            }

        })
        res.push(contentSpan);
        res.push(hiddenSpan);

        //logic to handle more than 4 authors
        if (content.length > 4){
            const othersAnchor = this.createOthersSpan();
            res.push(othersAnchor);
        }
        return res
    }
    createListItemBody(sections = [{sectionName: "", sectionContent: "", type:""}]){
        const listItemBody = document.createElement('div');
        listItemBody.classList.add('result-list-item-body');
        for (const section of sections){
            listItemBody.dataset.type = section.type;

            const sectionName = document.createElement('span');
            sectionName.classList.add('result-list-item-body-name');
            sectionName.innerText = section.sectionName.toString() + " ";
            listItemBody.appendChild(sectionName);

            const sectionContent = document.createElement('span');
            sectionContent.classList.add('result-list-item-body-content');
            sectionContent.innerHTML = section.sectionContent;
            listItemBody.appendChild(sectionContent);
        }
        return listItemBody
    }
    createOthersSpan(){

        const othersAnchor = document.createElement('a');
        othersAnchor.classList.add('result-list-item-header-span-content-others');
        othersAnchor.href = "#";
        othersAnchor.innerText = "and others...";

        othersAnchor.addEventListener('click', event => {
            event.preventDefault();
            const t = event.target;
            const hiddenSpanRef = t.parentElement.parentElement.querySelector('.result-list-item-header-span-content-hidden');
            if (hiddenSpanRef.matches('.hidden')){
                t.innerText = "(show less)"
            }
            else{
                t.innerText = "and others..."
            }
            hiddenSpanRef.classList.toggle('hidden');
        })
        return othersAnchor
    }

    //Event Listeners
    async hanldeResultDescription(listItem){
        const descriptionTag = listItem.querySelector('[data-type="desc"]');
        if (descriptionTag){
            descriptionTag.classList.toggle("hidden");
        }
        else{
            const workInfo = await fetchWorkByID(listItem.id);
            const description = workInfo.description?.value ?? workInfo.description ?? "No description available";
            const newDescriptionTag = this.createListItemBody([{
                sectionName : "",
                sectionContent : description,
                type : "desc"
            }]);
            listItem.appendChild(newDescriptionTag);
        }
    };
}
