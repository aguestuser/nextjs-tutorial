import Link from "next/link"

const Index = () => (
  <div>
    <Link href="/about">
      <a style={{ fontSize: 20 }}>About Page</a>
    </Link>
    <p>Hello next!</p>
  </div>
)

export default Index
