const questions = [ 
    " o que aprendi hoje?",
    "o que me deixou aborrecido?",
    "o que posso melhorar?",
    "quantas pessoas ajudei hoje?",

]
const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()


const answers = []
process.stdin.on("data", data =>{
    answers.push(data.toString().trim())
    if(answers.length < questions.length) {
        ask (answers.length)
    }else{
        console.log(answers)
        process.exit()
    }

})
process.on ("exit", () =>{
    console.log(`legal
    aprendeu hoje ${answers[0]}
    TE DEIXOU ABORRECIDO ${answers[1]}
    PODE MELHORAR ${answers[2]}   
    QUANTAS PESSOAS AJUDEI ${answers[3]}   

    `)
})

