import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from './cartSlice'
import CartItem from './CartItem'
import Image from 'next/image'

export default function CartDrawer ({ isOpen, onClose }) {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  return (
    <div
      className={`fixed inset-y-0 right-0 pt-7 pr-[35px] pl-[27px] w-[417px] h-[747px] bg-white shadow-lg
              transform transition-transform duration-300 ease-in-out z-50
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className='p-4 flex justify-between items-center'>
        <h2 className='text-lg font-semibold'>Shopping Cart</h2>
        <button onClick={onClose} className='text-gray-500'>
            <Image src='/icons/close-cart.svg' alt='Close Icon' width={30} height={30} />
        </button>
      </div>

      <div className='p-4 space-y-4 overflow-y-auto h-[calc(100%-120px)]'>
        {items.length === 0 ? (
          <p className='text-gray-500'>Your cart is empty</p>
        ) : (
          items.map(item => <CartItem key={item.id} item={item} />)
        )}
      </div>

      <div className='p-4'>
        <button
          onClick={() => dispatch(clearCart())}
          className='w-full bg-red-500 text-white py-2 rounded-lg'
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}
