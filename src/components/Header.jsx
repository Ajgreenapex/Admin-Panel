import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { serachProduct, serachWord } from "../redux/Action";
import { Navbar, Nav, Button, FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Header() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const searchHandler = () => {
    let newArray = state.productData.filter((val) => {
      return val.title.includes(state.serachWord);
    });
    console.log("serach handler ==>>", newArray);
    dispatch(serachProduct(newArray));
  };
  const onChangeSerach = (e) => {
    const temp = e.target.value;
    dispatch(serachWord(temp));
  };
  return (
    <div>
      <Navbar className="fixed-top " bg="dark" variant="dark" expand="lg">
        <Navbar.Text href="#">Admin Panel</Navbar.Text>
        <Nav className="mr-auto navbar-wapper">
          <Link to="/Home">Home</Link>
          <Link to="/Trash">Trash</Link>
          <Link to="/SocialMedia">SocialMedia</Link>
        </Nav>
        <Form className="d-flex serachPadding">
          <FormControl
            type="search"
            placeholder="Title"
            className="mr-2 "
            aria-label="Search"
            onChange={(e) => {
              onChangeSerach(e);
            }}
          />
          <Button variant="outline-success" onClick={searchHandler}>
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}
