import client from '../db/MySqlClient.ts';
import { getTopView } from '../repository/post.ts';


export async function getTopRank ({ response }: { response: any }) { 
    const result = await getTopView();
    response.body = result.rows;
  }
  