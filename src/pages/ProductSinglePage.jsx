import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./../components/shared/Loader";
import { axiosInstance } from "../services/axios";
import PopupFromOrder from "../components/sections/PopupFromOrder";

export default function ProductSinglePage() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  function openPopup() {
    setPopupOpen(true);
  }

  function closePopup() {
    setPopupOpen(false);
  }

  useEffect(() => {
    async function fetchProductData() {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/${id}`);
        setSingleProduct(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProductData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="album-wrapper">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="product-card row">
        <div className="col-md-6">
          {" "}
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            className="product-image "
          />
        </div>
        <div className="col-md-6 ">
          <h2 className="product-title">{singleProduct.title}</h2>
          <p className="product-category">{singleProduct.category}</p>
          <p className="product-price">{singleProduct.price} $</p>
          <p className="product-description">{singleProduct.description}</p>
          <button onClick={openPopup} className="btn">
            Купить сейчас
          </button>
          {isPopupOpen && <PopupFromOrder closePopup={closePopup} setPopupOpen={setPopupOpen} />}
        </div>
      </div>
    </div>
  );
}
