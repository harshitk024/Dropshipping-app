
import { MdFavoriteBorder } from "react-icons/md";

const Card = ({product}) => {


    return (
        <>
        <div className="col" style={{padding: "25px",display: "flex", flexDirection: "column", gap: "10px"}}>
         <div >
           <img style={{height: "200px"}} src = {product.image} />
         </div>
         <div style={{marginBottom: "10px",marginTop: "10px",fontWeight: "500"}}>
            {product.title}
         </div>
         <div style={{display: "flex",marginTop: "auto", alignItems: "center",gap: "10px"}}>
         <button className = "btn btn-outline-success" style={{borderRadius: "10px",flexGrow: 1}}>
            Add to Bag
         </button>
         <MdFavoriteBorder className = "fav-icon" style={{width: "25px",height: "40px", marginLeft: "auto"}} />
         </div>
        </div>
        </>
    )
}

export default Card;