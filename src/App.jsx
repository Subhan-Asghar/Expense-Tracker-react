function App() {
  return (
    <>
      <div className=" min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex justify-center items-center">
      {/* <h3 className="text-2xl m-3 font-bold text-gray-900 dark:text-white">Expense Tracker</h3> */}
        <div className="bg-white h-96 w-80 rounded-xl shadow-lg p-6  absolute top-12">
        <h3 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
            Expense Tracker
          </h3>
          <h3 className="font-bold my-2">Balance:</h3>
          <div>
              <input
              className=" outline-none w-full " 
              type="number"
              placeholder="Add Balance"
               />
               </div>
              <hr />
       
  
       
        </div>
      </div>
    </>
  );
}

export default App;
