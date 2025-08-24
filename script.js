const questions = [
  {
    "question": "কোন সুলতান দিল্লিতে 'কুতুব মিনার' নির্মাণ সম্পন্ন করেন?",
    "options": ["কুতুবউদ্দিন আইবক", "ইলতুৎমিশ", "রাজিয়া সুলতানা", "আলাউদ্দিন খিলজি"],
    "answer": "ইলতুৎমিশ",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "ভারতীয় সংবিধানের কোন সংশোধনীতে 'সমাজতান্ত্রিক' এবং 'ধর্মনিরপেক্ষ' শব্দগুলি যুক্ত করা হয়?",
    "options": ["42তম", "44তম", "73তম", "74তম"],
    "answer": "42তম",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কোন মুঘল সম্রাট 'আইন-ই-আকবরী' গ্রন্থটি রচনা করেন?",
    "options": ["আবুল ফজল", "টোডরমল", "ফৈজি", "আকবর"],
    "answer": "আবুল ফজল",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "লর্ড রিপনের আমলে প্রথম ফ্যাক্টরি আইন (1881) এর প্রধান উদ্দেশ্য কী ছিল?",
    "options": ["ব্রিটিশ শ্রমিকদের অধিকার রক্ষা", "ভারতীয় শ্রমিকদের কাজের সময় সীমিত করা", "মালিকদের সুবিধা বৃদ্ধি", "বেকারত্ব কমানো"],
    "answer": "ভারতীয় শ্রমিকদের কাজের সময় সীমিত করা",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "গৌতম বুদ্ধের প্রথম ধর্মোপদেশ কোথায় অনুষ্ঠিত হয়েছিল?",
    "options": ["বোধগয়া", "সারনাথ", "লুম্বিনি", "কুশিনগর"],
    "answer": "সারনাথ",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কোন গ্যাসকে 'মার্শ গ্যাস' বলা হয়?",
    "options": ["প্রোপেন", "ইথেন", "মিথেন", "বিউটেন"],
    "answer": "মিথেন",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কোন বিজ্ঞানী 'পেনিসিলিন' আবিষ্কার করেন?",
    "options": ["লুই পাস্তুর", "আলেকজান্ডার ফ্লেমিং", "রবার্ট কোচ", "চার্লস ডারউইন"],
    "answer": "আলেকজান্ডার ফ্লেমিং",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কোন সালে বঙ্গভঙ্গ রদ হয়েছিল?",
    "options": ["1905", "1909", "1911", "1919"],
    "answer": "1911",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কর্কটক্রান্তি রেখা ভারতের কয়টি রাজ্যের ওপর দিয়ে গেছে?",
    "options": ["5", "6", "7", "8"],
    "answer": "8",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "বিজয়ওয়াড়া শহরটি কোন নদীর তীরে অবস্থিত?",
    "options": ["মহানদী", "গোদাবরী", "কৃষ্ণা", "কাবেরী"],
    "answer": "কৃষ্ণা",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কোন শাসক 'বিক্রমাদিত্য' উপাধি গ্রহণ করেন?",
    "options": ["সমুদ্রগুপ্ত", "চন্দ্রগুপ্ত প্রথম", "চন্দ্রগুপ্ত দ্বিতীয়", "কুমারগুপ্ত"],
    "answer": "চন্দ্রগুপ্ত দ্বিতীয়",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কোন বছর কলকাতায় ইন্ডিয়ান অ্যাসোসিয়েশন ফর দ্য কাল্টিভেশন অফ সায়েন্স (IACS) প্রতিষ্ঠিত হয়?",
    "options": ["1876", "1890", "1900", "1911"],
    "answer": "1876",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কোন অ্যাসিডকে 'ভিট্রিওলের তেল' বলা হয়?",
    "options": ["নাইট্রিক অ্যাসিড", "সালফিউরিক অ্যাসিড", "হাইড্রোchloric অ্যাসিড", "অ্যাসিটিক অ্যাসিড"],
    "answer": "সালফিউরিক অ্যাসিড",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "ভারতীয় সংবিধানের প্রস্তাবনা কতবার সংশোধিত হয়েছে?",
    "options": ["একবার", "দুইবার", "তিনবার", "কখনো নয়"],
    "answer": "একবার",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "ভারতের প্রথম প্রধান বিচারপতি কে ছিলেন?",
    "options": ["এম. পতঞ্জলি শাস্ত্রী", "হরিলাল জে. কানিয়া", "সুধী রঞ্জন দাস", "এ.কে. সরকার"],
    "answer": "হরিলাল জে. কানিয়া",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "ইন্ডিয়ান ন্যাশনাল কংগ্রেসের প্রথম সভাপতি কে ছিলেন?",
    "options": ["অ্যালান অক্টাভিয়ান হিউম", "ডব্লিউ.সি. ব্যানার্জি", "দাদাভাই নওরোজি", "ফিরোজ শাহ মেহতা"],
    "answer": "ডব্লিউ.সি. ব্যানার্জি",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "'স্বদেশ বান্ধব সমিতি' কে প্রতিষ্ঠা করেন?",
    "options": ["সুরেন্দ্রনাথ বন্দ্যোপাধ্যায়", "অশ্বিনী কুমার দত্ত", "বারীন্দ্র কুমার ঘোষ", "পুলিন বিহারী দাস"],
    "answer": "অশ্বিনী কুমার দত্ত",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কোন দেশকে 'হাজার হ্রদের দেশ' বলা হয়?",
    "options": ["সুইডেন", "ফিনল্যান্ড", "নরওয়ে", "কানাডা"],
    "answer": "ফিনল্যান্ড",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "'ইন্ডিয়ান রিপাবলিকান আর্মি' কে প্রতিষ্ঠা করেন?",
    "options": ["সর্দার বল্লভভাই প্যাটেল", "সুভাষ চন্দ্র বসু", "ভগত সিং", "সূর্য সেন"],
    "answer": "সূর্য সেন",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কম্পিউটারের কোন অংশকে তার 'মস্তিষ্ক' বলা হয়?",
    "options": ["র‍্যাম (RAM)", "সেন্ট্রাল প্রসেসিং ইউনিট (CPU)", "হার্ড ডিস্ক ড্রাইভ (HDD)", "মাদারবোর্ড"],
    "answer": "সেন্ট্রাল প্রসেসিং ইউনিট (CPU)",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "ভারতের কোন রাজ্যে 'শবরীমালা মন্দির' অবস্থিত?",
    "options": ["তামিলনাড়ু", "কর্ণাটক", "কেরালা", "অন্ধ্র প্রদেশ"],
    "answer": "কেরালা",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "সতীদাহ প্রথা কে বিলুপ্ত করেন?",
    "options": ["লর্ড ডালহৌসি", "লর্ড উইলিয়াম বেন্টিঙ্ক", "লর্ড ক্যানিং", "লর্ড রিপন"],
    "answer": "লর্ড উইলিয়াম বেন্টিঙ্ক",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কোন ভিটামিনের অভাবে রক্তক্ষরণ হয়?",
    "options": ["ভিটামিন এ", "ভিটামিন বি", "ভিটামিন সি", "ভিটামিন কে"],
    "answer": "ভিটামিন কে",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "পশ্চিমবঙ্গের জাতীয় ফুল কোনটি?",
    "options": ["পদ্ম", "শাপলা", "শিউলি", "জুঁই"],
    "answer": "শিউলি",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "ভারতের প্রথম পারমাণবিক বিদ্যুৎ কেন্দ্র কোনটি?",
    "options": ["তারাপুর", "কালপাক্কাম", "নারোরা", "কাকরাপাড়"],
    "answer": "তারাপুর",
    "userAnswer": null,
    "status": null
  }

];


