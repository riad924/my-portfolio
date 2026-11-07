const Button = ({
  children,
  href,
  onClick,
  className = "",
  type = "button",
}) => {
  const baseClass =
    "flex items-center justify-center rounded-lg bg-primary px-6 py-2 text-sm font-semibold transition hover:bg-primary-hover";

  if (href) {
    return (
      <a href={href} className={`${baseClass} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;