class TicTacToe {
   constructor() {     
      this.body = [];
      let idCounter = 1;            
      for ( let s = 0; s <= 8; s++ ) {         
         this.body.push( {
            id: idCounter,     
            number: 0,                            
         } );
         idCounter++;         
      }
   }

   getHTML( size ) {     
      const rootElement = document.createElement( 'div' );
      rootElement.classList.add( "sudoku-game" );
      rootElement.style.width = `${ size }px`;
      rootElement.style.height = `${ size }px`;      

      for ( const cell of this.body ) {         
         const inputElement = document.createElement( 'input' );         
         inputElement.classList.add( "sudoku-segment" );         
         inputElement.setAttribute( "type", "image" );                     
         inputElement.setAttribute( "src", "nologo.png" );         
         
         inputElement.addEventListener( 'click', event => this.clickHandler( event, cell, inputElement ) );  
         
         rootElement.append( inputElement );
      }          
      
      return rootElement;
   }

   clickHandler ( event, cell, inputElement ) {

      if ( event && this.numEmpty() % 2 === 1 ) {
         cell.number = 1;         
         inputElement.setAttribute( "src", "sblogo.png" );                     
      } else if ( event && this.numEmpty() % 2 === 0 ) {
         cell.number = 2;         
         inputElement.setAttribute( "src", "wmlogo.png" );                 
      }    
       
      this.gameOver();         
   }

   numEmpty() {
      let emptyCells = 0;
      for ( const cell of this.body ) {
         
         if ( cell.number === 0 )
            emptyCells++;
      }    
      
      return emptyCells;
   }

   gameOver() {

      if ( this.isWin() === 1 ) {
         let modal = document.getElementById('myModal');
         //let btn = document.getElementById("myBtn");
         //let span = document.getElementsByClassName("close")[0];

         const winner = document.getElementsByClassName("modal-header");                

         modal.style.display = "block";           
         
         const h1_winner = document.createElement( 'h1' );
         h1_winner.innerText = "Выиграли клубники!";
         winner[ 0 ].append( h1_winner );        

//span.onclick = function() {
    //modal.style.display = "none";
//}

         window.onclick = function( event ) {
            if (event.target == modal) {
               modal.style.display = "none";
               window.location.reload();
            }
         }     
         
         winner = "лисы";
         //return winner;
      }
      else if ( this.isWin() === 2 ) {
         let modal = document.getElementById('myModal');         
         const winner = document.getElementsByClassName("modal-header");                

         modal.style.display = "block";           
         
         const h1_winner = document.createElement( 'h1' );
         h1_winner.innerText = "Выиграли арбузы!";
         winner[ 0 ].append( h1_winner );

         window.onclick = function( event ) {
            if (event.target == modal) {
               modal.style.display = "none";
               window.location.reload();
            }
         }        
      }
      else if ( this.isWin() === 0 && this.numEmpty() === 0 ) {
         let modal = document.getElementById('myModal');

         const winner = document.getElementsByClassName("modal-header");                

         modal.style.display = "block";           
         
         const h1_winner = document.createElement( 'h1' );
         h1_winner.innerText = "Ничья!";
         winner[ 0 ].append( h1_winner );          

         window.onclick = function( event ) {
            if (event.target == modal) {
               modal.style.display = "none";
               window.location.reload();
            }
         }   
      }
      else ;   
   }

   isWin() {
      const ttt = [];

      for ( const cell of this.body ) {
         if ( cell.number ) {
            ttt.push( cell.number );
         } else {
            ttt.push( 0 );
         }
      }

      //Block with conditions of winning for the first player
      if ( ttt[ 0 ] === 1 && ttt[ 1 ] === 1 && ttt[ 2 ] === 1 )
         return 1;
      else if ( ttt[ 3 ] === 1 && ttt[ 4 ] === 1 && ttt[ 5 ] === 1 )
         return 1;
      else if ( ttt[ 6 ] === 1 && ttt[ 7 ] === 1 && ttt[ 8 ] === 1 )
         return 1;
        
      else if ( ttt[ 0 ] === 1 && ttt[ 3 ] === 1 && ttt[ 6 ] === 1 )
         return 1;
      else if ( ttt[ 1 ] === 1 && ttt[ 4 ] === 1 && ttt[ 7 ] === 1 )
         return 1;
      else if ( ttt[ 2 ] === 1 && ttt[ 5 ] === 1 && ttt[ 8 ] === 1 )
         return 1;
        
      else if ( ttt[ 0 ] === 1 && ttt[ 4 ] === 1 && ttt[ 8 ] === 1 )
         return 1;
      else if ( ttt[ 2 ] === 1 && ttt[ 4 ] === 1 && ttt[ 6 ] === 1 )
         return 1;

      //Block with conditions of winning for the second player
      if ( ttt[ 0 ] === 2 && ttt[ 1 ] === 2 && ttt[ 2 ] === 2 )
         return 2;
      else if ( ttt[ 3 ] === 2 && ttt[ 4 ] === 2 && ttt[ 5 ] === 2 )
         return 2;
      else if ( ttt[ 6 ] === 2 && ttt[ 7 ] === 2 && ttt[ 8 ] === 2 )
         return 2;
       
      else if ( ttt[ 0 ] === 2 && ttt[ 3 ] === 2 && ttt[ 6 ] === 2 )
         return 2;
      else if ( ttt[ 1 ] === 2 && ttt[ 4 ] === 2 && ttt[ 7 ] === 2 )
         return 2;
      else if ( ttt[ 2 ] === 2 && ttt[ 5 ] === 2 && ttt[ 8 ] === 2 )
         return 2;
       
      else if ( ttt[ 0 ] === 2 && ttt[ 4 ] === 2 && ttt[ 8 ] === 2 )
         return 2;
      else if ( ttt[ 2 ] === 2 && ttt[ 4 ] === 2 && ttt[ 6 ] === 2 )
         return 2;
      else
         return 0;
   }   
};

const sudoku = new TicTacToe();

document.querySelector( '#wrapper' ).append( sudoku.getHTML( 1200 ) );
