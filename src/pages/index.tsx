import { trpc } from '../utils/trpc';

export default function Home() {
  const hello = trpc.useQuery(['hello', { text: 'client' }]);

    if (!hello.data) {
    return <div>Loading...</div>;
  }

    return <h1 className="grid place-items-center min-h-screen text-7xl">{hello.data.greeting}</h1>
}