let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let skippedCount = 0;
let selectedOption = null;
let questionTimerInterval;
const questionTimeLimit = 30;
let questionTimeLeft;
let userName = ''; // ব্যবহারকারীর নাম সংরক্ষণের জন্য ভেরিয়েবল
const passMarkPercentage = 60; // Changed to 60%

// DOM Elements
const nameInputScreen = document.getElementById('nameInputScreen');
const userNameInput = document.getElementById('userNameInput');
const proceedToStartScreenButton = document.getElementById('proceedToStartScreenButton');
const nameInputMessage = document.getElementById('nameInputMessage');

const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');

const totalQuestionsInfo = document.getElementById('totalQuestionsInfo');
const fullMarksInfo = document.getElementById('fullMarksInfo');
const timeLimitInfo = document.getElementById('timeLimitInfo');

const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

// New: References to the result summary and detailed answers containers
const resultSummary = document.getElementById('resultSummary');
const detailedAnswersContainer = document.getElementById('detailedAnswersContainer');


const scoreDisplayElem = document.getElementById('scoreDisplay');
const questionIndexDisplayElem = document.getElementById('questionIndexDisplay');

const questionTextBox = document.getElementById('questionTextBox');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMessage = document.getElementById('feedbackMessage');
const nextButton = document.getElementById('nextButton');
const skipButton = document.getElementById('skipButton');
const submitButton = document.getElementById('submitButton');

