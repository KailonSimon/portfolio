export default function Footer() {
  const today = new Date();
  return (
    <div className="footer" id="footer">
      <span>{`Designed & Built by Kailon Simon © ${today.getFullYear()}`}</span>
    </div>
  );
}
