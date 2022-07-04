import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "ByWings - Hadil Abdelaoui";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: "keywords", content: "Web Developer, Software Engineer, Data Scientist, TensorFlow Developer, AWS Engineer, ByWings Hadil, Hadil Abdelaoui Live Resume, Hadil Abdelaoui Resume, Hadil Abdelaoui CV, Curriculum Hadil Abdelaoui, HADIL Resumé, hadil live resume" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Hadil Abdelaoui" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2022-07-01", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: "Hello, I'm a Software Engineering student with experience in web development, machine learning, deep learning and AWS technologies. Find out more in my resume!" }
    );
  }
}
