import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";

export default async function Page(){

  const posts = await prisma.post.findMany();

  return(
    <div>
        {JSON.stringify(posts, null, 2)}
    </div>
  )
}