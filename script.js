// User's Object
const user = {

    // User's Name and BMI Information
    user: prompt ("Whats your name?"),
    mass: prompt ("Whats your weight in pounds?"),
    height: prompt ("Whats your height in inches?"),

    // When "calcUserBMI" is Called, User's BMI will be Calculated and be Advised if They Are at a Healthy Weight
    calcUserBMI: function () {
        this.userBMI = (this.mass / (this.height ** 2)) * 703;
        this.userBMIRounded = Math.round(this.userBMI);
        //  This Information Gets Displayed under "user" Class
        document.querySelector('.user').textContent = `${this.userBMIRounded ? 'Your BMI is approximately ' + this.userBMIRounded + '.' : 'You entered an invalid input.'}`;

        //  This Information Gets Displayed under "users_status" Class
        if (this.userBMIRounded <= 18) {
            document.querySelector('.users_status').textContent = 'You are underweight.';
        }
        else if ((this.userBMIRounded >= 19) && (this.userBMIRounded <= 25)) {
            document.querySelector('.users_status').textContent = 'You are at a healthy weight.';
        }
        else if ((this.userBMIRounded >= 26) && (this.userBMIRounded <= 30)) {
            document.querySelector('.users_status').textContent = 'You are overweight.';
        }
        else if (this.userBMIRounded > 31) {
            document.querySelector('.users_status').textContent = `${this.user}'s obese.`;
        }
        else {    
        }
        return this.userBMIRounded;
    },
};

// Friend's Object
const yourFriend = {
    
    // Friend's Name and BMI Information
    user: prompt ("Whats your friend's name?"),
    mass: prompt ("Whats your friend's weight in pounds?"),
    height: prompt ("Whats your friend's height in inches?"),

     // When "calcFriendsBMI" is Called, Friend's BMI will be Calculated and be Advised if They Are at a Healthy Weight
    calcFriendsBMI: function () {
        this.companionsBMI = (this.mass / (this.height ** 2)) * 703;
        this.companionsBMIRounded = Math.round(this.companionsBMI);
        document.querySelector('.your_friend').textContent = `${this.companionsBMI ? this.user + "'s BMI is approximately " + this.companionsBMIRounded + "." : "You entered an invalid input."}`;
        
        //  This Information Gets Displayed under "your_friends_status" Class
        if (this.companionsBMIRounded <= 18) {
            document.querySelector('.your_friends_status').textContent = `${this.user}'s underweight.`;
        }
        else if ((this.companionsBMIRounded >= 19) && (this.companionsBMIRounded <= 25)) {
            document.querySelector('.your_friends_status').textContent = `${this.user}'s at a healthy weight.`;
        }
        else if ((this.companionsBMIRounded >= 26) && (this.companionsBMIRounded <= 30)) {
            document.querySelector('.your_friends_status').textContent = `${this.user}'s overweight.`;
        }
        else if (this.companionsBMIRounded > 31) {
        document.querySelector('.your_friends_status').textContent = `${this.user}'s obese.`;
        }
        else {
        }
        return this.companionsBMIRounded;
    },
};


// When the "results" Function is Called, If Else Statements Determine Who has the Higher BMI and Will Change the Color of the h6
function results() {

    if ((user.userBMIRounded === undefined) || (yourFriend.companionsBMIRounded === undefined)) {
        document.querySelector('.results').textContent = `You must first calculate your results, and then ${yourFriend.user}'s results, to see the final results.`;
    }
    else if (user.userBMIRounded === yourFriend.companionsBMIRounded) {
        document.querySelector('.results').textContent = `You both have a BMI of approximately ${user.userBMIRounded}.`;
        document.querySelector('.results').style.color = 'yellow';
    }
    else if (user.userBMIRounded > yourFriend.companionsBMIRounded) {
        document.querySelector('.results').textContent = `You have the higher BMI of approximately ${user.userBMIRounded}.`;
        document.querySelector('.results').style.color = '#890F0D';
    }
    else if (user.userBMIRounded < yourFriend.companionsBMIRounded) {
        document.querySelector('.results').textContent = `${yourFriend.user} has a higher BMI of approximately ${yourFriend.companionsBMIRounded}.`;
        document.querySelector('.results').style.color = '#BAFFB4';
    }
    else{
        document.querySelector('.results').textContent = "You entered an invalid input above with your BMI data, your friend's BMI data, and/or your and your friend's BMI data.";
    }
};
