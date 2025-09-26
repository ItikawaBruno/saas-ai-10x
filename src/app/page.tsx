import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import { useTRPC } from "@/trpc/client";

export default async function Page(){

  const trpc = useTRPC()
  trpc.hello.queryOptions({text:"Hello!"})

  const posts = await prisma.post.findMany();

  return(
    <div>
        {JSON.stringify(posts, null, 2)}
    </div>
  )
}