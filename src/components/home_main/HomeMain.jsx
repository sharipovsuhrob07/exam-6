import React, { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "../../images/editIcon.svg";
import DeleteIcon from "../../images/deleteIcon.svg";
import SearchIcon from "../../images/searchIcon.svg";
import "./HomeMain.scss";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const HomeMain = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      setData(data.filter((item) => item.id !== productId));
    } catch (error) {
      console.log(error);
    }
  };

  const onConfirm = (productId) => {
    if (window.confirm("Mahsulotni o'chirishni tasdiqlaysizmi?")) {
      deleteProduct(productId);
    }
  };

  return (
    <>
      <div className="container">
        <div className="home__main">
          <div className="home__main_top">
            <h2>Все товары</h2>
            <div className="home__main_search">
              <img
                className="home__main_search_icon"
                src={SearchIcon}
                alt="icon"
              />
              <input
                className="home__main_search_input"
                type="text"
                placeholder="Поиск"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="w-100 rounded bg-white border shadow p-4 tables">
            {loading ? (
              <div className="spinner">
                <ClipLoader color={"#000"} loading={loading} size={50} />
              </div>
            ) : (
              <table className="table table-stipend">
                <thead className="table__thead">
                  <tr>
                    <th className="table__title">Наименование</th>
                    <th className="table__title">Артикул</th>
                    <th className="table__title">Бренд</th>
                    <th className="table__title">Цена</th>
                    <th className="table__title">Цена со скидкой</th>
                    <th className="table__title">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter((item) =>
                      item.brand.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => (
                      <tr key={item.id}>
                        <td>Товар {item.id}</td>
                        <td>{item.rating}</td>
                        <td>{item.brand}</td>
                        <td>{item.price}</td>
                        <td>{item.discountPercentage}</td>
                        <td>
                          <Link to={`/edit/${item.id}`}>
                            <button className="home_main_product_edit_delete">
                              <img src={EditIcon} alt="icon" />
                            </button>
                          </Link>
                          <button
                            className="home_main_product_edit_delete"
                            onClick={() => onConfirm(item.id)}
                          >
                            <img src={DeleteIcon} alt="icon" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
          <div>
            <Link to="/add-product">
              <button className="new_product">+ Новый товар</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
