import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  square = Array(9).fill(null);
  player = "X"
  winner = ""
  xwin = 0;
  owin = 0;
  constructor() { }

  ngOnInit(): void {
  }
  move(pos: number){
    if (!this.winner && !this.square[pos]){
    this.square[pos] = this.player;
    if (this.winning()){
      this.winner = this.player;
    }
    this.player = this.player === "X" ? "O" : "X";
    }    
  }


  get status(){
    return this.winner ? `Player ${this.winner} Wins`:`Current Player is : ${this.player}`
  }
  
  winning(): boolean{
    const line = [[0,1,2], [3,4,5], [6,7,8], //rows
                  [0,3,6], [1,4,7,],[2,5,8], //colms
                  [0,4,8], [2,4,6] //dignals
                ];
    for (let i of line){
      if (this.square[i[0]] && this.square[i[0]] === this.square[i[1]]
         && this.square[i[1]] === this.square[i[2]]){
           return true
         }
    }  
    return false
  }

  newGame(){
    if (this.winner==="X"){
      this.xwin+=1
    }else if (this.winner === "O"){
      this.owin+=1
    }
    console.log(this.winner);
    console.log(this.xwin,this.owin);
    this.square = Array(9).fill(null);
    this.player = "X"
    this.winner = ""
  }

}
