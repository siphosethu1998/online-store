import { TableCellsIcon, TrashIcon } from "@heroicons/react/24/outline";

const Cart = () => {
  return (
    <div className="bg-white flex items-center justify-between p-8 mx-auto w-11/12 rounded-lg shadow-sm">
      {/* placeholder company image */}
      <div className="flex items-center gap-4">
        <div className="bg-gray-200 flex w-24 h-24 justify-center items-center shadow-md rounded-md text-xl py-8 px-8 text-gray-400">
          200x200
        </div>
        <div>
          <p className="font-medium">Item name</p>
          <p>R(Item price)</p>
        </div>
      </div>
      <button>
        <TrashIcon className="size-8 text-red-600"/>
      </button>
    </div>
  )
}

export default Cart;