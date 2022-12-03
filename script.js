var rate_Number = 0;
function ratecircleClick(val)
{
    for (let i = 0; i < document.getElementsByClassName("padding-bigger").length; i++)
    {
        const span_i = document.getElementsByClassName("padding-bigger")[i];
        const text_i = span_i.firstChild;
        span_i.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        text_i.style.color = "rgb(255, 255, 255, .5)"; 
    }

    const span = document.getElementsByClassName(val)[0];
    const text = span.firstChild;
    span.style.backgroundColor = "hsl(25, 97%, 53%)";
    text.style.color = "rgba(255, 255, 255, 1)";
    rate_Number = Number(text.innerHTML);
}

function OnSubmitButtonClicked()
{
    const card1 = document.getElementsByClassName("card")[0];
    const card2 = document.getElementsByClassName("card2")[0];
    const rateText = document.getElementsByClassName("rateText")[0];

    if (rate_Number > 0)
    {
        for (let i = 0; i < card1.children.length; i++){
            const object = card1.children[i];
            object.style.opacity = "0%";
        }
        const myTimeout = setTimeout(timeout, 800);

        function timeout()
        {
            card2.className = "card2 thankyou transparent";
            card1.className = "card disappeared";
            rateText.innerHTML = `You selected ${rate_Number} out of 5`;  
        }
        const myTimeout2 = setTimeout(timeout2, 800);
        function timeout2(){
            card2.className = "card2 thankyou opacityAnimation fullop";
        }

        const myTimeout3 = setTimeout(timeout3, 3000);
        function timeout3(){
            const img = document.getElementsByClassName("imagethanks")[0];
            img.className = "imagethanks anim";
        }
    }
}