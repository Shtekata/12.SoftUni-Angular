import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user: any;
  count: any;
  userId: any;
  currentUserId: any;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.userService.loadUsers().pipe(map(x => x.length), map(x => this.count = x)).subscribe();
    // this.router.navigate(['/user/test/best', 33]);
  }

  ngOnInit(): void {
    // const userId = this.route.snapshot.params.id;
    // this.userService.loadUser(this.userId).subscribe(x => this.user = x);

    // this.route.params.subscribe(x => {
    //   this.user = null;
    //   this.userService.loadUser(x.id).subscribe(y => this.user = y)
    // });
    // this.route.params.subscribe(({ id }) => {
    //   this.user = null;
    //   this.userService.loadUser(id).subscribe(y => this.user = y);
    // });

    // this.route.params
    //   .pipe(tap(() => this.user = null), switchMap(({ id }) => this.userService.loadUser(id)))
    //   .subscribe(x => this.user = x);
    this.route.params
      .pipe(tap(x => { this.currentUserId = +x.id; this.user = null; }), switchMap(x => this.userService.loadUser(x.id)))
      .subscribe(x => this.user = x);
  }

}
