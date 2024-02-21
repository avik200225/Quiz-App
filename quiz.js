const quizData = [
    {
      question: "What is the capital of India?",
      options: ["Delhi", "Kolkata", "Pune", "Chennai"],
      correctAnswer: "Delhi"
    },
    {
      question: "What is 4 + 4?",
      options: ["8", "10", "12", "6"],
      correctAnswer: "8"
    },
    {
      question: "What is 2*(4+10)?",
      options: ["10", "28", "12", "6"],
      correctAnswer: "28"
    },
    {
      question: "What is the capital of West Bengal?",
      options: ["Kolkata", "Delhi", "Agra", "Jaipur"],
      correctAnswer: "Kolkata"
    },
    {
      question: "What is 10/5+2?",
      options: ["2", "4", "8", "6"],
      correctAnswer: "4"
    },
    {
      question: "What is 10^3",
      options: ["10", "100", "1000", "10000"],
      correctAnswer: "1000"
    },
    {
      question: "What is 4 + 5?",
      options: ["9", "10", "12", "6"],
      correctAnswer: "9"
    },
    {
      question: "What is 8 + 4?",
      options: ["8", "10", "12", "6"],
      correctAnswer: "12"
    },
    {
      question: "What is 15 * 4?",
      options: ["60", "10", "12", "6"],
      correctAnswer: "60"
    },
    {
      question: "What is 9 * 9?",
      options: ["8", "10", "81", "6"],
      correctAnswer: "81"
    },

  ];
  
  const timer = document.getElementById('time');
  const scoreDisplay = document.getElementById('score-value');
  const questionDisplay = document.getElementById('question');
  const optionsContainer = document.getElementById('options');
  const submitBtn = document.getElementById('submit-btn');
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 10; 
  let timerInterval;
  

  function startQuiz() {
    displayQuestion();
    startTimer();
  }
  

  function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionDisplay.textContent = currentQuestion.question;
    optionsContainer.innerHTML = ''; 
  
    currentQuestion.options.forEach((option, index) => {
      const radioBtn = document.createElement('input');
      radioBtn.type = 'radio';
      radioBtn.name = 'option';
      radioBtn.value = option;
      const label = document.createElement('label');
      label.textContent = option;
      label.appendChild(radioBtn);
      optionsContainer.appendChild(label);
    });
  }
  

  function startTimer() {
    timeLeft = 10; 
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft === 0) {
        handleTimeOut();
      }
    }, 1000);
  }
  
  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }
  
  function handleTimeOut() {
    clearInterval(timerInterval);
    moveToNextQuestion();
  }
  
  function submitAnswer() {
    clearInterval(timerInterval);
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
      alert('Please select an option.');
      return;
    }
    const selectedAnswer = selectedOption.value;
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      score++;
      scoreDisplay.textContent = score;
    } else {
    }
    selectedOption.disabled = true; // Disable options after submission
    moveToNextQuestion();
  }
  
  function moveToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      displayQuestion();
      startTimer();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
  }
  
  submitBtn.addEventListener('click', submitAnswer);
  
  startQuiz();
  