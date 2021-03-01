import s from "./style.module.scss";

import { cities } from "../../Data/Cities"

function Transportations(props:any) {
    function findGoodById(goodId:number):string {
        return props.goods.find((item:any) => {
            return item.id === goodId;
        }).title;
    }

    function getCityById(cityId:number) {
        return cities.find((city:any) => {
            return (city.id === cityId);
        })!.city
    }

    return (
        <>
            <h3>Shipping</h3>
                {props.orders.map((order:any) => {
                    return (
                        <div className={s['transported-goods-wrapper']}>

                            <div className={`${s['goods-box']} ${s[`goods-box-${order.goodId}`]}`}></div>
                            <div className={s['good-and-move-to']}>
                                <div className={s['from-to-town']}>
                                    {getCityById(order.currentCity) + '->' + getCityById(order.targetCityID)}
                                </div>
                            </div>
                            <div className={s['to-ship']}>
                                <div className={s.days}>{order.days}</div>
                                <button className={s['to-ship-btn']}>Ship</button>
                            </div>
                        </div>
                    )
                })}
                
        </>
    )
}

export default Transportations;