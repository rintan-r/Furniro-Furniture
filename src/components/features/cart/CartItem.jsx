import { useDispatch } from 'react-redux'
import { removeFromCart } from './cartSlice'
import Image from 'next/image'

export default function CartItem ({ item }) {
  const dispatch = useDispatch()

  return (
    <div className='flex gap-3 items-center'>
      <img
        src={item.image}
        alt={item.title}
        className='w-16 h-16 object-cover rounded'
      />

      <div className='flex-1'>
        <h3 className='font-medium'>{item.title}</h3>
        <p className='text-sm text-gray-600'>
          Rp {item.price.toLocaleString()}
        </p>
        <p className='text-sm'>Qty: {item.quantity}</p>
      </div>

      <button
        className='text-red-500 text-sm'
        onClick={() => dispatch(removeFromCart(item.id))}
      >
          <Image src='/icons/close.svg' alt='User Icon' width={30} height={30} />
      </button>
    </div>
  )
}
