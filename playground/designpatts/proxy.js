/**
 * Proxy Pattern:
 * for a client that makes api calls to a subject (via rest/http, rpc, in same process, etc), 
 * a proxy has identical interface to subject, but intercepts the request and enhances the request before forwarding to subject
 * 
 * client -> proxy.methodA(){ enhance, forward()} -> subject.methodA(){...}
 *
 * Ex: expressjs middleware = proxy function:
 *      (proxy) middleware(req, res, next){ enhance the req, etc}
 *      (subject) controller(req, res, next){...}
 * 
 * common use cases:
 *  - validations: validate input
 *  - security: auth/auth
 *  - caching: response cache etc
 *  - lazy initialization: if creating subject is exprensive, proxy can delay it to when its necessary
 *  - logging
 *  - remote objects: take object located remotely and make it appear local (ie: get session data from redis store)
 *      
 */

 /**
  * proxy implementation techniques
  * - can intercept all methods or only some, while simply delegating res of methods directly to subject
  * 
  * 1) Object composition
  */