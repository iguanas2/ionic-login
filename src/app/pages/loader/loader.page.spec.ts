import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderPage);
    imports: [AppRoutingModule];
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });
  it('should go to the login page after load', () => {
    spyOn(router, 'navigate');

    component.ngOnInit();

    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });
});
