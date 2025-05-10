import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable, Type, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@env/environment';



export type HTTP_METHODS = 'get' | 'post' | 'put' | 'delete' |'patch';
export type PARAMS = [string, number | string | boolean];

export enum ApiMethods {
  Post = 'post',
  Get = 'get',
  Put = 'put',
  Delete = 'delete',
  Patch = 'patch',
}

interface ObjectKeyPair {
  [key: string]: any
}


interface ApiConfig<T> {
  baseUrl?: string;
  mock?: boolean;
  apiOrigin?: string;
  responseType?: string;
  body?: T;
  headers?: ObjectKeyPair;
  query?: ObjectKeyPair
  params?: PARAMS[]
}

interface PayLoad {
  [key: string]: any;
}
interface HttpHeadersData {
  headers?: ObjectKeyPair;
  responseType?: string;
}

export interface ApiURIData {
 mockUrl?: string;
 apiUrl?: string;
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private base = '';
  constructor(private http: HttpClient) {}

  public get<T,P=unknown>(url: ApiURIData, opt?: ApiConfig<P>): Observable<any>{
    return this.http.get(
      this.baseUrl(url, ApiMethods.Get, opt),
      this.mapHeaders(opt)
    ).pipe(catchError(this.errorHandleError.bind(this)));
  }
  public post<T>(url: ApiURIData, opt?: ApiConfig<T>): Observable<any>{
    return this.http.post<Response>(
      this.baseUrl(url, ApiMethods.Post, opt),
      opt?.body || null,
      this.mapHeaders(opt)
    ).pipe(catchError(this.errorHandleError.bind(this)))
  }
  public put<T>(url: ApiURIData, opt?: ApiConfig<T>): Observable<any>{
    return this.http.put<Response>(
      this.baseUrl(url, ApiMethods.Put, opt),
      opt?.body || null,
      this.mapHeaders(opt)
    )
    .pipe(catchError(this.errorHandleError.bind(this)));
  }
  public patch<T>(url: ApiURIData, opt?: ApiConfig<T>): Observable<any>{
    return this.http.patch<Response>(
      this.baseUrl(url, ApiMethods.Patch, opt),
      opt?.body || null,
      this.mapHeaders(opt)
    )
    .pipe(catchError(this.errorHandleError.bind(this)));
  }
  public delete<T>(url: ApiURIData, opt?: ApiConfig<T>): Observable<any>{
    return this.http.delete<Response>(
      this.baseUrl(url, ApiMethods.Delete, opt),
      this.mapHeaders(opt)
    )
    .pipe(catchError(this.errorHandleError.bind(this)));
  }

  public mapUrl(url: string, val: any, str: string): string {
    return url.replace(str, val);
  }


  public buildQuery(opt: PayLoad): string {
    let queryString = '';
    if(!opt) {
      return queryString;
    }
    Object.keys(opt).forEach((ele, i) => {
      if (i === 0) {
        queryString += `?${ele}=${opt[ele]}&`;
      } else {
        queryString += `${ele}=${opt[ele]}&`;
      }
    });
    const len = queryString.length;
    return queryString.slice(0, len - 1);
  }


  private mapParams(url: string, params: PARAMS[]): string {
    let uri = url;
    params.forEach((ele) => {
      uri = uri.replace(ele[0], ''+(ele[1]))
    });
    return uri;
  }

  private baseUrl(urlData: ApiURIData, type: any, opt?: ApiConfig<any>): string {
    let url = (environment.mock ?  urlData.mockUrl : urlData.apiUrl) as string;
    let URL = '';
    const apiUrl = opt?.baseUrl ?  opt?.baseUrl : environment.basUrl;
    if(url && url.startsWith('http') || url.startsWith('https')) {
      if(opt?.params?.length) {
        url = this.mapParams(url, opt.params);
      }
      let query = '';
      if (type === ApiMethods.Get || type === ApiMethods.Delete) {
        query = opt ? this.buildQuery(opt.query || {}) : '';
      }
      return url + query;
    }
    if (type === ApiMethods.Get || type === ApiMethods.Delete) {
      let query = opt ? this.buildQuery(opt.query || {}) : '';
      URL = apiUrl + this.base + url + query;
    } else if (type === ApiMethods.Post || type === ApiMethods.Put || type ===  ApiMethods.Patch) {
      URL = apiUrl + this.base + url;
    }
    return URL;
  }

  private errorHandleError(error: HttpErrorResponse) {

    if(navigator.onLine && error && error.error && error.error.message && (typeof error.error.message === 'string')) {
      if(
        error.error.message.indexOf('AnonymousUser') === -1 &&
        error.error.message.indexOf('Please enter email') === -1 &&
        error.error.message.indexOf('No Notification matches the given query') === -1 &&
        error.error.message.indexOf('Please enter city') === -1
        ) {
        // this.alertConfirmService.openAlert({
        //   type: 'alert',
        //   alertOptions: {
        //     message: error.error.message,
        //     header: 'Error!'
        //   }
        // }).then(() => {})
      }
    }
    if(!navigator.onLine && !document.querySelector('.internet-alert')) {
      // this.alertConfirmService.openAlert({
      //   type: 'alert',
      //   alertOptions: {
      //     message: 'Please check your internet connection',
      //     header: 'Error!',
      //     cssClass: 'internet-alert'
      //   }
      // }).then(() => {})
    }
    return throwError(error);
  }

  private mapHeaders(payload?: HttpHeadersData) {
    if(!payload) {
      return undefined
    }
    const headers: any = {};
    if (payload.headers) {
      headers.headers = new HttpHeaders(payload.headers);
    }
    if (payload.responseType) {
      headers.responseType = payload.responseType;
    }

    return headers;
  }
}
