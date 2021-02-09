import { Component, OnInit, OnDestroy } from '@angular/core';

import { apiImgUrl } from '../../core/inputs';

import { ResumeService } from '../../services/resume.service';

import { Subscription } from 'rxjs';
import { startWith  } from 'rxjs/operators';

import { resumeIcon, galleryIcon, locationIcon } from '../../core/inputs';


@Component({
  selector: 'app-centerbar-jobs',
  templateUrl: './centerbar-jobs.component.html',
  styleUrls: ['./centerbar-jobs.component.css']
})
export class CenterbarJobsComponent implements OnInit, OnDestroy {
  fragment!: string | null;

  jobsData!: any;

  apiImgUrl = apiImgUrl;

  // icons
  locationIcon = locationIcon;
  resumeIcon = resumeIcon;
  galleryIcon = galleryIcon;

  activitiesFilteredSubscription!: Subscription;

  constructor(
    private resumeService: ResumeService
  ) {

    this.activitiesFilteredSubscription = this.resumeService.activitiesFilteredData.subscribe(
      (data) => {
        this.jobsData = data.jobs;
        console.log(this.jobsData);
      },
      (error) => {
        console.log('error');
      }
    );

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('lalala jobs');
    this.activitiesFilteredSubscription.unsubscribe();
  }

}
