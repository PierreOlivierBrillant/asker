import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {Question} from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  questions = [];
  currentQuestionIndex = 0;
  showingAnswer = false;

  currentFileName: string;

  @ViewChild('changeFile') changeFile: ElementRef;

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === 37) {
      this.previousQuestion();
    }

    if (event.keyCode === 32) {
      this.toggleAnswer();
    }

    if (event.keyCode === 39) {
      this.nextQuestion();
    }
  }

  loadFile(file: File) {
    this.currentFileName = file.name;
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = () => {
      this.readLines(reader.result.toString());
    };
  }

  readLines(content: string) {
    const lines = content.split('\n');
    for (const line of lines) {
      if (line !== '') {
        const lineItems = line.split('|');
        this.questions.push(new Question(lineItems[0], lineItems[1]));
      }
    }
  }

  clickChangeFile() {
    this.changeFile.nativeElement.click();
  }

  previousQuestion() {
    this.showingAnswer = false;
    if (this.currentQuestionIndex - 1 < 0) {
      this.currentQuestionIndex = this.questions.length - 1;
    } else {
      this.currentQuestionIndex--;
    }
  }

  toggleAnswer() {
    this.showingAnswer = !this.showingAnswer;
  }

  nextQuestion() {
    this.showingAnswer = false;
    if (this.currentQuestionIndex > this.questions.length - 2) {
      this.currentQuestionIndex = 0;
    } else {
      this.currentQuestionIndex++;
    }
  }

  loadDefault() {
    this.readLines(Question.DEFAULT);
  }
}