const questionTimerTextElem = document.getElementById('questionTimer');
const progressRingBar = document.querySelector('.progress-ring-bar');
const circumference = 2 * Math.PI * 35;
progressRingBar.style.strokeDasharray = circumference;
progressRingBar.style.strokeDashoffset = circumference;

const rankListElem = document.getElementById('rankList');

// New: Get the new buttons for detailed answers
const showAllAnswersButton = document.getElementById('showAllAnswersButton');
const showCorrectAnswersButton = document.getElementById('showCorrectAnswersButton');
const showWrongAnswersButton = document.getElementById('showWrongAnswersButton');
const showSkippedQuestionsButton = document.getElementById('showSkippedQuestionsButton');
const backToResultsButton = document.getElementById('backToResultsButton'); // Back button
const detailedAnswersTitle = document.getElementById('detailedAnswersTitle');
const questionsList = document.getElementById('questionsList');


// Set initial info on start screen
totalQuestionsInfo.textContent = questions.length;
fullMarksInfo.textContent = questions.length;
timeLimitInfo.textContent = Math.ceil(questions.length * questionTimeLimit / 60);

// --- Event Listeners ---
proceedToStartScreenButton.addEventListener('click', handleNameInputAndShowStartScreen);
startButton.addEventListener('click', startQuiz);

// Disable manual interaction with buttons
nextButton.style.display = 'none';
skipButton.style.display = 'none';
submitButton.style.display = 'none';


// New: Event listeners for the detailed answer buttons
showAllAnswersButton.addEventListener('click', () => displayDetailedQuestions('all'));
showCorrectAnswersButton.addEventListener('click', () => displayDetailedQuestions('correct'));
showWrongAnswersButton.addEventListener('click', () => displayDetailedQuestions('wrong'));
showSkippedQuestionsButton.addEventListener('click', () => displayDetailedQuestions('skipped'));
backToResultsButton.addEventListener('click', backToSummaryScreen);


// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- Name Input and Screen Flow ---
function handleNameInputAndShowStartScreen() {
    const inputName = userNameInput.value.trim();
    if (inputName === '') {
        nameInputMessage.textContent = "আপনার নাম লিখুন কুইজ শুরু করার জন্য।";
        return;
    }
    userName = inputName; // ব্যবহারকারীর নাম সংরক্ষণ করুন
    nameInputMessage.textContent = ''; // মেসেজ মুছে ফেলুন

    nameInputScreen.classList.remove('active');
    startScreen.classList.add('active'); // নাম ইনপুট করার পর startScreen দেখান
}


function startQuiz() { // startScreen থেকে কুইজ শুরু করার ফাংশন
    // Shuffle questions at the start of the quiz
    shuffleArray(questions); // Add this line to shuffle questions
    questions.forEach(q => shuffleArray(q.options)); // Shuffle options for each question

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    resetQuizState(); // কুইজ স্টেট রিসেট করুন কুইজ শুরু করার আগে
    loadQuestion();
    scoreDisplayElem.textContent = score;
}

function resetQuizState() {
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    skippedCount = 0;
    // Reset user answers and status for each question
    questions.forEach(q => {
        q.userAnswer = null;
        q.status = null;
    });
    clearInterval(questionTimerInterval); // নিশ্চিত করুন কোনো টাইমার চলছে না
}


function updateQuestionTimerDisplay() {
    questionTimerTextElem.textContent = questionTimeLeft;

    const offset = circumference - (questionTimeLeft / questionTimeLimit) * circumference;
    progressRingBar.style.strokeDashoffset = offset;

    // Change color based on time left
    if (questionTimeLeft <= 10) {
        progressRingBar.style.stroke = '#FF6347';
    } else if (questionTimeLeft <= 20) {
        progressRingBar.style.stroke = '#FFD700';
    } else {
        progressRingBar.style.stroke = '#28a745';
    }
}

function startQuestionTimer() {
    clearInterval(questionTimerInterval);
    questionTimeLeft = questionTimeLimit;
    updateQuestionTimerDisplay();
    questionTimerInterval = setInterval(() => {
        questionTimeLeft--;
        updateQuestionTimerDisplay();
        if (questionTimeLeft <= 0) {
            clearInterval(questionTimerInterval);
            // Only proceed if the question hasn't been answered yet
            if (questions[currentQuestionIndex].status === null) {
                // Check status
                handleTimeUp();
            }
        }
    }, 1000);
}

