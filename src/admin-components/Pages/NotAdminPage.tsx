import Lottes from "../../assets/Animation - 1698860872176.json";
import Lotte from "lottie-react";

function NotAdminPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div>
        <Lotte animationData={Lottes} style={{ width: "600px" }} />
      </div>

      <h1 style={{ margin: 0, padding: 0, color: "white" }}>in progress</h1>
    </div>
  );
}

export default NotAdminPage;
