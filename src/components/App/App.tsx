import React, {useEffect, useState} from "react";

import "./style.scss";

import Cities from "../Cities/Cities"
import CitiyStorage from "../CityStorage/CityStorage"
import Storage from "../Storage/Storage"
import Transportations from "../Transportations/Transportations"
import Stats from "../Stats/Stats"
import Footer from "../Footer/Footer"


function App() {
    const [currentCity, setCurrentCity] = useState(1);

    const [selectedGood, setSelectedGood] = useState(1)
    const [storages, setStorages] = useState([
        {
            cityId: 1,
            storage: [
                {
                    id: 1,
                    qty: 10,
                },
                {
                    id: 2,
                    qty: 20,
                },
                {
                    id: 3,
                    qty: 5,
                },
                {
                    id: 4,
                    qty: 15,
                },
                {
                    id: 5,
                    qty: 55,
                },
            ],
        },
        {
            cityId: 2,
            storage: [
                {
                    id: 1,
                    qty: 5,
                },
                {
                    id: 6,
                    qty: 15,
                },
                {
                    id: 7,
                    qty: 55,
                },
            ],
        },
        {
            cityId: 3,
            storage: [
                {
                    id: 8,
                    qty: 5,
                },
            ],
        }
    ]);

    const [cityStorages, setCityStorages] = useState([
        {
            city: 'Berlin',
            cityId: 1,
            storage: [
                {
                    id: 2,
                    priceStats: [50, 75, 54, 66, 73, 90, 59],
                    maxStep: 10,
                    minPrice: 30,
                    maxPrice: 100,
                },
                {
                    id: 7,
                    priceStats: [85, 96, 82, 101, 102, 89, 93],
                    maxStep: 8,
                    minPrice: 84,
                    maxPrice: 103,
                },
            ],
        },
        {
            city: 'Kazan',
            cityId: 2,
            storage: [
                {
                    id: 1,
                    priceStats: [12, 21, 10, 22, 15, 19, 14],
                    maxStep: 5,
                    minPrice: 10,
                    maxPrice: 54,
                },
                {
                    id: 3,
                    priceStats: [21, 16, 19, 22, 21, 18, 28],
                    maxStep: 7,
                    minPrice: 11,
                    maxPrice: 42,
                },
            ],
        },
        {
            city: 'Beirut',
            cityId: 3,
            storage: [
                {
                    id: 8,
                    priceStats: [111, 160, 119, 122, 121, 118, 128],
                    maxStep: 25,
                    minPrice: 100,
                    maxPrice: 175,
                },
            ],
        }
    ]);

    const goods = [
        {
            id: 1,
            title: "Mushrooms",
        },
        {
            id: 2,
            title: "Wood",
        },
        {
            id: 3,
            title: "Milk",
        },
        {
            id: 4,
            title: "Seeds",
        },
        {
            id: 5,
            title: "Vegetables",
        },
        {
            id: 6,
            title: "Stone",
        },
        {
            id: 7,
            title: "Tools",
        },
        {
            id: 8,
            title: "gold",
        },
    ]

    const [money, setMoney] = useState(1000)
    const [days, setDays] = useState(1)

    const [transportOrders, setTransprotOrders] = useState([])

    function getStorageByCity():object[] {
        const store = storages.find((storage) => {
            return storage.cityId === currentCity;
        });

        if (store) return store.storage
        return []
    }

    function getGeneralCityStorage() {
        const store = cityStorages.find((storage) => {
            return storage.cityId === currentCity;
        });

        if (store) return store.storage
        return []
    }

    function getRandomInt(max:number):number {
        return Math.floor(Math.random() * Math.floor(max))
    }

    function updateCityStorages():void {
        const newCityStorages:any = cityStorages;

        for (let cityInd = 0; cityInd < newCityStorages.length; cityInd++) {
            const storage = newCityStorages[cityInd].storage;

            for (let goodInd = 0; goodInd < storage.length; goodInd++) {
                const goodData = storage[goodInd]; // id, price... 
                const priceChangeSign = getRandomInt(2) ? 1 : -1;
                const priceChangeValue = getRandomInt(goodData.maxStep)  * priceChangeSign;
                
                let newPrice = goodData.priceStats.slice(-1).pop()!
                    + priceChangeValue;

                if (newPrice > goodData.maxPrice) newPrice = goodData.maxPrice
                if (newPrice < goodData.minPrice) newPrice = goodData.minPrice
                    
                for (let i = 0; i < goodData.priceStats.length - 1; i++) {
                    goodData.priceStats[i] = goodData.priceStats[i + 1]
                }

                goodData.priceStats[goodData.priceStats.length - 1] = newPrice;

                newCityStorages[cityInd][goodInd] = goodData;
            }
        }

        setCityStorages(newCityStorages);
    }

    function sellGood(goodId:number, qty:number):void {
        if (qty < 0) return
        
        const storagesNew = storages;
        let newMoney:number = money;

        const index:number = storagesNew.findIndex(storage =>
        storage.cityId === currentCity);
        
        if (index > -1) {
            const goodOnSellIndex:number = storagesNew[index].storage.findIndex(good => {
              return  good.id === goodId
            });

            if (goodOnSellIndex > -1) {
                const currentCityStorage = getGeneralCityStorage();

                const goodIndex:number = currentCityStorage.findIndex((good) => {
                    return good.id === goodId;
                });

                if (goodIndex > -1) {
                    const pricesStatsLenght = currentCityStorage[goodIndex].priceStats.length
                    
                    const price:number = currentCityStorage[goodIndex]
                        .priceStats[pricesStatsLenght - 1];

                    if (storagesNew[index].storage[goodOnSellIndex].qty >= qty) {
                        storagesNew[index].storage[goodOnSellIndex].qty -= qty;
                        newMoney += qty * price;
    
                        if (storagesNew[index].storage[goodOnSellIndex].qty === 0) {
                            removeGood(storagesNew[index].storage[goodOnSellIndex].id)
                        }
                        setMoney(newMoney);
                    }
                }
            }
        }
        setStorages(storagesNew);
    }

    function byuGoods(goodId:number, qty:number, goodPrice:number):void {
        const totalPrice = qty * goodPrice;

        console.log(totalPrice)

        if (money < totalPrice) return;

        const storagesNew = storages;
        const index:number = storagesNew.findIndex(storage =>
            storage.cityId === currentCity);
        
        if (index > -1) {
            const goodOnSellIndex:number = storagesNew[index].storage.findIndex(good =>
                good.id === goodId);

            if (goodOnSellIndex > -1) {
                storagesNew[index].storage[goodOnSellIndex].qty += qty;
            } else {
                storagesNew[index].storage.push({
                    id: goodId,
                    qty: qty
                })
            }
        }

        setStorages(storagesNew);
        setMoney(money - totalPrice);
    }

    function getCityStorage() {
        const store = cityStorages.find(storage =>
            storage.cityId === currentCity
        );

        if (store) return store.storage
        return []
    }

    function removeGood(goodId:number) {
        const storagesNew = storages;

        const index:number = storagesNew.findIndex(storage =>
            storage.cityId === currentCity);
        
        if (index > -1) {
            const goodOnSellIndex:number = storagesNew[index].storage.findIndex(good => {
              return  good.id === goodId
            });

            if (goodOnSellIndex > -1) {
                storagesNew[index].storage.splice(goodId, 1)
            }
        }

        setStorages(storagesNew);
    }

    function createTransportOrder(targetCityID:number) {
        const newOrders:any = [...transportOrders];

        const storage:any = getStorageByCity();
        const goodInd = storage.findIndex((good:any) => good.id === selectedGood)

        if (goodInd < 0) return;

        newOrders.push({
            currentCity: currentCity,
            targetCityID,
            goodId: selectedGood,
            qty: storage[goodInd].qty,
            days: 16
        });

        removeGood(selectedGood);
        setTransprotOrders(newOrders);
    }

    function updateTransportationDays() {
        setTransprotOrders((oldOrders:object[]) => {
            const newOrders:any = [...oldOrders];

            newOrders.forEach((orders:any, i:number) => {
                if (orders.days >= 1) orders.days -= 1;
            });

            return newOrders;
        });
    }

    function lifeCycle() {
        setInterval(() => {
            updateCityStorages();
            updateTransportationDays();
            setDays((days) => days + 1);
        }, 5000)
    }

    useEffect(() => {
        lifeCycle();
    }, []);

    return(
        <div className="app">
            <h1 className="app-name">
                Greatest Seller
            </h1>

            <Cities 
                currentCity={currentCity}
                onChange={(city:number):void => {
                    setCurrentCity(city);
                }}
            />

            <div className="content">
                <div className="column-left">
                    <div className="storage">
                        <Storage
                            currentCity={currentCity}
                            storage={getStorageByCity()}
                            selectedGood={selectedGood}
                            goods={goods}
                            onSelectGood={(goodId:number):void => {
                                setSelectedGood(goodId)
                            }}
                            onSell={(goodId:number, qty:number) => {
                                sellGood(goodId, qty);
                            }}
                            onTransport={(targetCityID:number) => {
                                createTransportOrder(targetCityID)
                            }}
                        />
                    </div>
                    <div className="transportations">
                        <Transportations orders={transportOrders} goods={goods}/>
                    </div>
                    <div className="stats">
                        <Stats days={days} money={money}/>

                    </div>
                </div>

                <div className="column-right">
                    <div className="city-storage">
                        <CitiyStorage storage={getCityStorage()} onBuy={(goodId:number, qty:number, goodPrice:number) => {
                            byuGoods(goodId, qty, goodPrice);
                        }}/>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default App;