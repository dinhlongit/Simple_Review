import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getAllPost } from '../handler/getAllPost.ts';
import { addNewPost } from '../handler/createPost.ts';
import { getPost } from '../handler/getPost.ts';
import { checkUserExist } from '../handler/checkUser.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { Application } from 'https://deno.land/x/oak/mod.ts'
import { getPostByTitle2 } from '../handler/getPostByTitle.ts';
import { getTopRank } from '../handler/getTopView.ts';

const app = new Application();
const router = new Router();


router.get("/api/posts", getAllPost)
      .post("/api/posts",addNewPost)
      .get("/api/posts/:id",getPost)
      .post("/api/auth/login",checkUserExist)
      .get("/api/search/:keyword",getPostByTitle2)
      .get("/api/ranks",getTopRank);


app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());

console.info(`CORS-enabled web server listening on port 8000`);



export default router