import img from "./cats-cat.gif"

const ItemListContainer = (props) => {
  return (
    <div style={{
        backgroundColor:"#0000ff40",
        color: "#faf8fb",
        textAlign: "center",
        padding:"25px",
        }}>
      <img src={img} alt="gato-tecleando"/>
      <h1>{props.mainTitle}</h1>
      <h2>{props.mainSubTitle}</h2>
    </div>
  )
}

export default ItemListContainer