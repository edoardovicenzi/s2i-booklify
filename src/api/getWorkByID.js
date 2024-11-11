import { performFetch, appendUrlParameters } from './main.js';


export default async function getWorkByID(id, urlParameters = {}){
    const formattedID = id.trim().toUpperCase();
    const encodedID = encodeURIComponent(formattedID);

    let fetchUrl = `${process.env.API_URL}/works/${formattedID}.json`;
    fetchUrl = appendUrlParameters(fetchUrl, urlParameters);

    try {
        const response = performFetch(fetchUrl, getWorkByID.name);
        return response
    } catch (error) {
        console.error(error.message);
    }

}
