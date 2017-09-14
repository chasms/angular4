import { Component, OnInit, Input } from '@angular/core';

import { God } from '../god';

@Component({
  selector: 'app-god-detail',
  templateUrl: './god-detail.component.html',
  styleUrls: ['./god-detail.component.css']
})
export class GodDetailComponent implements OnInit {
  god: God;

  constructor() {}

  ngOnInit() {}

}
