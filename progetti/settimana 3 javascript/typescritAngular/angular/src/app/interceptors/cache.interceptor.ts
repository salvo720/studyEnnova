import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of, tap } from "rxjs";

const CACHE_KEY = 'cacheFetch';
const localCache = JSON.parse(`${localStorage.getItem(CACHE_KEY)}`) ?? {}
// const localCache = localStorage.setItem()
const cache: Record<string, any> = localCache;

export default class CacheInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("req httpinterceptor: ", req)
    console.log(`${req.method} - ${req.url} `);

    if(req.url.startsWith("http:")){
      // ,req.url.length-1);
      // se dobbiamo sostiutire solo per 1 occorrenza usiamo il replace su una stringa
      const url =  req.url.replace("http:","https:");
      console.log("url httpinterceptor " , url )
      return next.handle(req.clone({ url }));
    }


    const endpoint = req.urlWithParams.split('/').at(-1)
    console.log({ 'endpoint': endpoint });
    const isEndPointCached = endpoint && (endpoint in cache);
    if (isEndPointCached && req.method == 'GET') {
      return of(cache[endpoint])
    }
    return next.handle(req).pipe(
      tap((res) => {
        if (res instanceof HttpResponse) {
          cache[endpoint] = res['body'];
          localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
        }
      })
    );
  }
}
