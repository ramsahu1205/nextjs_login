export function userLogin(username:string,password:string){
    return new Promise((resolve,reject)=>{
        fetch("/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username,password})
        })
        .then((res)=>res.json())
        .then((result)=>{
            if(result.status){
                resolve(result)
            }
            else{
                reject(result)
            }
        })
        .catch((err)=>{
            reject(err);
        })
    })
}