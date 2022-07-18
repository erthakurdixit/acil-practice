
import { API_Path1} from '../Constants/Path';
import { Fetch_API } from "./Fetch.Service";


export const GetCategories=()=>{
 return   Fetch_API(API_Path1+"categories","get",{},{},{})
}
export const GetProducts=()=>{
 return   Fetch_API(API_Path1+"products","get",{},{},{})
}

