const Loader = () => {
  return (
    <div
      style={{
        position: "fixed", // Poori screen cover karo
        top: 0,
        left: 0,
        width: "100vw", // Full width
        height: "100vh", // Full height
        backgroundColor: "rgba(255,255,255,0.9)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999, // Sab ke upar rahega
      }}
    >
      {/* ── Spinner ── */}
      <div
        className="spinner-border text-primary"
        style={{ width: "60px", height: "60px" }}
        role="status"
      />

      {/* ── Text ── */}
      <p className="mt-3 fw-semibold text-muted" style={{ fontSize: "16px" }}>
        Please wait...
      </p>
    </div>
  );
};

export default Loader;
