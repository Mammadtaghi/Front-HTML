import style from "./index.module.css";

function BasketCard( {addToBasket, id, name, img, price}) {


  
  return (
    <div className={style.card}>
        <div className={style.imgContainer}>
          <img src={img} alt="" />
        </div>
        <h2 className={style.name}>{name}</h2>
        <span>{price}</span>
        <button onClick={()=>addToBasket({id, name, img, price})} className={style.addBtn}>Add To Basket</button>
    </div>
  )
}

export default BasketCard