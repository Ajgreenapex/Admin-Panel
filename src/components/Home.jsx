import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, productPrice, getProductPriceData } from "../redux/Action";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
import { Button, Modal } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
export default function Home() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [stock, setStock] = useState("in");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setCountry("");
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const addProducts = () => {
    const data = {
      name,
      file,
      price,
      description,
      remove: false,
      stock,
      country,
      id: uuidv4(),
    };
    dispatch(addProduct(data));
    handleClose();
  };
  const clearFilterHandler = () => {
    dispatch(productPrice(0));
    dispatch(getProductPriceData([]));
  };
  const filterHandler = () => {
    console.log("getProductPriceData handler price==>>", state.price);
    let newArray = state.productData.filter((val) => {
      return val.price <= state.price && val.stock === stock;
    });
    console.log("getProductPriceData handler ==>>", newArray);
    dispatch(getProductPriceData(newArray));
  };
  const onChangePrice = (e) => {
    const temp = e.target.value;
    let num = parseInt(temp);
    dispatch(productPrice(num));
  };

  const onchangeCountry = (e) => {
    const temp = e.target.value;
    setCountry(temp);
  };

  const stockINOrOut = (e) => {
    const temp = e.target.value;
    setStock(temp);
  };
  console.log("home ==========>", state);
  return (
    <>
      <div className="middle-section">
        <aside className="aside-common-class">
          <div className="aside-option">
            <h3>Price</h3>
            <RangeSlider value={state.price} onChange={onChangePrice} />
            <br />
            <br />
            <h3>Stock</h3>
            <label htmlFor="in" className="padding">
              IN
            </label>
            <input
              type="radio"
              name="stock"
              id="in"
              value="in"
              onChange={stockINOrOut}
            ></input>
            <label htmlFor="out" className="padding">
              Out
            </label>
            <input
              type="radio"
              name="stock"
              id="out"
              value="out"
              onChange={stockINOrOut}
            ></input>
            <br />
            <br />
            <button className="btn btn-primary " onClick={filterHandler}>
              Apply{" "}
            </button>
            <button className="btn btn-primary " onClick={clearFilterHandler}>
              clear{" "}
            </button>
          </div>
        </aside>
        <main className="main-common-class">
          <div className="serachPadding">
            <Button variant="btn btn-primary mt-2 " onClick={handleShow}>
              Add Product
            </Button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="col-sm-6 offset-sm-3">
                <br />
                <input
                  type="text"
                  maxLength="50"
                  className="form-control"
                  placeholder="Title"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />{" "}
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="url"
                  onChange={(e) => {
                    setFile(e.target.value);
                  }}
                />{" "}
                <br />
                <input
                  type="number"
                  min="1"
                  max="100"
                  className="form-control"
                  placeholder="Price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />{" "}
                <br />
                <textarea
                  rows="2"
                  cols="50"
                  maxLength="150"
                  className="form-control"
                  placeholder="Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />{" "}
                <br />
                <select
                  id="country"
                  onChange={onchangeCountry}
                  value={country}
                  className="form-control"
                >
                  <option value="">Country/Region</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Germany">Germany</option>
                  <option value="Australia">Australia</option>
                </select>
                <br />
                <label>
                  <h3>Stock</h3>
                </label>
                <br />
                <div>
                  <label htmlFor="in" className="padding">
                    IN
                  </label>
                  <input
                    type="radio"
                    name="stock"
                    id="in"
                    value="in"
                    onChange={stockINOrOut}
                    checked="checked"
                  ></input>
                  <label htmlFor="out" className="padding">
                    Out
                  </label>
                  <input
                    type="radio"
                    name="stock"
                    id="out"
                    value="out"
                    onChange={stockINOrOut}
                  ></input>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={addProducts}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
          <br />
          <Card />
        </main>
      </div>
    </>
  );
}
