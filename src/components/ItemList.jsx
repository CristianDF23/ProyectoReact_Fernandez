import { Items } from "./Item"

export const ItemList = ({items}) =>{
    return items.map((item) => <Items key={item.id} item={item} />)
}