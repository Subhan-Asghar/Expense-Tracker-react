import { useState } from "react";
function App() {
  const [Income, setIncome] = useState(0);
  const [addIncome, setAddIncome] = useState(0);
  const [Balance, setBalance] = useState(0);
  const [expense, setexpense] = useState(0);
  const [amount, setamount] = useState(0);
  const [title, settitle] = useState("");
  const [history, sethistory] = useState([]);

  const incomeHandler = () => {
    const newIncome = Number(Income) + Number(addIncome);
    setIncome(newIncome);
    setBalance(Number(Balance) + Number(addIncome));
  };
  const transactionHandler = () => {
    const newExpense = Number(expense) + Number(amount);
    const newBalance = Number(Balance) - Number(amount);
    setexpense(newExpense);
    setBalance(newBalance);
    const historyset = { title, amount: Number(amount) };
    sethistory([historyset, ...history]);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
          {/* Expense Tracker */}
          <div className="bg-white h-auto w-80 rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
              Expense Tracker
            </h3>
            <h3 className="font-bold my-2">Income:</h3>
            <div className="flex items-center space-x-2 mb-4">
              <input
                onChange={(e) => {
                  setAddIncome(e.target.value);
                }}
                className="outline-none w-full border border-gray-300 rounded-md p-2"
                type="number"
                placeholder="Add Income"
              />
              <button
                className="font-bold bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                onClick={incomeHandler}
              >
                Add
              </button>
            </div>
            <hr className="w-full mb-4" />

            {/* Transaction */}
            <h3 className="font-bold text-xl my-2 text-center">
              New Transaction:
            </h3>
            <h3 className="font-bold my-2">Title:</h3>
            <input
              className="outline-none w-full border border-gray-300 rounded-md p-2 mb-4"
              type="text"
              placeholder="Enter Title"
              onChange={(e)=>{settitle(e.target.value)}}
            />
            <hr className="w-full mb-4" />
            <h3 className="font-bold my-2">Amount:</h3>
            <input
              className="outline-none w-full border border-gray-300 rounded-md p-2 mb-4"
              type="number"
              placeholder="Add Amount"
              onChange={(e) => {
                setamount(e.target.value);
              }}
            />
            <hr className="w-full mb-4" />
            <div className="flex justify-center">
              <button
                className="font-bold bg-blue-500 text-white rounded-md w-full py-2 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                onClick={transactionHandler}
              >
                Add Transaction
              </button>
            </div>
          </div>

          {/* Dashboard */}
          <div className="bg-white h-auto w-80 rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Dashboard
            </h3>
            <div className="flex flex-row justify-between">
              <h3 className="font-bold my-2">Total Balance:</h3>
              <h3 className="font-bold my-2">${Balance}</h3>
            </div>
            <hr className="w-full mb-4" />
            <div className="flex flex-row justify-around">
              <h3 className="font-bold my-2">Income</h3>
              <h3 className="font-bold my-2">Expense</h3>
            </div>
            <div className="flex flex-row justify-around">
              <h3 className="font-bold my-2 text-green-600">${Income}</h3>
              <h3 className="font-bold my-2 text-red-600">${expense}</h3>
            </div>
            <hr className="w-full mb-4" />
            <div>
              <h3 className="font-bold my-2 text-center">History</h3>
              <div className="overflow-y-scroll bg-white h-64 p-4 rounded-md">
                {
                  history.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between font-bold text-blue-500 mb-2 p-2 border-b border-gray-700"
                    >
                      <span>{item.title}</span>
                      <span className="text-red-600">-${item.amount}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
