import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedLink = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(selectedLink: string) {
    this.selectedLink.emit(selectedLink);
  }

}
