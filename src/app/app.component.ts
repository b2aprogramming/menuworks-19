import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconService } from '@core/services/icon.service';
import { ComponentsModule } from '@shared/components/components.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'menuworks-19-new';
  constructor(private iconService: IconService){

  }
}
