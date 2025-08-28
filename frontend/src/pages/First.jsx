/*
This page is to select whether user is admin or cashier.
Then user will redirect to their login page.
*/
import Reactpic from "../assets/react.svg"

function First() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-52 border-solid border-2 justify-items-center p-10 m-4">
        <img src={Reactpic} className="my-2"/>
        <p className="">Cashier</p>
      </div>
      <div className="w-52 border-solid border-2 justify-items-center p-10 m-4">
        <img src={Reactpic} className="my-2"/>
        <p>Admin</p>
      </div>
    </div>
  );
}

export default First;
