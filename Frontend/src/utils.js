import {enqueueSnackbar} from "notistack";

// export function status(res){
//     if(res.status >= 200 && res.status <300){
//         return res.json().then(data => {
//             const message = data.message;
//             enqueueSnackbar(message, {variant:'success',anchorOrigin:{
//                     vertical:"top",
//                     horizontal:"right",
//                 }});;
//             return data;
//         });}
//     throw new Error(res.statusText);
// }


export function status(res){
    if(res.status >= 200 && res.status <300){
        return res.json();}
    throw new Error(res.statusText);
}