function Avatar({ name }) {
    const initial = name.charAt(0).toUpperCase();
    const bgColor = "#"+((1<<24)*Math.random()|0).toString(16);
  
    return (
      <div style={{
        backgroundColor: bgColor,
        color: "white",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold"
      }}>
        {initial}
      </div>
    );
  }
  