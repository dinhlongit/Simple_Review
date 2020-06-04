import client from '../db/MySqlClient.ts';
import { getPostById } from '../repository/post.ts';
import * as doesPostExist from '../specification/doesPostExist.ts';
import { PostInterface } from '../contract/postInterface.ts';
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import destr from 'https://deno.land/x/destr/src/index.ts'


const decoder = new TextDecoder("utf-8");
export async function getPost ({ params, response }: { params: any; response: any }) { 
    const hasRecord = await doesPostExist.isPostExist(params.id);
    let status = 200;
    if (hasRecord){
    const result = await getPostById(params);
    var counts = destr(result.rows);
    counts = counts[0].count_view;
    var view_incre = counts + 1 ;
    await client.execute('UPDATE posts SET count_view=? WHERE id = ?',[view_incre, params.id])
    response.body = result.rows;
    }else{
        response.body = { "error": "Post not found!" };
        status = 400;
    }
    return response.status
  }