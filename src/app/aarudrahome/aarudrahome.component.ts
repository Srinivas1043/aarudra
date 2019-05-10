import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aarudrahome',
  templateUrl: './aarudrahome.component.html',
  styleUrls: ['./aarudrahome.component.css']
})
export class AarudrahomeComponent implements OnInit {

  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  
  constructor() { }

  ngOnInit() {
    $(() => {
      $('#aarudraHeader').show();
  });
  }

}
