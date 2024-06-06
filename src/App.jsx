import { Route, Routes } from "react-router-dom";
import IPAddress from "./Pages/IpAddress/Index";
import IPAddressImage from "./Pages/IPAddressImage/Index";
import SignUp from "./Pages/SignUp/Index";
import Verification from "./Pages/Verification/Index";
import AccountCreated from "./Pages/AccountCreated/Index";
import CreatePassword from "./Pages/CreatePassword/Index";
import SignIn from "./Pages/SignIn/Index";
import LandingPageMainUi from "./Pages/LandingPage/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/ipaddress" Component={IPAddress} />
        <Route path="/ipimages" Component={IPAddressImage} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/signin" Component={SignIn} />
        <Route path="/verify" Component={Verification} />
        <Route path="/created" Component={AccountCreated} />
        <Route path="/createpassword" Component={CreatePassword} />
        <Route path="/" Component={LandingPageMainUi} />
        <Route
          path="*"
          Component={
            <h1 className=" flex justify-center items-center h-screen w-screen">
              ROute Not found
            </h1>
          }
        />
      </Routes>
    </>
  );
}

export default App;
