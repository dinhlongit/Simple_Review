import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getAllPost } from '../handler/getAllPost.ts';

const router = new Router()


router.get("/api/posts", getAllPost)


export default router