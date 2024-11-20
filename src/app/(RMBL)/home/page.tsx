import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Home",
};

export type Post = {
  id: number;
  title: string;
  content: string;
};

async function HomePage() {
  const data = await fetch("http://localhost:3000/api/posts");
  const posts: Post[] = await data.json();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
      {posts.map((post: Post) => (
        <Card key={post.id} className="border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
          <div className="p-4">
            <Button>Read More</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default HomePage;
