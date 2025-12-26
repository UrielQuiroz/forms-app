import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [ JsonPipe ],
  templateUrl: './basic-page.html'
})
export class BasicPageComponent { }
