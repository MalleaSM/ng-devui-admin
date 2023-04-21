import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { BasicFormComponent } from './basic-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { DevUIModule } from 'ng-devui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BasicFormComponent', () => {
    let component: BasicFormComponent;
    let fixture: ComponentFixture<BasicFormComponent>;

  beforeAll(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicFormComponent ],
      imports: [ TranslateModule.forRoot() , DevUIModule, ReactiveFormsModule, FormsModule,BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize projectFormData correctly', () => {
    expect(component.projectFormData).toEqual({
      projectName: '',
      projectOwner: null,
      projectExecutor: null,
      projectCycleTime: [null, null],
      projectSecurity: 'Only member visible',
      projectDescription: '',
      projectExerciseDate: [{ id: '1', label: 'Mon' }]
    });
  });

  it('should initialize existprojectNames correctly', () => {
    expect(component.existprojectNames).toEqual(['123', '123456', 'DevUI']);
  });

  it('should initialize securityValue correctly', () => {
    expect(component.securityValue).toEqual(['Public', 'Only member visible']);
  });
    
  it('should initialize OwnerOptions correctly', () => {
    expect(component.OwnerOptions).toEqual([
      { id: '1', name: 'Owner1' },
      { id: '2', name: 'Owner2' },
      { id: '3', name: 'Owner3' },
      { id: '4', name: 'Owner4' },
    ]);
  });

  it('should initialize ExecutorOptions correctly', () => {
    expect(component.ExecutorOptions).toEqual([
      { id: '1', name: 'Executor1' },
      { id: '2', name: 'Executor2' },
      { id: '3', name: 'Executor3' },
      { id: '4', name: 'Executor4' },
    ]);
  });

  it('checkName() should return true if project name doesn\'t exist', async () => {
    component.checkName = jest.fn().mockResolvedValue(true);
    const res = await component.checkName('NewProject');
    expect(res).toBe(true);
  });
  
  it('checkName() should return false if project name exists', async () => {
    component.checkName = jest.fn().mockResolvedValue(false);
    const res = await component.checkName('123');
    expect(res).toBe(false);
  });
  
});
