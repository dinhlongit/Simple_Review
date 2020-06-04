import client from '../db/MySqlClient.ts';
import * as doesUserExists from '../specification/doesPostExist.ts';
import { UserInterface } from '../contract/user.ts';


export async function checkUserExist ({request, response }: {request: any, response: any }) { 
    
   
   
    const body = await request.body();
 
    const _user: UserInterface =body.value;

    const hasRecord = await doesUserExists.doesUserExist(_user.email, _user.password);
    let status = 200;

     if (hasRecord){
     // get user by email
    // const result = await getPostById(params);
     response.body = { "validate": "Yes" };
     }else{
         response.body = { "error": "No" };
         status = 400;
     }

    // return response.status;
  }