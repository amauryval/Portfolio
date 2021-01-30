import { Component, OnInit } from '@angular/core';

import { faPrint, faUserGraduate, faMapMarkerAlt, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { ResumeService } from '../../services/resume.service';
import { apiBaseUrl } from '../../core/inputs';


@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.css']
})
export class ResumeViewComponent implements OnInit {

  apiImgUrl = `${apiBaseUrl}/images/logo/`;

  // icons
  faPrint = faPrint;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faUserGraduate = faUserGraduate;
  faMapMarkerAlt = faMapMarkerAlt;
  faLanguage = faLanguage;

  // resume top bar
  profilData: any;
  contactData: any;

  // resume left sidebar
  degreesData: any;
  languagesData: any;
  trainingsData: any;

  generalData: any;

  constructor(
    private resumeService: ResumeService
  ) {

    this.resumeService.resumeData.subscribe(
      (data) => {
        this.contactData = data.contact;
        this.degreesData = data.education;
        this.generalData = data.general;
        this.languagesData = data.languages;
        this.profilData = data.profil;
        this.trainingsData = data.trainings;

      },
      (error) => {
        console.log('error');
      }
    );

   }

  ngOnInit(): void {
    this.resumeService.pullResumeGeneralData();
  }

}
