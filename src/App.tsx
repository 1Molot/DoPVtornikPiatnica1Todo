import React, {useState} from 'react';
import './App.css';
import {ShoppingList} from "./components/ShoppingList";
import {FilterValue, GoodsType, GoodType, ShoplistsType} from "./Typisation";
import {v1} from "uuid";


function App() {

    let shoplist1 = v1()
    let shoplist2 = v1()

    const addGoods = (shoplistId: string, title: string) => {
        const getRandomNumberForExpectedPrice = Math.floor((Math.random() * 10) + 1)
        const getRandomNumberForRealPrice = Math.floor((Math.random() * 10) + 1)
        const addNewGoods = {
            id: v1(),
            title: title,
            expectedPrice: `$${getRandomNumberForExpectedPrice}`,
            realPrice: '$' + getRandomNumberForRealPrice,
            inCart: false
        }
        const goodsForUpdate = goods[shoplistId]
        const updatedGoods = [...goods[shoplistId], addNewGoods]
        const goodsCopy = {...goods}

        setGoods({...goods, [shoplistId]: [addNewGoods, ...goods[shoplistId]]})
    }

    const [shoplists, setShoplists] = useState<ShoplistsType[]>([
        {id: shoplist1, title: "What to buy", filter: "All"},
        {id: shoplist2, title: "What to buy today", filter: "All"},
    ])

    const [goods, setGoods] = useState<GoodsType>({
        [shoplist1]: [
            {id: v1(), title: 'Milk', expectedPrice: '$1.99', realPrice: '$1.99', inCart: true},
            {id: v1(), title: 'Bread', expectedPrice: '$0.99', realPrice: '$0.89', inCart: true},
            {id: v1(), title: 'Coca-Cola', expectedPrice: '$1.49', realPrice: '$1.49', inCart: true},
            {id: v1(), title: 'Eggs', expectedPrice: '$2.49', realPrice: '$3.99', inCart: false},
        ],
        [shoplist2]: [
            {id: v1(), title: 'Milk123', expectedPrice: '$1.99', realPrice: '$1.99', inCart: true},
            {id: v1(), title: 'Bread123', expectedPrice: '$0.99', realPrice: '$0.89', inCart: false},
            {id: v1(), title: 'Coca-Cola123', expectedPrice: '$1.49', realPrice: '$1.49', inCart: true},
            {id: v1(), title: 'Eggs123', expectedPrice: '$2.49', realPrice: '$3.99', inCart: false},
        ],
    })
    const changeFilterValue = (shoplistId: string, filter: FilterValue) => {
        setShoplists(shoplists.map(el => el.id === shoplistId ? {...el, filter: filter} : el))
        // setFilter(filter)
    }

    const deleteGoods = (shoplistId: string, id: string) => {
        setGoods({...goods, [shoplistId]: goods[shoplistId].filter(el => el.id !== id)})
        // setGoods(goods.filter(el => el.id !== id))
    }

    const changeGoodsStatus = (shoplistId: string, goodsId: string, inChecked: boolean) => {
        setGoods({...goods, [shoplistId]: goods[shoplistId].map(el => el.id === goodsId ?  {...el, inCart: inChecked} : el)})
        // setGoods(goods.map(el => el.id === goodsId ? {...el, inCart: inChecked} : el))
    }

//Дописать
const deleteTodoList = (shoplistId: string) => {
    setShoplists(shoplists.filter(el => el.id !== shoplistId))
    delete shoplists[shoplistId]
}

    const mappedShoplists = shoplists.map(sl => {

        let filteredGoods: Array<GoodType> = []
        if (sl.filter === 'All') {
            filteredGoods = goods[sl.id]
        }
        if (sl.filter === 'Not to buy') {
            filteredGoods = goods[sl.id].filter(el => el.inCart !== true)
        }
        if (sl.filter=== 'Bought') {
            filteredGoods = goods[sl.id].filter(el => el.inCart === true)
        }

        return (
            <ShoppingList
                key={sl.id}
                title={sl.title}
                goods={filteredGoods}
                addGoods={addGoods}
                changeFilterValue={changeFilterValue}
                deleteGoods={deleteGoods}
                changeGoodsStatus={changeGoodsStatus}
                filter={sl.filter}
                deleteTodoList={deleteTodoList}
                shoplistId={sl.id}
            />
        )
    })

    return (
        <div className="App">
            {mappedShoplists}
        </div>
    );
}

export default App;
