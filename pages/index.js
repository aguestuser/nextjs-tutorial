import Link from "next/link"

const Index = () => (
  <div>
    <Link href="/about">
      <button>Go to about page</button>
    </Link>
    <p>Hello next!</p>
  </div>
)

export default Index
