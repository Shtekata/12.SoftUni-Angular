import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./user.service";

@Injectable()
export class UserResolver implements Resolve<any> {

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        const id = +route.params.id;
        this.userService.currentId = id; 
        this.userService.loadUser(id);
        // let count = 0;
        // this.userService.userListCount$.subscribe(x => count = x);
        // this.userService.userListCount = count;
        // console.log(id, count);
    }
}