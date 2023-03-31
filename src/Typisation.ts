export type ShoppingListPropsType = {
    title: string
    goods: GoodType[]
    addGoods: (shoplistId: string, title: string) => void
    changeFilterValue: (shoplistId: string, filter: FilterValue) => void
    deleteGoods: (shoplistId: string, goodsId: string) => void
    changeGoodsStatus: (shoplistId: string, goodsId: string, inChecked: boolean) => void
    deleteTodoList: (shoplistId: string)=> void
    filter: FilterValue
    shoplistId: string
}
export type FilterValue = "All" | "Not to buy" | "Bought"

export type ShoplistsType = {
    id: string
    title: string
    filter: FilterValue
}

export type GoodsType = {
    [shoplistId: string]: GoodType[]
}

export type GoodType = {
    id: string
    title: string
    expectedPrice: string
    realPrice: string
    inCart: boolean
}