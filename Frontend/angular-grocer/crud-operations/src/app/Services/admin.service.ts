import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Model/model.product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  ipAddress:string="http://localhost:9090";

  constructor(public http:HttpClient) { }

  signIn(AdminId:string,Password:string){
    console.log(AdminId+Password);
    return this.http.post<{token:string}>('http://localhost:9090/admin/adminSignIn',{AdminId,Password});
  };
  
  storeProductDetailsInfo(productRef:any){
    this.http.post('http://localhost:9090/admin/product/addProductDetails',productRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  
  retrieveAllProductDetails():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:9090/admin/product/allProductDetails');
 }
  
 updateProductDetails(productRef:any):any{
  return this.http.put('http://localhost:9090/admin/product/updateProductDetails',productRef,{responseType:'text'})
}

deleteProductById(id:any):any{
  return this.http.delete('http://localhost:9090/admin/product/deleteProductDetailsById/'+id,{responseType:'text'});
}

generateDailyReport(date:any){
  return this.http.get(this.ipAddress+"/admin/reports/getDailyReport/"+date);
}

generateMonthlyReport(month:any){
  return this.http.get(this.ipAddress+"/admin/reports/getMonthlyReport/"+month);
}

generateUserReport(id:any){
  return this.http.get(this.ipAddress+"/admin/reports/getUserReport/"+id);
}

}
