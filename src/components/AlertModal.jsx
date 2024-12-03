
const AlertModal = ({ message, type, onclose }) => {
  if (!message) return null;

  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="p-6 rounded-lg shadow-lg w-80w max-w-[400px] bg-white caret-transparent">
              <h3 className={`text-2xl  font-semibold ${type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {type === "success" ? "Success" : "Error"}
              </h3>
              <p className="mt-2">{message}</p>
              <button 
                  onClick={onclose} 
                  className="mt-4 px-4 py-2 bg-MazeRedColor items-end text-white font-semibold rounded-lg hover:bg-black">
                  Close
              </button>
          </div>
      </div>
  );
};

export default AlertModal;
