// utilizamos la dependencia sqlite3
const SQLite = require('sqlite3').verbose();

// utilizamos la dependencia path para indicar ubicacion
const path = require('path')
const Module = require('module')

// indicamos la ubicacion de la base de datos
const dbubicacion = path.resolve(__dirname, './Sistema.db')

const db = new SQLite.Database(dbubicacion, (Error) => {
    if (Error) {
        console.log(' Error en :', Error)
    } else {
        console.log('Base de datos creada o conectada')
        db.run
            (`
            CREATE TABLE IF NOT EXISTS Usuario(ID INTEGER PRIMARY KEY AUTOINCREMENT,Usuario TEXT UNIQUE, Contraseña TEXT, Nombre TEXT, Email TEXT)
            `), (Error) => {
                if (Error) {
                    console.log('no se pudo crear la tabla')
                } else {
                    console.log('tabla creada')
                }
            }
        db.run
            (`
            CREATE TABLE IF NOT EXISTS Productos
            (Codigo INTEGER PRIMARY KEY AUTOINCREMENT,
            Nombre TEXT, Precio INTEGER, Cantidad INTEGER, 
            Descripcion TEXT, 
            Categoria TEXT
            )`, (Error) => {
                if (Error) {
                    console.log('no se pudo crear la tabla')
                } else {
                    console.log('tabla creada')
                }
            })
            
    }
         db.run(
            `
                CREATE TABLE IF NOT EXISTS Email(
                    ID INTEGER PRIMARY KEY AUTOINCREMENT,
                    Email TEXT,
                    Asunto TEXT,
                    Cuerpo TEXT
                )
            `),(Error)=>{
                if(Error){
                    console.error('La Tabla no se Creo ❌')
                }
                else{
                    console.log('La Tabla se Creo Correctamente ✅')
                }
            }
             db.run(`CREATE TABLE IF NOT EXISTS Usuarios(
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Nombre TEXT NOT NULL,
            Email TEXT NOT NULL UNIQUE,
            Contraseña TEXT NOT NULL,
            Verificacion INTEGER NOT NULL DEFAULT 0,
            TokenEmail TEXT
        )`, (Error)=>{
            if(Error){
                console.error('Error al crear la tabla Usuarios: ⛔', Error.message);
            }
            else{
                console.log('Tabla Usuarios creada o ya existente ✅');
            }
        });
})

module.exports = db;