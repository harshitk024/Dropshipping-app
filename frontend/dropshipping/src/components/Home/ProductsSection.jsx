import Card from "./ProductCard";

const ProductSection = ({products,label}) => {

  console.log(products)

  const productList = products.map((pr) => <Card key = {pr.id} product={pr}/> )
  return (
    <>
      <div style={{padding: "30px", fontFamily: "Anton FC", fontWeight: "600"}}>
        <h1>{label}</h1>
      </div>
      <div
        class="container text-center"
        id="product-container"
      >
        <div class = "row row-cols-5" style={{gap: "2rem", justifyContent: "center"}}>
          {productList}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
