import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Biomarker';
  description: string;

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.service.getOnsDescription().subscribe((data: any) => {
    this.description = data.data[0]?.attributes?.description?.processed;
    })
  }
}
