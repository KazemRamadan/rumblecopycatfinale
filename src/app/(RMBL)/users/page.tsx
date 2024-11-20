import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";


export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Users',
};

type Users = {
  id: string;
  name: number;
  posts: string;
};

async function UsersPage() {
  const data = await fetch('https://rumblecopycat.vercel.app/api/users');
  const users: Users[] = await data.json();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
      {users.map((user: Users) => (
        <Card key={user.id} className="border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{user.posts}</p>
          </CardContent>
          <div className="p-4">
            <Button>
              Read More
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default UsersPage;
