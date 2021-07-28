import FacebookLogin from "react-facebook-login";
import { useDispatch, useSelector } from "react-redux";
import { getFaceBookData } from "../redux/Action";
export default function SocialMedia() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
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
        </>
      ) : (
        <FacebookLogin
          appId="503585834279082"
          autoLoad={false}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
        />
      )}
    </div>
  );
}
