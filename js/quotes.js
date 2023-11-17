const quotes = [
    {
        quote: "우리 나이 대에 사랑이나 돈은 조금 늦게 올 수 있지만, 정글은 늦게 오면 안된다.",
        author: "김한샘(GimGoon)",
    },
    {
        quote: "그거 먹고 탑으로 와",
        author: "장경환(MaRin)",
    },
    {
        quote: "D점멸 쓰면 실버로 간다.",
        author: "이상혁(Faker)",
    },
    {
        quote: "난 죽는 걸 아는데도 정글때문에 죽어야 한다. 난 다 생각하면서 게임을 한다.",
        author: "강승록(TheShy)",
    },
    {
        quote: "여러분들이 지면 여러분들의 잘못이 아닙니다. 그건 정글 잘못입니다.",
        author: "김동하(Khan)",
    },
    {
        quote: "상대는 지금 4킬을 따 놓고도 내가 무서워서 갱을 부르고 있다.",
        author: "김대호(cvMax)",
    },
    {
        quote: "4 Chinese Can't Win",
        author: "김동하(Khan)",
    },
    {
        quote: "미드랑 바텀이 터지는건 내 알바가 아니다.",
        author: "최현준(Doran)",
    },
    {
        quote: "탑은 3분 서렌 기능이 필요하다.",
        author: "정상길(Dopa)",
    },
    {
        quote: "방광암 박주헌",
        author: "박진호(ji-no-park)",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;