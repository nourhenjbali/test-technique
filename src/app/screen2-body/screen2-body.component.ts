import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../country.model';

@Component({
  selector: 'app-screen2-body',
  templateUrl: './screen2-body.component.html',
  styleUrls: ['./screen2-body.component.scss']
})
export class Screen2BodyComponent implements OnInit { 
  country!: Country;

  constructor(private route: ActivatedRoute) {}
 
  ngOnInit(): void {
    this.country = history.state.country;
  }
}
