import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  text1 = '';
  int1 = 0
  batasBawah = 0
  tengah = 0
  batasAtas = 0
  hasil = -1
  mulai = false

  constructor() {}

  ngOnInit() {

  }

  onClickSoal1(){
    this.text1 = ''
    for(var i = 0; i <= this.int1; i++){
      if(i== 0){
        this.text1 += i + '\n';
      }else if(i%3 == 0 && i%5 == 0){
        this.text1 += 'FizzBuzz' + '\n';
      }else if(i%3 == 0){
        this.text1 += 'Fizz' + '\n';
      }else if(i%5 == 0){
        this.text1 += 'Buzz' + '\n';
      }else{
        this.text1 += i + '\n';
      }
    }
  }

  onClickSoal2(){
    this.batasBawah = -1
    this.batasAtas = 101
    this.tengah = 50
    this.hasil = -1
    this.mulai = true
  }

  onClickYes(){
    this.batasBawah = this.tengah
    this.batasAtas = this.batasAtas
    this.tengah = Math.floor(this.batasBawah + ((this.batasAtas - this.tengah) / 2))
    if(this.batasBawah == this.tengah){
      this.hasil = this.batasBawah
    }
  }

  onClickNo(){
    this.batasBawah = this.batasBawah
    this.batasAtas = this.tengah
    this.tengah = Math.ceil(this.batasAtas - ((this.tengah - this.batasBawah) / 2))
    if(this.batasAtas == this.tengah){
      this.hasil = this.batasBawah
    }else if(this.tengah == 0){
      this.hasil = 0
    }
  }
}
