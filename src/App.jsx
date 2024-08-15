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
          <div className="flex flex-row">
              <input
              className=" outline-none w-full mx-2 " 
              type="number"
              placeholder="Add Balance"
               />
               <button className=" font-bold bg-blue-500 text-white rounded-md w-14 h-7 hover:bg-blue-600 transition-colors duration-300 ease-in-out">Add</button>
               </div>
              <hr className="w-64" />

              {/* Transaction */}
          <h3 className="font-bold text-xl my-2 text-center">New Transaction:</h3>
          <h3 className="font-bold my-2">Title:</h3>
          <input
              className=" outline-none w-full mx-2 " 
              type="text"
              placeholder="Enter Title"
               />
              <hr className="w-64" />
              <h3 className="font-bold my-2">Amount:</h3>

              <input
              className=" outline-none w-full mx-2 " 
              type="number"
              placeholder="Add Amount"
               />               
              <hr className="w-64" />
              <div className="flex justify-center">
            <button className="font-bold bg-blue-500 my-4 text-white rounded-md w-64 h-10 hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              Add Transaction
            </button>
          </div>
       
       
  
       
        </div>
      </div>
    </>
  );
}

export default App;
