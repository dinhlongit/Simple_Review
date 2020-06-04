import client from '../db/MySqlClient.ts';
import { insert } from '../repository/post.ts';
import { PostInterface } from '../contract/postInterface.ts';



export async function addNewPost ({ request, response }: { request: any; response: any }) {
    
   

    const body = await request.body();
    const postInfo: PostInterface = body.value;

    let status = 200;
   // console.log(postInfo);

    
    response.body = await insert(postInfo);

     response.status = status;
   

  }
  