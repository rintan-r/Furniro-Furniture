import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '@/store/cartSlice'
import CartItem from './CartItem'

export default function CartDrawer ({ isOpen, onClose }) {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  return (
    <div
      className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='p-4 flex justify-between items-center border-b'>
        <h2 className='text-lg font-semibold'>Shopping Cart</h2>
        <button onClick={onClose} className='text-gray-500'>
          ✕
        </button>
      </div>

      <div className='p-4 space-y-4 overflow-y-auto h-[calc(100%-120px)]'>
        {items.length === 0 ? (
          <p className='text-gray-500'>Your cart is empty</p>
        ) : (
          items.map(item => <CartItem key={item.id} item={item} />)
        )}
      </div>

      <div className='p-4 border-t'>
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
