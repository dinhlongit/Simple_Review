import client from '../db/MySqlClient.ts';


interface Key {
    id?: any
}

export async function getPosts() { 
        return await client.execute(`SELECT * FROM posts`);
}







