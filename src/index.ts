import jsonFile from "../app.json"
type T = typeof jsonFile;
type K = keyof T; 
type F = (key: K ) => void
const func : F= (key) =>{
    console.log(key),
    console.table([[key,jsonFile[key]]])

}

func("b")


