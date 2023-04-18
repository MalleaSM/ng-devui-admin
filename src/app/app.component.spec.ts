import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [TranslateModule.forRoot()],
      providers: [TranslateService, TranslateStore],
    });

    appComponent = TestBed.createComponent(AppComponent).componentInstance;
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });
});
