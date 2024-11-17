import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const metadata = {
  title: "My Writings",
};

export type Post = {
  id: number;
  title: string;
  content: string;
};

const MyWritingsPage = async () => {
  const session = await getKindeServerSession();

  if (session && await session.getAccessToken()) {
    const response = await fetch("http://localhost:3000/api/posts/myposts", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${session.getAccessToken()}`,
      },
    });

    if (!response.ok) {
      return <div>No posts available.</div>;
    }

    const posts: Post[] = await response.json();

    if (!posts || posts.length === 0) {
      return <div>No posts available.</div>;
    }

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

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};

export default MyWritingsPage;
