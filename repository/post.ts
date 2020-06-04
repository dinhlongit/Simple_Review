import client from '../db/MySqlClient.ts';


interface Key {
    id?: any
}

export async function getPosts() { 
        return await client.execute(`SELECT * FROM posts`);
}

export async function insert({title, description, content,image,count_view, user_id }: { title: string; description: string,content: string, image: string, count_view: number,user_id: number}) {
 return await client.execute('INSERT INTO posts(title, description, content,image,count_view, user_id) VALUES (?,?,?,?,?,?)',[title, description, content,image,count_view, user_id]);
}







