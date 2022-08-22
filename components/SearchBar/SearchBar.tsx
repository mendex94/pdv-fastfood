function SearchBar() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Seja bem vindo!</h1>
      <input
        type="text"
        placeholder="O que você procura?"
        className="focus-visible:none px-4"
      />
    </div>
  );
}

export default SearchBar;
