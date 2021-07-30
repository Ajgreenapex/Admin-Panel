import FacebookLogin from "react-facebook-login";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { getFaceBookData, removeFaceBookData } from "../redux/Action";
export default function SocialMedia() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const logOut = () => {
    const data = {};
    dispatch(removeFaceBookData(data));
  };
  const responseFacebook = (response) => {
    console.log(response);
    const temp = {
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    };
    console.log("data============>", temp);
    dispatch(getFaceBookData(temp));
  };

  //   const componentClicked = () => {
  //     console.log("click");
  //   };
  console.log("state===========>", state);
  return (
    <div>
      <br />
      <br />
      <br />
      {state.faceBookData?.isLoggedIn ? (
        <>
          <br />
          <br />
          <br />
          <div
            style={{
              width: "400px",
              margin: "auto",
              background: "#f4f4f4",
              padding: "20px",
            }}
          >
            <img
              src={state.faceBookData.picture}
              alt={state.faceBookData.name}
            />
            <h2>Welcome {state.faceBookData.name}</h2>
            Email: {state.faceBookData.email}
          </div>
          <Button onClick={logOut} variant="primary">
            Logout
          </Button>
        </>
      ) : (
        <FacebookLogin
          appId="2305046002977551"
          autoLoad={false}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
        />
      )}
    </div>
  );
}
