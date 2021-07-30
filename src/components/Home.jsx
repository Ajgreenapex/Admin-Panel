import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, productPrice, getProductPriceData } from "../redux/Action";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
import { Button, Modal } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import StarRatingComponent from "react-star-rating-component";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
export default function Home() {
  const [stock, setStock] = useState("in");
  const [show, setShow] = useState(false);
  const [rating, setrating] = useState(1);
  const ratingHandler = (nextValue, prevValue, name) => {
    setrating(nextValue);
  };
  const handleClose = () => {
    setrating(1);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const addProducts = (values) => {
    console.log("submit ===========>", values);
    values.id = uuidv4();
    values.remove = false;
    values.rating = rating;
    dispatch(addProduct(values));
    handleClose();
  };
  const clearFilterHandler = () => {
    dispatch(productPrice(0));
    dispatch(getProductPriceData([]));
  };
  const filterHandler = () => {
    let newArray = state.productData.filter((val) => {
      return val.price <= state.price && val.stock === stock;
    });
    dispatch(getProductPriceData(newArray));
  };
  const onChangePrice = (e) => {
    const temp = e.target.value;
    let num = parseInt(temp);
    dispatch(productPrice(num));
  };

  const stockINOrOut = (e) => {
    const temp = e.target.value;
    setStock(temp);
  };
  const validate = yup.object().shape({
    title: yup
      .string()
      .max(50, "max 50 characters are required")
      .matches(/^[a-zA-Z ]+$/, "Only alphabets are allowed.")
      .required("Title Name is required."),
    file: yup.string(),
    // .matches(
    //   /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i,
    //   "Only image url are allowed."
    // )
    // .required("image url is required."),
    price: yup
      .number()
      .required("price is required.")
      .typeError("Only numbers are allowed.")
      .positive("Negative numbers are not allowed.")
      .integer("Phone can't contain a decimal.")
      .min(10, "Minimum 10 are required.")
      .max(100, "Maximum 100  are allowed."),
    country: yup.string().required("Country is required."),
    stock: yup.string().required("Stock is required."),
    description: yup
      .string()
      .max(150, "max 150 characters are required")
      .matches(/^[a-zA-Z ]+$/, "Only alphabets are allowed.")
      .required("Description Name is required."),
  });

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
                <Formik
                  initialValues={{
                    title: "",
                    file: "",
                    price: "",
                    description: "",
                    country: "",
                    stock: "in",
                  }}
                  validationSchema={validate}
                  onSubmit={(values) => {
                    addProducts(values);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    //@ts-ignore
                    <Form>
                      <Field
                        type="text"
                        maxLength="50"
                        className={
                          errors.title && touched.title
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Title"
                        name="title"
                      />{" "}
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="invalid-feedback"
                      />
                      <br />
                      <Field
                        type="text"
                        className={
                          errors.url && touched.url
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="url"
                        name="file"
                      />{" "}
                      <ErrorMessage
                        name="file"
                        component="div"
                        className="invalid-feedback"
                      />
                      <br />
                      <Field
                        type="text"
                        className={
                          errors.price && touched.price
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Price"
                        name="price"
                      />{" "}
                      <ErrorMessage
                        name="price"
                        component="div"
                        className="invalid-feedback"
                      />
                      <br />
                      <textarea
                        rows="2"
                        cols="50"
                        maxLength="150"
                        className={
                          errors.description && touched.description
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="description"
                      />{" "}
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="invalid-feedback"
                      />
                      <br />
                      <select
                        id="country"
                        className={
                          errors.country && touched.country
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        name="country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.country}
                      >
                        <option value="">Country/Region</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Germany">Germany</option>
                        <option value="Australia">Australia</option>
                      </select>
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="invalid-feedback"
                      />
                      <br />
                      <h3>Rating :{rating}</h3>
                      <StarRatingComponent
                        name="rating"
                        starCount={5}
                        value={rating}
                        onStarClick={ratingHandler}
                      />
                      <br />
                      <label>
                        <h3>Stock</h3>
                      </label>
                      <div>
                        <label htmlFor="in" className="padding">
                          IN
                        </label>
                        <Field
                          type="radio"
                          name="stock"
                          id="in"
                          value="in"
                          checked="checked"
                        ></Field>
                        <label htmlFor="out" className="padding">
                          Out
                        </label>
                        <Field
                          type="radio"
                          name="stock"
                          id="out"
                          value="out"
                        ></Field>
                      </div>
                      <br />
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button type="submit" variant="primary">
                          Save
                        </Button>
                      </Modal.Footer>
                    </Form>
                  )}
                </Formik>
              </div>
            </Modal.Body>
          </Modal>
          <br />
          <Card />
        </main>
      </div>
    </>
  );
}
