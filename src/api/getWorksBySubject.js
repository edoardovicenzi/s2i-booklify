import { performFetch, appendUrlParameters } from './main.js';


export default function getWorksBySubject(subject, urlParameters = {limit: 10, details: false, offset:0}){
    //WARNING: leaving spaces causes the encoding to use "%20" which returns a 303 error during fetch request
    //"_" seems to be a good workaround
    const formattedSubject = subject.trim().toLowerCase().replaceAll(" ", "_");
    const encodedSubject = encodeURIComponent(formattedSubject);

    let fetchUrl = `${process.env.API_URL}/subjects/${encodedSubject}.json`;

    fetchUrl = appendUrlParameters(fetchUrl, urlParameters);

    try {
        const response = performFetch(fetchUrl, getWorksBySubject.name);
        return response
    } catch (error) {
        console.error(error.message);
    }
}
