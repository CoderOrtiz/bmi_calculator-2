

    user = prompt("Whats your name?");
    friend = prompt("Whats your friend's name?");

    usersMass = prompt("Whats your weight in pounds?");
    usersHeight = prompt("Whats your height in inches?");

    friendsMass = prompt("Whats your friend's weight in pounds?");
    friendsHeight = prompt("Whats your friend's height in inches?");

    const theMan = {
        you: user,
        yourMass: this.usersMass,
        yourHeight: this.usersHeight,
        calcUserBMI: function(){
        this.userBMI = (this.yourMass / (this.yourHeight ** 2)) * 703;
        return this.userBMI;
        },
    }

    const yourFriend = {
        companionsName: friend,
        companionsWeight: this.friendsMass,
        companionsHeight: this.friendsHeight,
        calcFriendsBMI: function(){
        this.companionsBMI = (this.companionsWeight / (this.companionsHeight ** 2)) * 703;
        return this.companionsBMI;
        },
    }
    
    
    
    function results() {
        

        if (theMan.userBMI === yourFriend.companionsBMI){
            document.querySelector('h3').style.color = 'yellow';
            document.querySelector('h3').textContent = `You both have a BMI of ${Math.round(theMan.userBMI)}`;
        } 
        
        else if (theMan.userBMI > yourFriend.companionsBMI) {
            document.querySelector('h3').style.color = '#BAFFB4';
            document.querySelector('h3').textContent = `${theMan.you} has a higher BMI of ${Math.round(theMan.userBMI)}`;
        } 
        else {
            document.querySelector('h3').style.color = 'red';
            document.querySelector('h3').textContent = `${yourFriend.companionsName} has a higher BMI of ${Math.round(yourFriend.companionsBMI)}`;
        } 
        
        console.log(theMan.userBMI);
        console.log(yourFriend.companionsBMI);
    }

  


    




    // user = prompt("Whats your name?");
    // friend = prompt("Whats your friend's name?");

    // userMass = prompt("Whats your weight in pounds?");
    // userHeight = prompt("Whats your height in inches?");

    // friendMass = prompt("Whats your friend's weight in pounds?");
    // friendHeight = prompt("Whats your friend's height in inches?");

    // // Imperial BMI Calculation
    // userBMI = (userMass / (userHeight ** 2)) * 703;
    // friendBMI = (friendMass / (friendHeight ** 2)) * 703;

    // if (userBMI === friendBMI){
    //     document.querySelector("h3").textContent = `You both have a BMI of ${Math.round(userBMI)}`;
    // } 
    
    // else if (userBMI > friendBMI) {
    //     document.querySelector("h3").textContent = `${user} has a higher BMI of ${Math.round(userBMI)}`;
    // } 
    // else {
    //     document.querySelector("h3").textContent = `${friend} has a higher BMI of ${Math.round(friendBMI)}`;
    // } 








