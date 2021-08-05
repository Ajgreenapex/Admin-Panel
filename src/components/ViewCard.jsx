import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
export default function ViewCard(props) {
  const data = props.location.data;
  const history = useHistory();
  const state = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
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
  const updateHandler = (values) => {
    console.log("updateHandler  values==>>", values);
    state.productData.filter((val) => {
      return val.id !== data.id;
    });
    values.id = data.id;
    data.file = values.file;
    data.title = values.title;
    data.description = values.description;
    data.price = values.price;
    data.stock = values.stock;
    handleClose();
  };
  console.log("view card", data);
  return (
    <div>
      <div className="row mt-5">
        <div className="col mt-5">
          <img src={data?.file || "logo192.png"} alt="img"></img>
        </div>
        <div className="col mt-5">
          <h3>Title</h3>
          <p>{data?.title}</p>
          <h3>price</h3>
          <p>{data?.price}</p>
          <h3>Description</h3>
          <p>{data?.description}</p>
        </div>
      </div>
      <div className="mt-5">
        <Button
          variant="primary"
          onClick={() => {
            handleShow();
          }}
        >
          Update{" "}
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            history.goBack();
          }}
        >
          GO BACK{" "}
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
                title: data?.title,
                file: data?.file,
                price: data?.price,
                description: data?.description,
                country: data?.country,
                stock: data?.stock,
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                console.log("values=======>", values);
                updateHandler(values);
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
                    value={values.description}
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
    </div>
  );
}
