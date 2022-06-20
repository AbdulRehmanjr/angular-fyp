import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {


  @Input()
  view: number = 4;
  @Input()
  iscompulsory: boolean = false;
  @Input()
  disabled: boolean = false;
  @Input()
  all: boolean = false;
  @Input()
  organizationId :any;
  // paginator data
  readonly allowedPageSizes = [5, 10];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;
  // paginator data end
  organizationForm:Organization = {

      id: 1,
      name: 'Organization 1',
      description: 'Description 1',
      active: true,

  }


  organizations :Organization[] = [
    {
      id: 1,
      name: 'Organization 1',
      description: 'Description 1',
      active: true,
    },
    {
      id: 2,
      name: 'Organization 2',
      description: 'Description 2',
      active: true,
    },
    {
      id: 3,
      name: 'Organization 3',
      description: 'Description 3',
      active: true,
    },
    {
      id: 4,
      name: 'Organization 4',
      description: 'Description 4',
      active: false,
    },
    {
      id: 5,
      name: 'Organization 5',
      description: 'Description 5',
      active: true,
    },
    {
      id: 6,
      name: 'Organization 6',
      description: 'Description 6',
      active: true,
    },
    {
      id: 7,
      name: 'Organization 7',
      description: 'Description 7',
      active: true,
    },
    {
      id: 8,
      name: 'Organization 8',
      description: 'Description 8',
      active: true,
    },
    {
      id: 9,
      name: 'Organization 9',
      description: 'Description 9',
      active: true,
    },
    {
      id: 10,
      name: 'Organization 10',
      description: 'Description 10',
      active: true,
    },





  ]

  @Output() edit = new EventEmitter();
  @Output() cancel = new EventEmitter();
  constructor(

  ) { }

  ngOnInit(): void {
    // this.datasource = this.organizations
  }

  agencyGet(){

  }
  update(info:any){
    this.edit.emit(info)
  }
  onToolbarPreparing(event:any){

  }

  OnSubmit(){
    console.log('submitted ')
    console.log(this.organizationForm)
  }
  submitNew(){
    this.organizationForm = {

      id: 1,
      name: '',
      description: '',
      active: true,

  }
  }
  cancels(){
    this.cancel.emit()
  }

}

interface Organization{
  id: number
  name: string
  description:string
  active:boolean
}
