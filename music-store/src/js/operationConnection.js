 import { connection } from "./connection.js";

 const query = 'select * from admins';
 const addAdminQuery = 'insert into admins (id,email,pass) VALUES (?,?)';

 connection.query(query,(err,results) =>{
    if(err) {
        console.error('Error at the Query',err);
        return;
    }
    console.log('Results:',results);
 });

 function registerAdmin(email,pass){
        connection.query(sql,[email,pass],(err,result) =>{
            if(err){
                console.error('Connection error on registerAdmin')
            }
            console.log('New Admin Registered properly',result);
        });
 }


export {
    registerAdmin
}