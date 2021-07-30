import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restoreProduct, deleteProduct } from "../redux/Action";
import { Card, Button } from "react-bootstrap";
export default function Trash() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerRestore = (data) => {
    state.productData.map((val) => {
      if (val.id === data.id) {
        val.remove = false;
      }
      return state.productData;
    });
    const newArray = [...state.productData];
    dispatch(restoreProduct(newArray));
  };
  const handlerDelete = (data) => {
    const newArray = state.productData.filter((val) => {
      return val.id !== data.id;
    });
    dispatch(deleteProduct(newArray));
  };
  console.log(" trash ===>", state.productData);
  return (
    <div>
      <h1>Trash</h1>
      <div className="row">
        {state.productData.length !== 0 ? (
          state.productData.map((data) => {
            if (data.remove === true) {
              return (
                <div className="col" key={data.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={data?.file || "logo192.png"} />
                    <Card.Body>
                      <Card.Title>Title:{data.title}</Card.Title>
                      <Card.Text>
                        Price:{data.price}
                        <br />
                        Description:
                        {data.description}
                      </Card.Text>
                      <Button
                        className=" btn-primary"
                        onClick={() => {
                          handlerRestore(data);
                        }}
                      >
                        Restore
                      </Button>
                      <Button
                        className="btn btn-primary"
                        onClick={() => {
                          handlerDelete(data);
                        }}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            }
          })
        ) : (
          <h1>No Data </h1>
        )}
      </div>
    </div>
  );
}
