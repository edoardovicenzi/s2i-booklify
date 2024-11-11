export function appendUrlParameters(url, parameters = {}){
    let resUrl = url;
    if (Object.keys(parameters).length){
        resUrl += "?";
        for (const [key, value] of Object.entries(parameters)){
            resUrl += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
        }
        resUrl = resUrl.slice(0, -1);
    }
    return resUrl
}

export async function performFetch(fetchUrl, functionName = ""){
    try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        return data
    } catch (error) {
        console.error(`Error while fetching ${functionName ? "in " + functionName + "()" : ""}:`, error.message);
    }
}
