import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


//uploding video
export const uploadVideo= async (body)=>{
   // call post http request to http://localhost:4000/videos to add videos in json
   //server return response to add component
  return await commonAPI("POST",`${serverURL}/videos`,body)
}
//get all videos
export const getAllVideos = async ()=>{
     // call get http request to http://localhost:4000/videos to get videos from json
       //server return response to View component
       return await commonAPI("GET",`${serverURL}/videos`,"")
}

//Get a single video
export const getAVideo = async (id)=>{
    // call get http request to http://localhost:4000/videos/id to get videos from json
    //server return response to View component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

//delete a single video
export const deleteAVideo = async (id)=>{
    // call delete http request to http://localhost:4000/videos/id to get remove videos from json
    //server return response to videoCard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}


//store video watching history to json server
export const addHistory = async (videoHistory)=>{
    // call  http request to http://localhost:4000/history to add  videos history in json 
    //server return response to videoCard component
    return await commonAPI("POST",`${serverURL}/history`,videoHistory)
}

//get video watching history to json server
export const getHistory = async ()=>{
    // call  http request to http://localhost:4000/history to get  videos history in json 
    //server return response to WatchHistory component
    return await commonAPI("GET",`${serverURL}/history`,"")
}


//delete  video watching history from json server
export const deleteHistory = async (id)=>{
    // call  http request to http://localhost:4000/history to get  videos history in json 
    //server return response to WatchHistory component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}












//adding category to json server
export const saveCategory = async (body)=>{
    // http request to http://localhost:4000/categories to add categories in json
    //server return response to categories component
    return await commonAPI("POST",`${serverURL}/categories/`,body)
}

//get all category
export const getAllCategory = async ()=>{
    // http request to http://localhost:4000/categories to get all categories from json
    //server return response to category component
    return await commonAPI("GET",`${serverURL}/categories/`,"")
}

//delete category from json server
export const deleteCategory =async (id)=>{
    //call delete http request to http://localhost:4000/categories to DELETE  category form sever return response to category component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}

//delete category from json server
export const UpdateCategory =async (id,body)=>{
    //call put http request to http://localhost:4000/categories/id to update  category form sever return response to category component
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
}

