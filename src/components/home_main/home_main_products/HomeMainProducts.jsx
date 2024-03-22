// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import EditIcon from "../../../images/editIcon.svg";
// import DeleteIcon from "../../../images/deleteIcon.svg";
// import "./HomeMainProducts.scss";
// import { Link } from "react-router-dom";

// const HomeMainProducts = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/products")
//       .then((response) => setData(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   const deleteProduct = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:3000/products/${productId}`);
//       setData(data.filter((item) => item.id !== productId));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const onConfirm = (productId) => {
//     if (window.confirm("Mahsulotni o'chirishni tasdiqlaysizmi?")) {
//       deleteProduct(productId);
//     }
//   };

//   return (
//     <div className="w-100 rounded bg-white border shadow p-4 tables">
//       <table className="table table-stipend">
//         <thead className="table__thead">
//           <tr>
//             <th className="table__title">Наименование</th>
//             <th className="table__title">Артикул</th>
//             <th className="table__title">Бренд</th>
//             <th className="table__title">Цена</th>
//             <th className="table__title">Цена со скидкой</th>
//             <th className="table__title">Действия</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>Товар {item.id}</td>
//               <td>{item.rating}</td>
//               <td>{item.brand}</td>
//               <td>{item.price}</td>
//               <td>{item.discountPercentage}</td>
//               <td>
//                 <Link to={`/edit/${item.id}`}>
//                   <button className="home_main_product_edit_delete">
//                     <img src={EditIcon} alt="icon" />
//                   </button>
//                 </Link>
//                 <button
//                   className="home_main_product_edit_delete"
//                   onClick={() => onConfirm(item.id)}
//                 >
//                   <img src={DeleteIcon} alt="icon" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HomeMainProducts;
