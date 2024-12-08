import { DataSource } from 'typeorm'

export const connectDB = async () => {
  const dataSource: DataSource = new DataSource({
    type: 'mysql',
    username: 'root',
    password: '123456',
    port: 3306,
    host: 'localhost',
    database: 'usersdb',
    entities: [],
    synchronize: false,
    ssl: false
  })

  dataSource
    .initialize()
    .then(() => {
      console.log('conectado a la DB')
    })
    .catch((error) => console.log(error))
}
