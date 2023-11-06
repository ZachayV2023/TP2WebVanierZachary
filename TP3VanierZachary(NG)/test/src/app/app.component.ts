import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

class Test {
  constructor(
    public TestId: number,
    public Name: string
  ){}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  tests: Test[] = [];
  newTest = new Test(0, "Test1");

  constructor(public http: HttpClient) {}

  async getTests() {
    let res = await lastValueFrom(this.http.get<Test[]>('http://localhost:5177/api/tests'))
    console.log(res);
    this.tests = res;
  }

  sendTest() {
    this.http.post<Test>('http://localhost:5177/api/tests', this.newTest).subscribe(res => {
      console.log(res)
    })
  }
}
