const btn = document.querySelector(".btn");
const msg = document.querySelector(".msg1");
const skip = document.querySelector(".skip");

function output() {
    const conducted = document.querySelector(".conducted").value;
    const attended = document.querySelector(".attended").value;
    const percentage = document.querySelector(".percentage").value;
    const result = Math.round(((attended / conducted) * 100) * 100) / 100;;

    if (!conducted || !attended || !percentage || conducted < attended || conducted <= 0 || percentage <= 0 || percentage > 100) {
        msg.innerHTML = `🚫 Please enter valid numbers in all fields.`;
        skip.innerHTML = "";
        return;
    }


    msg.innerHTML = `You have <b>${result}%</b> attendance.`;
    if(result>=percentage){
        let maxSkip = (attended*100)/percentage;
        let canSkip = Math.floor(maxSkip - conducted);
        skip.innerHTML = `✅ You're in safe zone!!, you can skip <b>${canSkip}</b> 😎 more classes.`;
    }
    else{
        let cooked = Math.ceil((percentage * conducted - 100 * attended)/(100-percentage));
        skip.innerHTML = `⚠️ Your attendance is short!!, you have to attend <b>${cooked}</b> 😔 more classes.`
    }
}
btn.addEventListener("click", output);
