let fileSysProm = require('fs').promises

let readfileAsync = async ()=>{

    try{
        let readFile = await fileSysProm.readFile(("readFile.txt"),'utf8')
console.log(readFile)
    }
    catch(error){
        console.log(error)
    }
}
readfileAsync()
