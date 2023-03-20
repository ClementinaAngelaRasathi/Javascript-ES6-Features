// To start a json server
// npx json-server -p <port number goes here> -w <your file goes here>


//Setting up the base url for making requests  
const api = axios.create({
    baseURL: `http://localhost:3000/employees`
})


//To get all the record
const getRequest = () => {
    api.get(`/`).then(res => {
       
        setEmployees((res) => res.data)
    })
}


//To post a record
const postRequest = () => {

    let newDetail = {
        "id": 1,
        "name": "hi"
    }

    api.post(`http://localhost:3000/employees`, newDetail)
        .then(res => console.log(res))
        .catch(error => console.log(error))
}


//To delete a record
const deleterequest = (id) => {

    axios.delete(`http://localhost:3000/employees/${id}`)
        .then(res => { console.log(res) })
        .catch(err => { console.log(err) })
}


//put request
const putRequest = () => {

    let amendedRecord = {
        "id": 1,
        "name": "hi"
    }

    api.post(`http://localhost:3000/employees`, amendedRecord)
        .then(res => console.log(res))
        .catch(error => console.log(error))
}




