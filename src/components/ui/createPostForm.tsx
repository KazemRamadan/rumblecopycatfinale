'use client';

import { createPost } from '@/lib/actions/post.actions';

export default function CreatePostForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const id = (formData.get('id') as string);
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    try {
      await createPost(id, title, content);
      alert('Post created successfully!');
      form.reset(); // Clear the form after successful submission
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="number" id="id" name="id" required />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" required></textarea>
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}
