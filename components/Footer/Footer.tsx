function Footer() {
  return (
    <footer className="bg-green-900 fixed bottom-0 w-full">
      <div className="container mx-auto py-3 flex justify-end">
        <div className="flex gap-6 items-center">
          <button
            type="button"
            className="text-gray-400 bg-white border-2 border-gray-400 font-bold px-6 py-2 rounded-md"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="text-white bg-gray-400 font-bold px-6 py-2 rounded-md"
          >
            Finalizar pedido
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
