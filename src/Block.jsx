function Block({ number, color }) {
  let bgStyle = {
    width: "70px",
    backgroundColor: color,
    height: "70px",
    fontSize: "3rem",
    fontWeight: "bold",
    float: "left",
    border: "1px solid white",
    marginRight: "4px",
    marginTop: "4px",
    paddingBottom: "4px",
    color: "white",
    borderRadius:'5px',
    verticalAlign: "middle",
    borderColor: "#363638",
    lineHeight: "70px", // Center vertically
    textAlign: "center", // Center horizontally
  };


  return <div style={bgStyle}>{number}</div>;
}

export default Block;
