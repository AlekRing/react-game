import s from "../style.module.scss"
import { useState } from "react";


function StorageGood(props:any) {
    let [qty, setQty] = useState(0);

    function getPrice(good:any):number {
        return good.priceStats[good.priceStats.length - 1];
    };

    return (
        <div className={s['goods-input-box']}>
          <div className={`${s['goods-box']} ${s[`goods-box-${props.good.id}`]}`} />
          <p className={s['good-price']}>Price: {getPrice(props.good)}</p>
          <input type="text" 
            className={s.input} placeholder='quantity'
            value={qty ? qty : 0}
            maxLength={3}
            onChange={(e):void => {
              setQty(parseInt(e.target.value));
            }}
          />
          <button className={s['input-button']}
            onClick={():void => {
              props.onBuy(props.good.id, qty, getPrice(props.good));
              setQty(0);
          }} >
            Buy
          </button>
        </div>
    )
}

export default StorageGood;