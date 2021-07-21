import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/Action";
import { useHistory } from "react-router-dom";
export default function Cards() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const viewCard = (data) => {
    console.log("data", data);
    history.push({ pathname: "/ViewCard", data });
  };
  const handlerRemove = (data) => {
    state.productData.map((val) => {
      if (val.id === data.id) {
        val.remove = true;
      }
      return state.productData;
    });
    const newArray = [...state.productData];
    dispatch(removeProduct(newArray));
  };
  return (
    <>
      {state.serachWord !== "" || state.price !== 0 ? (
        <div className="row ">
          {state.allData.length !== 0 ? (
            state.allData.map((data) => {
              if (data.remove === false) {
                return (
                  <div className="col" key={data.id}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={data?.file || "logo192.png"}
                        alt="img"
                      />
                      <Card.Body>
                        <Card.Title>Title:{data.name}</Card.Title>
                        <Card.Text>
                          Price:{data.price}
                          <br />
                          Description:
                          {data.description}
                        </Card.Text>
                        <Button
                          className="btn btn-primary"
                          onClick={() => {
                            viewCard(data);
                          }}
                        >
                          view
                        </Button>
                        <Button
                          className="btn btn-primary"
                          onClick={() => {
                            handlerRemove(data);
                          }}
                        >
                          Remove
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })
          ) : (
            <h1>NO DATA</h1>
          )}
        </div>
      ) : (
        <div className="row">
          {state.productData.length !== 0 ? (
            state.productData.map((data) => {
              if (data.remove === false) {
                return (
                  <div className="col" key={data.id}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={data?.file || "logo192.png"}
                        alt="img"
                      />
                      <Card.Body>
                        <Card.Title>Title:{data.name}</Card.Title>
                        <Card.Text>
                          Price:{data.price}
                          <br />
                          Description:
                          {data.description}
                        </Card.Text>
                        <Button
                          className="btn btn-primary"
                          onClick={() => {
                            viewCard(data);
                          }}
                        >
                          view
                        </Button>
                        <Button
                          className="btn btn-primary"
                          onClick={() => {
                            handlerRemove(data);
                          }}
                        >
                          Remove
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })
          ) : (
            <h1>NO DATA</h1>
          )}
        </div>
      )}
    </>
  );
}
