import client from '../db/MySqlClient.ts';
import { getPostByTitle } from '../repository/post.ts';
import * as doesPostExist from '../specification/doesPostExist.ts';
import { PostInterface } from '../contract/postInterface.ts';
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import destr from 'https://deno.land/x/destr/src/index.ts'

const decoder = new TextDecoder("utf-8");
export async function getPostByTitle2 ({ params, response }: { params: any; response: any }) { 
    const result = await getPostByTitle(params.keyword);
    response.body = result.rows;
  }