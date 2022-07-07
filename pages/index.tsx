import Link from "../node_modules/next/link";

export default function Home() {
  return (
    <div>
      hello word
      <Link href="/cart">
        Cart
      </Link>
    </div>
  )
}
