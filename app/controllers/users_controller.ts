// import type { HttpContext } from '@adonisjs/core/http'
import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  async index({ inertia }: HttpContext) {
    const users = await User.all()
    return inertia.render('users/index', {
      users: users,
    })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('users/create')
  }

  async store({ inertia, request }: HttpContext) {
    await User.create({
      fullName: request.input('name'),
      email: request.input('email'),
      password: request.input('password'),
    })
    return inertia.location('/users')
  }
}
