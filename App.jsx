import Buttons from "./Demo/Button";
import Index from "./Demo/WebData";
import App1 from "./ReactJs/addingInteractivity";
import AddingInteractivity from "./ReactJs/addingInteractivity";
import Square from "./Demo/square";
import Gallery from "./ReactJs/gallary";
import UpDateObject from "./ReactJs/upDateObjectinState";
import { InputForm } from "./component/inputForm";
import LoginOtp from "./component/loginOtp";

function App() {
  return (
    <>
      <div className="p-10">
        {/* <UpDateObject /> */}
        <InputForm />
        <LoginOtp />
      </div>
    </>
  );
}

export default App;
