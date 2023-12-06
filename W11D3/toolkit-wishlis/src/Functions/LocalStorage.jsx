export const SetLocalStorage=(name, data)=>{
    localStorage.setItem(name, JSON.stringify(data))
}

export const GetLocalStorage=(name)=>{
    localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : []
}

export const CheckLocalStorage=(name)=>{
    localStorage.getItem(name) ? true : false
}
