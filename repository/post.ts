import client from '../db/MySqlClient.ts';


interface Key {
    id?: any
}

export async function getPosts() { 
        return await client.execute("SELECT p.*,u.name  FROM posts as p INNER JOIN user as u ON p.user_id = u.id");
}

export async function insert({title, description, content,image,count_view = 0 , user_id }: { title: string; description: string,content: string, image: string, count_view: number ,user_id: number}) {
 return await client.execute('INSERT INTO posts(title, description, content,image,count_view, user_id) VALUES (?,?,?,?,?,?)',[title, description, content,image,count_view, user_id]);
}


export async function getPostById(params:Key = {}) { 
    return await client.execute(`SELECT * FROM posts where id = ?`,[params.id]);
}


export async function getPostByTitle(keyword: string) { 
    keyword = keyword.trim();
    console.log(keyword);
   var  query = "SELECT * FROM posts where title like ".concat("\'","%",keyword,"%","\'");
    return await client.execute(query);
}

export async function getTopView() { 
   var  query = "SELECT posts.*,user.name FROM posts INNER JOIN user ON posts.user_id = user.id ORDER BY count_view DESC LIMIT 4";
    return await client.execute(query);
}









