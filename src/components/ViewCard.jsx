import React from "react";
import { useHistory } from "react-router";
import { Button } from "react-bootstrap";
export default function ViewCard(props) {
  const data = props.location.data;
  const history = useHistory();
  console.log("view card", data);
  return (
    <div>
      <div className="row mt-5">
        <div className="col mt-5">
          <img src={data?.file || "logo192.png"}></img>
        </div>
        <div className="col mt-5">
          <h3>Title</h3>
          <p>{data.name}</p>
          <h3>price</h3>
          <p>{data.price}</p>
          <h3>Description</h3>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="mt-5">
        <Button
          variant="primary"
          onClick={() => {
            history.goBack();
          }}
        >
          GO BACK{" "}
        </Button>
      </div>
    </div>
  );
}
