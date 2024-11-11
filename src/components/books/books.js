import './style.css';

//TODO: solo lista titolo + autore
//TODO: click su libro mostra descrizione del libro (altra api: works/{ID}.json)
//WARN: alcuni libri NON hanno la descrizione (placeholder?)
export default class Book{
    constuctor(workInformation){
        this.key = workInformation["key"]; //String
        this.title = workInformation["title"]; //String
        this.editionCount = workInformation["edition_count"]; //Number
        this.coverId = workInformation["cover_id"]; //Number
        this.coverEditionKey = workInformation["cover_edition_key"]; //String
        this.subject = workInformation["subject"]; //[]
        this.authors = workInformation["authors"]; //[]
        this.firstPublishYear = workInformation["first_publish_year"]; //Number
    }
}
