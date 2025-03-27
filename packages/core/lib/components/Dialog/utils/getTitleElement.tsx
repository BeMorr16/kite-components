// Render the correct element based on variant
export default function getTitleElement(
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h2",
  props: React.HTMLAttributes<HTMLHeadingElement>,
  children: React.ReactNode
) {
  switch (variant) {
    case "h1":
      return <h1 {...props}>{children}</h1>;
    case "h3":
      return <h3 {...props}>{children}</h3>;
    case "h4":
      return <h4 {...props}>{children}</h4>;
    case "h5":
      return <h5 {...props}>{children}</h5>;
    case "h6":
      return <h6 {...props}>{children}</h6>;
    case "h2":
    default:
      return <h2 {...props}>{children}</h2>;
  }
}
