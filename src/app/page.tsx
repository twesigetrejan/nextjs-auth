import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import UserCard from "./components/UserCard"
export default async function HomePage() {
  const session = await getServerSession(options)

  return (
    <div className="">
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You shall not pass</h1>
      )
      }
    </div>
  )
}


