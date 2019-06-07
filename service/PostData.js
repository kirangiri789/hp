

export function PostData(type, userData){
        
        let BaseUrl ="http://localhost:7777/login";

    return new Promise((resolve, reject)=>{
        fetch(BaseUrl+type,{
            method:'post',
            body: JSON.stringify(userData)
        })
        .then((response)=>response.json())
        .then((responseJson)=>{resolve(responseJson)
        })
        .catch((error)=>{
            reject();
        });
        
    });
}