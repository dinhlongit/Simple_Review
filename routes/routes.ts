import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getAllPost } from '../handler/getAllPost.ts';
import { addNewPost } from '../handler/createPost.ts';

const router = new Router()


router.get("/api/posts", getAllPost).post("/api/posts",addNewPost)


export default router