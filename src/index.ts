import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './schema/types/typeDefs'
import { resolvers } from './schema/resolvers/resolvers'
import app from './app'
import { connectDB } from './db'

const main = async () => {
	try {
		await connectDB()
		const apolloServer = new ApolloServer({
			typeDefs,
			resolvers
		})

		await apolloServer.start()

		apolloServer.applyMiddleware({ app })

		app.listen(3000)
		console.log('listening on port 3000')
	} catch (error) {
		console.log(error)
	}
}
main()
