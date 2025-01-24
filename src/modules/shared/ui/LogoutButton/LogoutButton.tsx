const LogoutButton = () => {
  return (
    <button
      className="bg-blue-500 text-white px-5 py-2.5 rounded cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-600 active:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
      onClick={() => console.log("Logout button clicked")}
    >
      Log Out
    </button>
  );
};

export { LogoutButton };
