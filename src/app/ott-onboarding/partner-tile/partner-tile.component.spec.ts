import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerTileComponent } from './partner-tile.component';

describe('PartnerTileComponent', () => {
  let component: PartnerTileComponent;
  let fixture: ComponentFixture<PartnerTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