// Function to handle Text-to-Speech
function speak(text, onEndCallback) {
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'bn-IN';
    speech.text = text;
    // Set up the onend callback
    if (onEndCallback) {
        speech.onend = onEndCallback;
    }
    window.speechSynthesis.speak(speech);
  } else {
    console.log("Speech Synthesis not supported");
    // If speech is not supported, just call the callback immediately
    if (onEndCallback) {
        onEndCallback();
    }
  }
}

// Function to stop any ongoing speech
function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function loadQuestion() {
    stopSpeaking(); // Stop any previous speech
    if (currentQuestionIndex >= questions.length) {
        handleSubmitQuiz();
        return;
    }
    clearInterval(questionTimerInterval);
    const currentQuestion = questions[currentQuestionIndex];
    questionIndexDisplayElem.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;

    questionTextBox.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    
    // Reset and add animation class to question box
    questionTextBox.classList.remove('active');
    void questionTextBox.offsetWidth; // Trigger reflow
    questionTextBox.classList.add('active');
    feedbackMessage.textContent = '';
    feedbackMessage.style.color = 'transparent';

    // Add options to the DOM
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        optionsContainer.appendChild(button);

        setTimeout(() => {
            button.classList.add('active');
        }, index * 100);
    });

    // Speak the question after a short delay to ensure previous speech is canceled
    setTimeout(() => {
        speak(currentQuestion.question, handleAutoAnswer);
    }, 200); // 200ms delay
}

// -------------------------------------------------------------
// আপনার অনুরোধ অনুযায়ী সংশোধিত handleAutoAnswer() ফাংশন
// -------------------------------------------------------------
function handleAutoAnswer() {
    stopSpeaking(); // কোনো চলমান স্পিচ বন্ধ করুন
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion || currentQuestion.status !== null) {
        return;
    }

    // ব্যবহারকারী যাতে কোনো অপশনে ক্লিক করতে না পারে তার জন্য সবগুলো অপশন বাটন অক্ষম করা হলো
    const options = optionsContainer.children;
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }

    // ⭐ পরিবর্তিত লাইন: উত্তরটি প্রকাশ করার আগে ৫ সেকেন্ড অপেক্ষা করার জন্য setTimeout ব্যবহার করা হলো
    setTimeout(() => {
        const correctAnswer = currentQuestion.answer;
        currentQuestion.userAnswer = correctAnswer;
        currentQuestion.status = 'correct';
        correctCount++;

        // সঠিক উত্তরটি খুঁজে বের করে হাইলাইট করা হলো
        Array.from(optionsContainer.children).forEach(optionBtn => {
            if (optionBtn.textContent === correctAnswer) {
                optionBtn.classList.add('selected', 'correct');
            }
        });

        score++;
        scoreDisplayElem.textContent = score.toFixed(2);

        // কেবল উত্তরটি সরাসরি বলা হচ্ছে
        speak(`${correctAnswer}`, () => {
            setTimeout(() => {
                currentQuestionIndex++;
                loadQuestion();
            }, 1500); // পরের প্রশ্নে যাওয়ার আগে ১.৫ সেকেন্ড বিরতি
        });
    }, 5000); // ⭐ পরিবর্তিত মান: 5000 মিলিসেকেন্ড = ৫ সেকেন্ড
}

// -------------------------------------------------------------
// এখানে কোনো পরিবর্তন নেই
// -------------------------------------------------------------

function handleSubmitQuiz() {
    stopSpeaking(); // Stop speech before showing results
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    displayResults();
    // Save results to Firebase
    saveQuizResult(userName, score, correctCount, wrongCount);
}

// Function to display quiz results
function displayResults() {
    const finalScoreElem = document.getElementById('finalScore');
    const correctAnswersElem = document.getElementById('correctAnswers');
    const wrongAnswersElem = document.getElementById('wrongAnswers');
    const skippedQuestionsElem = document.getElementById('skippedQuestions');
    const percentageElem = document.getElementById('percentage');
    const percentageBarFill = document.getElementById('percentageBarFill');
    const userStatusElem = document.getElementById('userStatus');

    finalScoreElem.textContent = score.toFixed(2);
    correctAnswersElem.textContent = correctCount;
    wrongAnswersElem.textContent = wrongCount;
    skippedQuestionsElem.textContent = skippedCount;

    const totalQuestions = questions.length;
    const percentage = (correctCount / totalQuestions) * 100;
    percentageElem.textContent = percentage.toFixed(2);
    percentageBarFill.style.width = percentage.toFixed(2) + '%';

    if (percentage >= passMarkPercentage) {
        userStatusElem.textContent = 'অভিনন্দন! আপনি পাশ করেছেন।';
        userStatusElem.style.color = 'green';
        percentageBarFill.style.backgroundColor = '#4CAF50';
    } else {
        userStatusElem.textContent = 'দুঃখিত! আপনি পাশ করতে পারেননি।';
        userStatusElem.style.color = 'red';
        percentageBarFill.style.backgroundColor = '#f44336';
    }
}


