import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEntryComponent } from './delete-entry.component';

describe('DeleteEntryComponent', () => {
  let component: DeleteEntryComponent;
  let fixture: ComponentFixture<DeleteEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
