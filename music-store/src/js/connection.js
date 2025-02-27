import mysql from 'mysql2';

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'musicstore'
});

connection.connect(err => {
    if(err){
        console.log('Error trying to connect to MySQL');
        return;
    }
    console.log('Connection success');
});

export {
    connection
}