import routes from './src/router/routes'

export default {
    register(GRoutes){
        GRoutes.push(...routes)
    }
}