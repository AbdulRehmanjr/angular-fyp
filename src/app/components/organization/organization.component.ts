import { Component, OnInit, ViewChild } from '@angular/core';
import { OrganizationsComponent } from 'src/app/Modules/organizations/organizations.component';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  @ViewChild("organizations") organizations: OrganizationsComponent;
  @ViewChild("addorganization") addorganization: OrganizationsComponent;
  @ViewChild("editorganization") editorganization: OrganizationsComponent;
  constructor() { }

  ngOnInit(): void {
  }

  addNew(){
    this.addorganization.submitNew();
    ($("#add") as any ).modal("show");
  }
  edit(data:any){
    const row = data
    this.editorganization.organizationForm = {
      id: row.data.id,
      name: row.data.name,
      description: row.data.description,
      active: row.data.active
    };
    // jquery to set modal
    ($("#edit") as any).modal("show");
  }

  cancel() {

    ($("#add") as any).modal("hide");
    ($("#edit") as any).modal("hide");
    console.log('cancel')
  }
}
