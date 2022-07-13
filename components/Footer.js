export default function Footer() {
  const today = new Date();
  return (
    <div className="footer" id="footer">
      <span style={{ marginTop: 8, fontSize: "50%", fontWeight: 400 }}>
        {`Designed & Built by Kailon Simon © ${today.getFullYear()}`}
      </span>
    </div>
  );
}
