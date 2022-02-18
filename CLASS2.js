class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }
    getBookNames(){
        return this.libros.map(x=>x.nombre)
    }
}

const personaje1 = new Usuario ('Claudia', 'Medina' , [] , [] )
personaje1.addMascota('Perro')
personaje1.addMascota('Gato')
personaje1.addBook('El guardian entre el centeno', 'J. D. Salinger')
personaje1.addBook('Harry Potter', 'J. K. Rowling')
console.log('Cantidad de mascotas: '+ personaje1.countMascotas())
console.log('Nombre completo: '+ personaje1.getFullName())
console.log('Libros: '+ personaje1.getBookNames())