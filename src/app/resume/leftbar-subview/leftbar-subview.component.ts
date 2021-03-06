import { Component, OnInit, Input } from '@angular/core';

import { faUserGraduate, faMapMarkerAlt, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { apiLogoUrl } from '../../core/inputs';

import { degreeIcon, languageIcon, locationIcon } from '../../core/inputs';



@Component({
  selector: 'app-leftbar-subview',
  templateUrl: './leftbar-subview.component.html',
  styleUrls: ['./leftbar-subview.component.scss']
})
export class LeftbarSubviewComponent implements OnInit {

  @Input() degreesData: any;
  @Input() languagesData: any;
  @Input() trainingsData: any;

  apiLogoUrl = apiLogoUrl;

  inputDegreesData: any;
  inputLanguagesData: any;
  inputTrainingsData: any;

  // icons
  degreeIcon = degreeIcon;
  locationIcon = locationIcon;
  languageIcon = languageIcon;

  constructor() { }

  ngOnInit(): void {
    this.inputDegreesData = this.degreesData;
    this.inputLanguagesData = this.languagesData;
    this.inputTrainingsData = this.trainingsData;
  }

}
