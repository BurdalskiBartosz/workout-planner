const LogoutButton = () => {
  return (
    <button
      className="cursor-pointer rounded bg-blue-500 px-5 py-2.5 text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 active:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      onClick={() => console.log("Logout button clicked")}
    >
      Log Out
    </button>
  );
};

export { LogoutButton };
