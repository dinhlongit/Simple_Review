import client from '../db/MySqlClient.ts';
import { getPostById } from '../repository/post.ts';
import * as doesPostExist from '../specification/doesPostExist.ts';
import { PostInterface } from '../contract/postInterface.ts';


export async function getPost ({ params, response }: { params: any; response: any }) { 
    const hasRecord = await doesPostExist.isPostExist(params.id);
    let status = 200;

    if (hasRecord){
    const result = await getPostById(params);
    response.body = result.rows;
    }else{
        response.body = { "error": "Post not found!" };
        status = 400;
    }

    return response.status
  }