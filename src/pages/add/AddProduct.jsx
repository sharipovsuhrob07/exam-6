import "./AddProduct.scss";
import NavBar from "../../components/navbar/NavBar";
import AddProductHeader from "../../components/add_product_header/AddProductHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const [values, setValues] = useState({
    rating: "",
    brand: "",
    price: "",
    discountPercentage: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/products", values)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="addProduct">
      <NavBar />
      <div>
        <AddProductHeader />
        <div className="add__product_main rounded bg-white border shadow p-4 tables">
          <div className="container">
            <button className="add__product_main_btn">Основные</button>
            <form onSubmit={handleSubmit}>
              <div className="add__product_inputs">
                <div>
                  <label
                    htmlFor="rating"
                    className="add__product_input_name_title"
                  >
                    АРТИКУЛ *
                  </label>
                  <input
                    className="add_product_input_name"
                    name="rating"
                    type="text"
                    value={values.rating}
                    onChange={(e) =>
                      setValues({ ...values, rating: e.target.value })
                    }
                  />
                </div>
                <div className="add__product_brand_code_input">
                  <div>
                    <label htmlFor="brand" className="add__product_brand_name_brand_title">
                      Бренд *
                    </label>
                    <input
                      className="add_product_input_brand"
                      name="brand"
                      type="text"
                      value={values.brand}
                      onChange={(e) =>
                        setValues({ ...values, brand: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="add__product_brand_name_code_title">
                      Артикул производителя *
                    </label>
                    <input className="add_product_input_code" type="text" />
                  </div>
                </div>
                <div>
                  <label className="add__product_input_commit_title">
                    Описание *
                  </label>
                  <input className="add__product_input_commit" type="text" />
                </div>
                <div className="add__products_inputs_price">
                  <div>
                    <label htmlFor="price" className="add__product_input_price_title">
                      Цена
                    </label>
                    <input
                      className="add__product_input_price"
                      name="price"
                      type="text"
                      value={values.price}
                      onChange={(e) =>
                        setValues({ ...values, price: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="discountPercentage" className="add__product_input_discount_title">
                      Цена со скидкой
                    </label>
                    <input
                      className="add__product_input_discount"
                      name="discountPercentage"
                      type="text"
                      value={values.discountPercentage}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          discountPercentage: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="add__product_footer">
          <div className="add__product_footer_buttons">
            <button className="add__product_footer_save_btn">Сохранить</button>
            <button className="add__product_footer_cancel_btn">Отмена</button>
          </div>
        </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AddProduct;
