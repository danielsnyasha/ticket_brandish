// app/posts/[id]/page.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface PostProps {
  id: string;
}

interface PostData {
  title: string;
  content: string;
}

// Simulated data fetching function
async function getPostData(id: string): Promise<PostData | null> {
  // In a real application, this could be an API call
  const posts: Record<string, PostData> = {
    '1': { title: 'First Post', content: 'This is the first post.' },
    '2': { title: 'Second Post', content: 'This is the second post.' },
  };
  return posts[id] || null;
}

export default function PostPage() {
  const params = useParams<PostProps>();
  const [postData, setPostData] = useState<PostData | null>(null);

  useEffect(() => {
    if (params?.id) {
      getPostData(params.id).then((data) => {
        setPostData(data);
      });
    }
  }, [params]);

  if (!postData) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
    </div>
  );
}
