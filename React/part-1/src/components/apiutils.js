//all the api related actiVITIES will be here


const BASE_URL = 'http://localhost:5000';

const getPersons = ()=>{
    return fetch(`${BASE_URL}/persons`)   // These  are all end points
    .then(res => res.json());
}

const createPerson = (personData) => {
    return fetch(`${BASE_URL}/persons`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personData)
    })
    .then(res => res.json());
}

const getApiError = (response) => {
    return response.error.errorMessage;
}


const getPersonsnyId = (id)=>{
    return fetch(`${BASE_URL}/persons/${id}`)   // These  are all end points
    .then(res => res.json());
}

export {
    getPersons,
createPerson,
getApiError
}