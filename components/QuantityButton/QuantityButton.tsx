function QuantityButton() {
  return (
    <div className="border-2 border-green-900 rounded-full flex items-center justify-between w-20 hover:cursor-pointer">
      <button
        type="button"
        className="bg-green-900 rounded-full w-6 text-white"
      >
        -
      </button>
      <p>1</p>
      <button
        type="button"
        className="bg-green-900 rounded-full w-6 text-white"
      >
        +
      </button>
    </div>
  );
}

export default QuantityButton;
