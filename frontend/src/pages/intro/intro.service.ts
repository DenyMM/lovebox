import { Injectable } from '@angular/core';
import { IntroSlide } from '../../model/introslide'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class IntroSlideService {

	constructor(
		private http: HttpClient,
	) {}

	private slidesUrl = 'http://localhost:3000/introslides';  // URL to web api

	getSlides(): Observable<IntroSlide[]> {
		return this.http.get<IntroSlide[]>(this.slidesUrl)
	}


}
