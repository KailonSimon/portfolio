export default function Button({ href, children }) {
  if (href) {
    return (
      <a className="action-button link-button" href={href}>
        {children}
      </a>
    );
  }
  return <button className="action-button">{children}</button>;
}
