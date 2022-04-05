    const user = {
        you: prompt("Whats your name?"),
        yourMass: prompt("Whats your weight in pounds?"),
        yourHeight: prompt("Whats your height in inches?"),
        calcUserBMI: function(){
        this.userBMI = (this.yourMass / (this.yourHeight ** 2)) * 703;
        document.querySelector('.the_man').textContent = `${this.userBMI ? 'Your BMI is approximately ' + Math.round(this.userBMI) + '.' : 'You entered an invalid input.'}`;
        
        if (this.userBMI <= 18){
            document.querySelector('.the_mans_status').textContent = 'You are underweight.'
        }
        else if ((this.userBMI >= 19) && (this.userBMI <= 25)){
            document.querySelector('.the_mans_status').textContent = 'You are at a healthy weight.'
        }
        else if ((this.userBMI >= 26) && (this.userBMI <= 30)){
            document.querySelector('.the_mans_status').textContent = 'You are overweight.'
        }
        else {
            document.querySelector('.the_mans_status').textContent = 'You are obese.'
        }
        return this.userBMI;
        },
        
    }

    const yourFriend = {
        companionsName: prompt("Whats your friend's name?"),
        companionsWeight: prompt("Whats your friend's weight in pounds?"),
        companionsHeight: prompt("Whats your friend's height in inches?"),
        calcFriendsBMI: function(){
        this.companionsBMI = (this.companionsWeight / (this.companionsHeight ** 2)) * 703;
        document.querySelector('.your_friend').textContent = `${this.companionsBMI ? this.companionsName + "'s BMI is approximately " + Math.round(this.companionsBMI) + "." : "You entered an invalid input."}`;
        if (this.companionsBMI <= 18){
            document.querySelector('.your_friends_status').textContent = `${this.companionsName}'s' underweight.`;
        }
        else if ((this.companionsBMI >= 19) && (this.companionsBMI <= 25)){
            document.querySelector('.your_friends_status').textContent = `${this.companionsName}'s' at a healthy weight.`;
        }
        else if ((this.companionsBMI >= 26) && (this.companionsBMI <= 30)){
            document.querySelector('.your_friends_status').textContent = `${this.companionsName}'s' overweight.`;
        }
        else {
            document.querySelector('.your_friends_status').textContent = `${this.companionsName}'s' obese.`;
        }
        return this.companionsBMI;
        },
    }
    
    
    
    function results() {
        
        if ((user.userBMI === undefined) || (yourFriend.companionsBMI === undefined)){
            document.querySelector('.results').textContent = `You must first calculate your results, and then ${yourFriend.companionsName}'s results, to see the final results.`;
        }

        else if(user.userBMI === yourFriend.companionsBMI){
            document.querySelector('.results').textContent = `You both have a BMI of approximately ${Math.round(user.userBMI)}.`;
            document.querySelector('.results').style.color = 'yellow';
        } 
        else if (user.userBMI > yourFriend.companionsBMI) {
            document.querySelector('.results').textContent = `You have the higher BMI of approximately ${Math.round(user.userBMI)}.`;
            document.querySelector('.results').style.color = '#890F0D';
        } 
        else {
            document.querySelector('.results').textContent = `${yourFriend.companionsName} has a higher BMI of approximately ${Math.round(yourFriend.companionsBMI)}.`;
            document.querySelector('.results').style.color = '#BAFFB4';
        } 
        console.log(user.userBMI, yourFriend.companionsBMI)
    }
