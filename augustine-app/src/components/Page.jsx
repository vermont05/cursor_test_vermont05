export default function Page({ title, children }) {
  return (
    <div className="page">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  )
}
