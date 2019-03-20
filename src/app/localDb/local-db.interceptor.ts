import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class LocalDbInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.url.includes('api.test.dev')) {
            return of(null).pipe(
                mergeMap(() => {
                    const body = {
                        id: 1,
                        name: 'Rankmi Code Kata',
                        short_name: 'rankmi',
                        show_in_home: false,
                        show_in_detail: true
                    };

                    return of(new HttpResponse({ status: 200, body }))
                })
            )
        }

        return next.handle(req);
    }
}
