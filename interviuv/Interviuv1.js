const input = prompt('Enter your value')

function Seperate(str) {
    const obj = {}
    const arr = str.split('')
    for (const x of arr) {
        if (obj[x]) {
            obj[x] ++
        }
        else{
            obj[x]=1
        }
        console.log(obj);
    }
}

Seperate(input)
