/*
This page is to select whether user is admin or cashier.
Then user will redirect to their login page.
*/

function First() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-20 border-solid border-2 justify-self-auto">
        <p>Cashier</p>
      </div>
      <div className="w-20">
        <p>Admin</p>
      </div>
    </div>
  );
}

export default First;
