import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  perrillos = [
    {
      "usuario": "@unosperrillos",
      "src":  "../assets/images/pedillos.jpg",
      "caption": "unos perrillos...."
    },
    {
      "usuario": "@unosperrillos",
      "src": "../assets/images/ansiedad.jpg",
      "caption": "me da amsiedad"
    },
    ];
}
