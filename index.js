//document.getElementById("id_feedback-card").style.display='none'
function clickHandler(){
    var votingNumbers =(document.querySelector('input[name="votingNumbers"]:checked'));
    if(votingNumbers !== null){
        document.getElementById("id_feedback-card").style.display='none';
        document.getElementById("id_thankyouCard").style.display='flex'
        document.getElementById("votingReview").innerHTML = `You selected out ${votingNumbers.value} of 5`
     }
}

