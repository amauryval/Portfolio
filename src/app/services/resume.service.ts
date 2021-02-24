import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { apiUrl } from '../core/inputs';


@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private apiUrlResumeData = apiUrl + 'resume_static_data';
  ErrorResumeDataApiFound: Subject<string> = new Subject<string>();
  resumeData: Subject<any> = new Subject<any>();

  private apiUrlGraphData = apiUrl + 'activities_graph_data?';
  errorActivitiesChartApiFound: Subject<string> = new Subject<string>();
  ActivitiesChartData: Subject<any> = new Subject<any>();

  private apiUrlSkillsFilteredData = apiUrl + 'skills_filtered?';
  errorUrlSkillsFilteredApiFound: Subject<string> = new Subject<string>();
  skillsFilteredData: Subject<any> = new Subject<any>();

  private apiUrlActivitiesFilteredData = apiUrl + 'activities_filtered?';
  errorUrlActivitiesFilteredApiFound: Subject<string> = new Subject<string>();
  activitiesFilteredData: Subject<any> = new Subject<any>();

  constructor(
      private http: HttpClient
  ) {}

  pullResumeGeneralData(): void {

    this.http.get<any>(this.apiUrlResumeData).subscribe(
      (response) => {
        this.resumeData.next(response);
      },
      (response) => {
        // TODO improve error message, but API need improvments
        this.ErrorResumeDataApiFound.next(response.error.message);
      }
    );
  }

  pullActivitiesGraphData(
    isTechnics: boolean | string,
    isThemes: boolean | string,
    isTools: boolean | string,
    currentDateValue: number,
    grouperProjects: boolean | string,
    grouperJobs: boolean | string
  ): void {
    this.http.get<any>(
      `${this.apiUrlGraphData}technics=${isTechnics}&themes=${isThemes}&tools=${isTools}&start_date=${currentDateValue}&group_projects=${grouperProjects}&group_jobs=${grouperJobs}`
    ).subscribe(
      (response) => {
        this.ActivitiesChartData.next(response);
      },
      (response) => {
        // TODO improve error message, but API need improvments
        this.errorActivitiesChartApiFound.next(response.error.message);
      }
    );
  }

  pullSkillsResumeFromGraph(
    currentDate: number,
    isThemes: boolean | string,
    isTechnics: boolean | string,
    isTools: boolean | string,
    fromSkill: string | null,
  ): void {
    this.http.get<any>(
      `${this.apiUrlSkillsFilteredData}start_date=${currentDate}&technics=${isTechnics}&themes=${isThemes}&tools=${isTools}&from_feature=${fromSkill}`
    ).subscribe(
      (response) => {
        this.skillsFilteredData.next(response);
      },
      (response) => {
        // TODO improve error message, but API need improvments
        this.errorUrlSkillsFilteredApiFound.next(response.error.message);
      }
    );
  }

  pullActivitiesResumeFromGraph( // TODO RENAME IT
    currentDate: number,
    fromSkill: string | null,
  ): void {
    this.http.get<any>(
      `${this.apiUrlActivitiesFilteredData}start_date=${currentDate}&from_feature=${fromSkill}`
    ).subscribe(
      (response) => {
        this.activitiesFilteredData.next(response);
      },
      (response) => {
        // TODO improve error message, but API need improvments
        this.errorUrlActivitiesFilteredApiFound.next(response.error.message);
      }
    );
  }

}
