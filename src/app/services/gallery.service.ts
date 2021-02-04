import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { apiBaseUrl } from '../core/inputs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private apiUrlActivitiesGallery = apiBaseUrl + 'gallery_activities?';
  ErrorActivitiesGalleryApiFound: Subject<string> = new Subject<string>();
  activitiesGalleryData: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient
  ) { }

  pullExistingActivitiesGallery(
    activityName: string | null,
    categoryName: string | null
  ): void {


    this.http.get<any>(`${this.apiUrlActivitiesGallery}activity_name=${activityName}&category_name=${categoryName}`).subscribe(
      (response) => {
        this.activitiesGalleryData.next(response);
      },
      (response) => {
        // TODO improve error message, but API need improvments
        this.ErrorActivitiesGalleryApiFound.next(response.error.message);
      }
    );
  }

  }
