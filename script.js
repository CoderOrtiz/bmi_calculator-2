

    // user = prompt("Whats your name?");
    // friend = prompt("Whats your friend's name?");

    // usersMass = prompt("Whats your weight in pounds?");
    // usersHeight = prompt("Whats your height in inches?");

    // friendsMass = prompt("Whats your friend's weight in pounds?");
    // friendsHeight = prompt("Whats your friend's height in inches?");

    const theMan = {

        you: 'DJ',
        // you: prompt("Whats your name?"),
        // yourMass: prompt("Whats your weight in pounds?"),
        yourMass: 250,
        // yourHeight: prompt("Whats your height in inches?"),
        yourHeight: 70,
        calcUserBMI: function(){
        this.userBMI = (this.yourMass / (this.yourHeight ** 2)) * 703;
        document.querySelector('.the_man').textContent = `${this.userBMI ? 'Your BMI is ' + Math.round(this.userBMI) : 'You entered an invalid input.'}`;
        console.log(this.userBMI)
        return this.userBMI;
        },
        
    }

    const yourFriend = {
        companionsName: 'John',
        // companionsName: prompt("Whats your friend's name?"),
        companionsWeight: 250,
        // companionsWeight: prompt("Whats your friend's weight in pounds?"),
        // companionsHeight: prompt("Whats your friend's height in inches?"),
        companionsHeight: 70,
        calcFriendsBMI: function(){
        this.companionsBMI = (this.companionsWeight / (this.companionsHeight ** 2)) * 703;
        document.querySelector('.your_friend').textContent = `${this.companionsBMI ? 'Your BMI is ' + Math.round(this.companionsBMI) : 'You entered an invalid input.'}`;
        console.log(this.companionsBMI)
        return this.companionsBMI;
        },
    }
    
    
    
    function results() {
        
        if ((theMan.userBMI === undefined) || (yourFriend.companionsBMI === undefined)){
            document.querySelector('.results').textContent = `You must calculate your results as well as ${yourFriend.companionsName}'s results first.`;
        }

        else if(theMan.userBMI === yourFriend.companionsBMI){
            document.querySelector('.results').textContent = `You both have a BMI of ${Math.round(theMan.userBMI)}.`;
            document.querySelector('.results').style.color = 'yellow';
        } 
        else if (theMan.userBMI > yourFriend.companionsBMI) {
            document.querySelector('.results').textContent = `${theMan.you} has a higher BMI of ${Math.round(theMan.userBMI)}.`;
            document.querySelector('.results').style.color = 'red';
        } 
        else {
            document.querySelector('.results').textContent = `${yourFriend.companionsName} has a higher BMI of ${Math.round(yourFriend.calcFriendsBMI)}.`;
            document.querySelector('.results').style.color = '#BAFFB4';
        } 
        console.log(theMan.userBMI, yourFriend.companionsBMI)
    }
