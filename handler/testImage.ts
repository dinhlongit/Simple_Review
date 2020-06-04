import client from '../db/MySqlClient.ts';

export async function importImage ({ request ,response }: { request: any ,response: any }) { 
    const body = await request.body();
    console.log(body);
  }