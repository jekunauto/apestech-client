import {HttpParams} from '@angular/common/http';

/*import { looseInvalid } from './loose-invalid'; && !looseInvalid(obj[key])*/

export function serialize(obj: any): HttpParams {
    let params = new HttpParams();

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            params = params.set(key, obj[key]);
        }
    }
    return params;
}
