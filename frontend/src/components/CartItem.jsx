import { Minus, Plus, Trash2 } from 'lucide-react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft">
    <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />
    <div className="flex-1">
      <h3 className="font-semibold text-slate-900">{item.name}</h3>
      <p className="text-sm text-slate-500">${item.price.toFixed(2)} each</p>
      <div className="mt-2 flex items-center gap-2">
        <button
          className="rounded-md border p-1"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        >
          <Minus size={14} />
        </button>
        <span className="min-w-5 text-center text-sm">{item.quantity}</span>
        <button
          className="rounded-md border p-1"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
    <div className="text-right">
      <p className="font-semibold text-indigo-600">${(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={() => onRemove(item.id)} className="mt-2 text-sm text-rose-500 hover:text-rose-600">
        <Trash2 size={16} className="inline" /> Remove
      </button>
    </div>
  </div>
);

export default CartItem;