// Firebase integration

// Note: You must initialize Firebase in your HTML file before using it.
// Here is the placeholder for the database reference.
// Make sure to configure your own Firebase project details in index.html
const dbRef = firebase.database().ref('quiz_results');

function saveQuizResult(userName, score, correctCount, wrongCount) {
    const totalQuestions = questions.length;
    const resultData = {
        name: userName,
        score: score,
        correct: correctCount,
        wrong: wrongCount,
        skipped: totalQuestions - correctCount - wrongCount,
        percentage: (correctCount / totalQuestions) * 100,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    };

    dbRef.push(resultData, (error) => {
        if (error) {
            console.error("Data could not be saved." + error);
        } else {
            console.log("Data saved successfully.");
            fetchAndDisplayRankings();
        }
    });
}

function fetchAndDisplayRankings() {
    const rankListElem = document.getElementById('rankList');
    rankListElem.innerHTML = '';
    dbRef.orderByChild('percentage').limitToLast(10).once('value', (snapshot) => {
        const rankings = [];
        snapshot.forEach((childSnapshot) => {
            const result = childSnapshot.val();
            rankings.push(result);
        });

        rankings.sort((a, b) => b.percentage - a.percentage);

        rankings.forEach((result, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${result.name}: ${result.percentage.toFixed(2)}%`;
            rankListElem.appendChild(listItem);
        });
    });
}


// New: Detailed answers functionality
function displayDetailedQuestions(filter) {
    resultSummary.style.display = 'none'; // Hide summary
    detailedAnswersContainer.style.display = 'block'; // Show detailed view
    questionsList.innerHTML = ''; // Clear previous list

    let filteredQuestions = [];
    if (filter === 'all') {
        filteredQuestions = questions;
    } else if (filter === 'correct') {
        filteredQuestions = questions.filter(q => q.status === 'correct');
    } else if (filter === 'wrong') {
        filteredQuestions = questions.filter(q => q.status === 'wrong');
    } else if (filter === 'skipped') {
        filteredQuestions = questions.filter(q => q.status === 'skipped');
    }
    
    // Set the title
    if (filter === 'all') {
        detailedAnswersTitle.textContent = 'সকল উত্তর';
    } else if (filter === 'correct') {
        detailedAnswersTitle.textContent = 'সঠিক উত্তর';
    } else if (filter === 'wrong') {
        detailedAnswersTitle.textContent = 'ভুল উত্তর';
    } else if (filter === 'skipped') {
        detailedAnswersTitle.textContent = 'বাদ দেওয়া প্রশ্ন';
    }

    filteredQuestions.forEach(q => {
        const originalQuestionIndex = questions.findIndex(originalQ => originalQ.question === q.question);
        const listItem = document.createElement('li');
        listItem.classList.add('detailed-question-item');

        let statusClass = '';
        let statusText = '';
        if (q.status === 'correct') {
            statusClass = 'status-correct';
            statusText = 'সঠিক';
        } else if (q.status === 'wrong') {
            statusClass = 'status-wrong';
            statusText = 'ভুল';
        } else if (q.status === 'skipped') {
            statusClass = 'status-skipped';
            statusText = 'বাদ দেওয়া হয়েছে';
        }
        // Get original question index
        const questionNumber = originalQuestionIndex + 1; // 1-based index

        let questionHtml = `
            <div class="question-header">
                <span class="question-number">${questionNumber}.</span>
                <span class="question-text">${q.question}</span>
                <span class="status-indicator ${statusClass}">${statusText}</span>
            </div>
            <ul class="detailed-options">
        `;

        q.options.forEach(option => {
            let optionClass = '';
            if (q.userAnswer === option) {
                if (q.status === 'correct') {
                    optionClass = 'selected-correct';
                } else if (q.status === 'wrong') {
                    optionClass = 'selected-wrong';
                }
            }
            if (option === q.answer && q.status !== 'correct') { // Always show correct answer if user was wrong or skipped
                optionClass += ' correct-answer-highlight';
            }
            
            questionHtml += `<li class=\"${optionClass}\">${option}</li>`;
        });

        questionHtml += `</ul>`;
        listItem.innerHTML = questionHtml;
        questionsList.appendChild(listItem);
    });
}


// Function to go back to result summary
function backToSummaryScreen() {
    detailedAnswersContainer.style.display = 'none'; // Hide detailed view
    resultSummary.style.display = 'block'; // Show summary
}
