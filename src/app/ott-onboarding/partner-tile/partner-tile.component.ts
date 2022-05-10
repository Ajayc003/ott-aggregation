import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'partner-tile',
  templateUrl: './partner-tile.component.html',
  styleUrls: ['./partner-tile.component.scss']
})
export class PartnerTileComponent implements OnInit {

  constructor() { }

  @Input() partnerImage: string;
  @Input() partnerName: string;
  @Input() partnerCategory: string;
  @Input() subscriberCount: number;
  @Input() partnerRenewal: string;
  @Input() partnerId: string;

  ngOnInit(): void {
  }

}
