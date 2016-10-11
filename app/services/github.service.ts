import {Injectable} from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService{

    private username:string;
    private client_id =  '1b74fdeb2ab3978366b1';
    private client_secret =  "e249a3e4183c56c56e0e3f022961aac94e9e0bf5";

    constructor(private _http: Http){
        console.log("Github Service Ready...");
        this.username = "IraJerry";
    }
    getUser(){
        return this._http.get("http://api.github.com/users/" + this.username+"?client_id="+ 
        this.client_id+"&client_secret="+this.client_secret).map(res=>res.json());
    }

      getRepos(){
        return this._http.get("http://api.github.com/users/" + this.username+"/repos?client_id="+ 
        this.client_id+"&client_secret="+this.client_secret).map(res=>res.json());
    }

    updateUser(username:string){
        this.username = username;
        
    }

}