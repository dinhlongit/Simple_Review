import client from '../db/MySqlClient.ts';
import { getPosts } from '../repository/post.ts';

export async function getAllPost ({ response }: { response: any }) { 
  const result = await getPosts();
  response.body = result.rows;
}


