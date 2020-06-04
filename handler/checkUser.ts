import client from '../db/MySqlClient.ts';
import * as doesUserExists from '../specification/doesPostExist.ts';
import { UserInterface } from '../contract/user.ts';


export async function checkUserExist ({request, response }: {request: any, response: any }) { 
    
   
   
    const body = await request.body();
 
    const _user: UserInterface =body.value;

    const user = await doesUserExists.doesUserExist1(_user.email, _user.password);

    //console.log(hasRecord);
    let status = 200;

     if (user.length != 0){
     // get user by email
    // const result = await getPostById(params);
     response.body = { user };
     }else{
         response.body = { "error": "No" };
         status = 400;
     }

    // return response.status;
  }