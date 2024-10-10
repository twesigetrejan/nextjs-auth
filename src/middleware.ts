// without a defined matcher, this one line applies next-auth to the entire project
// or you can use a matcher
export { default } from "next-auth/middleware"

// export const config = {
//     matcher: ['/about/:path*', '/dashboard/:path*'],
//   }