import { LOGIN, LOGOUT } from "./actions-types";
import axios from 'axios';
 
const URL = 'http://localhost:3500/hr/';

 
export const login = (user) => {
  return {
    type: LOGIN,
    payload: user  
  }
};

export const logout = () => {
  return {
   type: LOGOUT   
  }
};

// export const addFav = async (character) => {
    
//       try {
//         const { data } = await axios.post(`${URL}`, character);
//         return({
//           type: ADD_FAV,
//           payload: data,
//         });
//       } catch (error) {
//         console.error('Error adding fav:', error.message);
//         // Puedes despachar una acción de error si lo necesitas
//         // dispatch({ type: ERROR_ADD_FAV, payload: error.message });
//       }
    
//   }
// // export const addFav = async (character) => {
// //     try {
// //       console.log('Trying to add fav:', character);
// //       const { data } = await axios.post(`${URL}`, character);
       
// //       return {
// //         type: ADD_FAV,
// //         payload: data[0],
// //       };
// //     } catch (error) {
// //       console.error('Error adding fav:', error.message);
// //       throw new Error(error.message);
// //     }
// //   };
  

// export const removeFav = async (id) => {
//     try {
//         const { data } = await axios.delete(`${URL}/${id}`);

//         return {
//             type: REMOVE_FAV,
//             payload: id,
//         };
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };


 

// export const filterCardsByGender = (gender) => {
//     return {
//       type: FILTER_FAV_BYGENDER,
//       payload: gender,
//     };
//   };
  
//   export const orderCards = (orden) => {
//     return {
//       type: ORDER_FAV,
//       payload: orden,
//     };
//   };
// export const deleteCharacter = (id) =>{
//     return {
//         type: DELETE_CHARACTER,
//         payload:id,
//     }
// }