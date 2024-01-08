// importar la variable app
import app from './server.js'
// importar la variable connection
import connection from './database.js';
connection()
// despliegue en el puerto 3000
app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})