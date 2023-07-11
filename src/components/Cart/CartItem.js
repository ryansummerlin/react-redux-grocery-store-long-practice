import { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { incrementProduce, decrementProduce, removeProduce, changeCount } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const inputRef = useRef();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const dispatch = useDispatch();

  const onClickPlus = function() {
    dispatch(incrementProduce(item));
  }

  const onClickMinus = () => {
    dispatch(decrementProduce(item));
  }

  const removeItem = useCallback(() => {
    dispatch(removeProduce(item));
  }, [dispatch, item]);

  const handleCountChange = (e) => {
    // need to add code to remove an item when it goes below zero AND gets clicked off of. Can't do it just when it goes to
    // zero or it will remove the item every time I try to change the count
    // This is basically ok now. It doesn't work if you just click off but it will check vor val < 0 when the input is no longer the
    // active element
    let val = parseInt(e.target.value) || e.target.value;
    dispatch(changeCount(item, val));
  }

  useEffect(() => {
    if (document.activeElement !== inputRef.current) {
      if (count < 1) {
            removeItem();
          }
    }
  }, [count, removeItem]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          ref={inputRef}
          onChange={handleCountChange}
        />
        <button
          className="cart-item-button"
          onClick={onClickPlus}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={onClickMinus}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={removeItem}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
