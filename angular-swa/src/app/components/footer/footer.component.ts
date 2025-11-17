import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  name!: string;
  version!: string;
  isProduction = environment.production;

  ngOnInit(): void {
    this.name = environment.appName;
    this.version = environment.appVersion;
  }
}
