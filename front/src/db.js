const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Cambia la URL por la URL de tu base de datos MongoDB (local o en la nube)
    const conn = await mongoose.connect('mongodb://localhost:27017/nombre_de_tu_base_de_datos', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error de conexión: ${error.message}`);
    process.exit(1); // Termina el proceso en caso de error
  }
};

module.exports = connectDB;
