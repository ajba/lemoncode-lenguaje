class SlothMachine {
    
    coinsAmount;
    
    constructor(){
        this.coinsAmount = 0;
    }

    play(){
        this.coinsAmount++;
        var random_boolean1 = Math.random() < 0.5;
        var random_boolean2 = Math.random() < 0.5;
        var random_boolean3 = Math.random() < 0.5;

        if(random_boolean1 && random_boolean2 && random_boolean3){
            console.log('Congratulations!!!.You won '+ this.coinsAmount+' coins!!');
            this.coinsAmount = 0;
        }else{
            console.log('Good luck next time!!');
        }
    }

  }

const machine1 = new SlothMachine();
machine1.play();
machine1.play(); 
machine1.play();
machine1.play(); 
machine1.play(); 