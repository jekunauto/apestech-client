import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as CryptoJS from 'crypto-js';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import {serialize} from '../../utils/serialize';

const ERP_BASE_URL: string = 'http://127.0.0.1:4200/router';

export enum RequestMethod {
    Get = 'GET',
    Head = 'HEAD',
    Post = 'POST',
    Put = 'PUT',
    Delete = 'DELETE',
    Options = 'OPTIONS',
    Patch = 'PATCH'
}

@Injectable()
export class ApiService {

    headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    });

    constructor(private http: HttpClient) {
    }

    get(path: string, args?: any): Observable<any> {
        const options = {
            headers: this.headers,
            withCredentials: true
        };

        if (args) {
            options['params'] = serialize(args);
        }

        return this.http.get(path, options)
            .catch(this.checkError.bind(this));
    }

    post(method: string, body: any, customHeaders?: HttpHeaders): Observable<any> {
        const data = body || {};
        data.method = method;
        data.appKey = '00001';
        const secret = 'abcdeabcdeabcdeabcdeabcde';
        data.version = '1.0';
        data.sign = this.sign(data, secret);
        return this.request(ERP_BASE_URL, serialize(data), RequestMethod.Post, customHeaders);
    }

    put(path: string, body: any): Observable<any> {
        return this.request(path, body, RequestMethod.Put);
    }

    delete(path: string, body?: any): Observable<any> {
        return this.request(path, body, RequestMethod.Delete);
    }

    private request(path: string, body: any, method = RequestMethod.Post, custemHeaders?: HttpHeaders): Observable<any> {
        const req = new HttpRequest(method, path, body, {
            headers: custemHeaders || this.headers,
            withCredentials: true
        });

        return this.http.request(req)
            .filter(response => response instanceof HttpResponse)
            .map((response: HttpResponse<any>) => response.body)
            .catch(error => this.checkError(error));
    }

    // Display error if logged in, otherwise redirect to IDP
    private checkError(error: any): any {
        if (error && error.status === 401) {
            console.log('401---------------------');
        } else {
            console.log(error);
        }
        throw error;
    }

    private sign(param: object, secret: string) {
        // 对参数名进行字典排序
        const arrayParam: any[] = [];
        // tslint:disable-next-line:one-line
        // tslint:disable-next-line:forin
        for (const key in param) {
            arrayParam.push(key);
        }
        arrayParam.sort();
        // 拼接有序的参数名-值串
        const paramArray = new Array();
        paramArray.push(secret);
        // tslint:disable-next-line:prefer-const
        for (let i of arrayParam) {
            paramArray.push(i + param[i]);
        }
        paramArray.push(secret);
        // SHA-1编码，并转换成大写，即可获得签名
        const shaSource = paramArray.join('');
        const sign = CryptoJS.SHA1(shaSource).toString(CryptoJS.enc.Hex).toUpperCase();
        return sign;
    }

// tslint:disable-next-line:eofline
}
