export default function Button({ href, children }) {
  if (href) {
    return (
      <a
        className="action-button link-button"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return <button className="action-button">{children}</button>;
}
