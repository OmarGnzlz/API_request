
const catchRequests = async (req) => {
    const response = await fetch(req)
    const data = await response.json()
    

    const js = (rep) => rep.language == "JavaScript"
    
    let justJs = data.filter(js)
    let justNames = []
    for (let i in justJs){
        justNames.push(justJs[i].name)
    }
    document.getElementById("repos").textContent= justNames
    console.log(data)
    //console.log(justJs)
    
        
    

}

const search = () =>{
    const api_url = "https://api.github.com/users/"
        
    let user = document.getElementById("MyInput").value
        
    let req = new Request(`${api_url}${user}/repos?page=1&per_page=100`)

    catchRequests(req).catch(() => console.log("Algo salio mal"))
}