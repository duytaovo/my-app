class Path {
  constructor() {
    this.home = '/'
    this.login = '/login'
    this.register = '/register'
    this.product = '/product'
    this.productDetail = '/product/:idProduct'
    this.cart = '/cart'
    this.user = '/user'
    this.profile = this.user + '/profile'
    this.password = this.user + '/password'
    this.purchase = this.user + '/purchase'
    this.notFound = '*'
  }
}

export const path = new Path()
