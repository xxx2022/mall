import {request} from "./request";
export function getDetails(iid){
 return request({
   url:'/detail',
   params:{
     iid
   }
 })
}