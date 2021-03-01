import { useState } from "react";
import s from "./style.module.scss";

function Storage(props:any) {
    const [qty, setQty] = useState(0);
    const [targetCityId, setTargetCityId] = useState(1);

    function getEmptyCells() {
        if (props.storage.length < 8) {
            return Array(8 - props.storage.length).fill(0).map(() => {
                return <li
                    className={`${s['goods-box']} ${s['goods-box-empty']}`}></li>;
            });
        }
    }

    function findGoodById(goodId:number):string {
        return props.goods.find((item:any) => {
            return item.id === goodId;
        }).title;
    }
    return (
        <>
            <h3 className={s.storage}>My storage</h3>
        
            <ul className={s['goods-list']}>
                {props.storage.map((item:any) => {
                    return (
                        <> 
                            <li key={'storage-good-' + item.id} className=
                                {`${s['goods-box']} ${s[`goods-box-${item.id}`]}
                                ${props.selectedGood === item.id ? `${s['selected-box']}` : ''}`}
                                onClick={():void => {
                                    props.onSelectGood(item.id);
                                }}
                            >
                                 <div className={s['goods-title']}>
                                    {findGoodById(item.id)}, {item.qty} шт.
                                 </div>
                            </li>
                        </>
                    );
                })}

                { getEmptyCells() }
            </ul>

            {props.selectedGood ? (
                <div className={s['sell-panel']}>
                    <div className={s['selected-good']}>
                        {findGoodById(props.selectedGood)}
                    </div>
                    <div className={s.controls}>
                        <input maxLength={3}
                            type="text" 
                            className={s.input} placeholder='quantity'
                            value={qty ? qty : 0}
                            onChange={(e):void => {
                                setQty(parseInt(e.target.value));
                            }}
                        />
                        <button className={s['input-button']}
                            onClick={():void => {
                                props.onSell(props.selectedGood, qty);
                            }}
                        >
                            Sell
                        </button>
                    </div>
                </div>
            ) : ('')}

            <>
            <div className={s['ship-panel']}>
                    <div className={s['select-controls']}>
                        <select className={s['select-city']}
                            value={targetCityId} onChange={(e) => {
                                setTargetCityId(parseInt(e.currentTarget.value, 10));
                        }}>
                            <option value={1} >Berlin</option>
                            <option value={2} >Kazan</option>
                            <option value={3} >Beirut</option>
                        </select>
                        <button className={s['select-button']}
                            onClick={():void => {
                                props.onTransport(targetCityId)
                            }}
                        >
                            Ship
                        </button>
                    </div>
                </div>
            </>
        </>
    )
}

export default Storage;