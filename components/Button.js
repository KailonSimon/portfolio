export default function Button({ href, children }) {
  if (href) {
    return (
      <a className="action-button link-button bg-quaternary" href={href}>
        {children}
      </a>
    );
  }
  return <button className="action-button bg-quaternary">{children}</button>;
}
