import client from '../db/MySqlClient.ts';

export async function isPostExist(id:number) {
    const result = await client.query(`SELECT COUNT(*) count FROM posts WHERE id = ?`, [id]);
    return result[0].count >= 1;
}


export async function doesUserExist(email: string, password: string) {
    const result = await client.query(`SELECT COUNT(*) count FROM user WHERE email = ? and password = ?`, [email, password]);
    return result[0].count >= 1;
}

export async function doesUserExist1(email: string, password: string) {
    const result = await client.query(`SELECT * FROM user WHERE email = ? and password = ?`, [email, password]);
    return result;
}