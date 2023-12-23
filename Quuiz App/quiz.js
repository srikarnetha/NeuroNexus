
document.addEventListener("DOMContentLoaded", function () {
    resetQuiz();
});

function showCreateQuiz() {
    document.getElementById("create-quiz-box").style.backgroundColor = "#e67e22";
    document.getElementById("take-quiz-box").style.backgroundColor = "#3498db";
    document.getElementById("create-quiz-section").style.display = "block";
    document.getElementById("take-quiz-section").style.display = "none";
    document.getElementById("source-section").style.display = "none";
}

function showTakeQuiz() {
    document.getElementById("create-quiz-box").style.backgroundColor = "#3498db";
    document.getElementById("take-quiz-box").style.backgroundColor = "#e67e22";
    document.getElementById("create-quiz-section").style.display = "none";
    document.getElementById("take-quiz-section").style.display = "block";
    document.getElementById("source-section").style.display = "none";

    
    displayQuizQuestions();
}

function promptNumberOfQuestions() {
    const numberOfQuestions = parseInt(prompt("Enter the number of questions:")) || 0;

    if (numberOfQuestions > 0) {
        document.getElementById("quiz-form").style.display = "block";
        createQuizForm(numberOfQuestions);
    } else {
        alert("Please enter a valid number of questions.");
    }
}
    
    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.textContent = "Submit Quiz";
    submitButton.classList.add("submit-button");
    submitButton.addEventListener("click", saveQuiz);
    const existingSubmitButton = document.querySelector("#create-quiz-section .submit-button");
    if (existingSubmitButton) {
        existingSubmitButton.remove();
    }

    quizForm.appendChild(submitButton);


    function createQuizForm(numberOfQuestions) {
        const quizForm = document.getElementById("quiz-form");
        quizForm.innerHTML = "";
    
        for (let i = 1; i <= numberOfQuestions; i++) {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");
    
            const questionLabel = document.createElement("label");
            questionLabel.textContent = `Question ${i}:`;
            questionDiv.appendChild(questionLabel);
    
            const questionInput = document.createElement("input");
            questionInput.type = "text";
            questionInput.name = `question${i}`;
            questionDiv.appendChild(questionInput);
    
            quizForm.appendChild(questionDiv);
    
           
            quizForm.appendChild(document.createElement("br"));
    
            for (let j = 1; j <= 4; j++) {
                const optionDiv = document.createElement("div");
                optionDiv.classList.add("option");
    
                const optionLabel = document.createElement("label");
                optionLabel.textContent = `Option ${j}:`;
                optionDiv.appendChild(optionLabel);
    
                const optionInput = document.createElement("input");
                optionInput.type = "text";
                optionInput.name = `question${i}-option${j}`;
                optionDiv.appendChild(optionInput);
    
                quizForm.appendChild(optionDiv);
    
                
                quizForm.appendChild(document.createElement("br"));
            }
    
            const correctAnswerDiv = document.createElement("div");
            correctAnswerDiv.classList.add("option");
    
            const correctAnswerLabel = document.createElement("label");
            correctAnswerLabel.textContent = "Correct Answer:";
            correctAnswerDiv.appendChild(correctAnswerLabel);
    
            const correctAnswerInput = document.createElement("input");
            correctAnswerInput.type = "text";
            correctAnswerInput.name = `question${i}-correct-answer`;
            correctAnswerDiv.appendChild(correctAnswerInput);
    
            quizForm.appendChild(correctAnswerDiv);
    
          
            quizForm.appendChild(document.createElement("br"));
        }
    }
    


function saveQuiz() {
    
    alert("Quiz saved successfully!");
    resetQuiz();
}

function submitQuiz() {
    
    alert("Quiz submitted. Your score: 100%"); 
    displayScore(100);
}
function displayQuizQuestions() {
    
    const quizQuestionsDiv = document.getElementById("quiz-questions");
    quizQuestionsDiv.innerHTML = "";

    const questionsData = [
        {
            question: "Who holds the record for the fastest century in IPL?",
            options: ["Virat", "Gayle", "Dhoni", "Rohit"],
            correctAnswer: "Paris",
        },
        {
            question: "Who was the most expensive player in IPL auction 2023",
            options: ["Starc", "Head", "Cummins", "Rachin"],
            correctAnswer: "Mars",
        },
    
    ];

    questionsData.forEach((data, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionLabel = document.createElement("p");
        questionLabel.textContent = `Question ${index + 1}: ${data.question}`;
        questionDiv.appendChild(questionLabel);

        for (let j = 1; j <= 4; j++) {
            const optionDiv = document.createElement("div");
            optionDiv.classList.add("option");

            const optionLabel = document.createElement("label");
            optionLabel.textContent = `Option ${j}: ${data.options[j - 1]}`;
            optionDiv.appendChild(optionLabel);

            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = `question${index + 1}`;
            optionInput.value = `Option ${j}`;
            optionDiv.appendChild(optionInput);

            questionDiv.appendChild(optionDiv);
        }

        quizQuestionsDiv.appendChild(questionDiv);
    });

    
    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.textContent = "Submit Quiz";
    submitButton.classList.add("submit-button");
    submitButton.addEventListener("click", submitQuiz);

    
    const existingSubmitButton = document.querySelector("#take-quiz-section .submit-button");
    if (existingSubmitButton) {
        existingSubmitButton.remove();
    }

    quizQuestionsDiv.appendChild(submitButton);
}

function saveQuiz() {
    
    alert("Quiz saved successfully!");
    resetQuiz();
}

function resetQuiz() {
   
    document.getElementById("quiz-form").style.display = "none";
    document.getElementById("create-quiz-section").style.display = "none";

   
    document.getElementById("quiz-questions").innerHTML = "";
    document.getElementById("take-quiz-section").style.display = "none";
    document.getElementById("source-section").style.display = "none";

   
    document.getElementById("create-quiz-box").style.backgroundColor = "#3498db";
    document.getElementById("take-quiz-box").style.backgroundColor = "#3498db";
}
function displayScore(score) {
    document.getElementById("score").innerText = `${score}%`;
    document.getElementById("create-quiz-box").style.backgroundColor = "#3498db";
    document.getElementById("take-quiz-box").style.backgroundColor = "#3498db";
    document.getElementById("create-quiz-section").style.display = "none";
    document.getElementById("take-quiz-section").style.display = "none";
    document.getElementById("score-section").style.display = "block";
}

