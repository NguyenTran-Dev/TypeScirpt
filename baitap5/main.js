/** @format */
if (typeof (document) != 'undefined') {
    var questionAnswer_1 = [
        {
            question: 'Inside which HTML element do we put the JavaScript?',
            answers: [
                {
                    id: 'A',
                    answer: '<script>'
                },
                {
                    id: 'B',
                    answer: '<javaScript>'
                },
                {
                    id: 'C',
                    answer: '<js>'
                },
            ],
            correct: 'A'
        },
        {
            question: 'Where is the correct place to insert a JavaScript?',
            answers: [
                {
                    id: 'A',
                    answer: 'The <head> section'
                },
                {
                    id: 'B',
                    answer: 'The <body> section'
                },
                {
                    id: 'C',
                    answer: 'Both the <head> section and the <body> section are correct'
                },
                {
                    id: 'D',
                    answer: 'All answer correct'
                },
            ],
            correct: 'C'
        },
        {
            question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
            answers: [
                {
                    id: 'A',
                    answer: '<script src="xxx.js">'
                },
                {
                    id: 'B',
                    answer: '<script href="xxx.js'
                },
                {
                    id: 'C',
                    answer: '<script name="xxx.js">'
                },
                {
                    id: 'D',
                    answer: '<script link="xxx.js">'
                },
            ],
            correct: 'A'
        },
        {
            question: 'How does a FOR loop start?',
            answers: [
                {
                    id: 'A',
                    answer: 'for(i <=5;i++)'
                },
                {
                    id: 'B',
                    answer: 'for(i = 0;i <= 5)'
                },
                {
                    id: 'C',
                    answer: 'for i = 1 to 5'
                },
                {
                    id: 'D',
                    answer: 'for(i = 0;i <= 5;i++)'
                },
            ],
            correct: 'D'
        },
        {
            question: 'How do you write "Hello World" in an alert box?',
            answers: [
                {
                    id: 'A',
                    answer: 'alertBox("Hello World"'
                },
                {
                    id: 'B',
                    answer: 'msg("Hello World")'
                },
                {
                    id: 'C',
                    answer: 'msgBox("Hello World")'
                },
                {
                    id: 'D',
                    answer: 'alert("Hello World")'
                },
            ],
            correct: 'D'
        },
        {
            question: 'How do you create a function in JavaScript?',
            answers: [
                {
                    id: 'A',
                    answer: 'function:myFunction()'
                },
                {
                    id: 'B',
                    answer: 'function=myFunction()'
                },
                {
                    id: 'C',
                    answer: 'function myFunction()'
                },
                {
                    id: 'D',
                    answer: 'function => myFunction()'
                },
            ],
            correct: 'C'
        },
        {
            question: 'How do you call a function named "myFunction"?',
            answers: [
                {
                    id: 'A',
                    answer: 'call function myFunction()'
                },
                {
                    id: 'B',
                    answer: 'call myFunction()'
                },
                {
                    id: 'C',
                    answer: 'myFunction()'
                },
                {
                    id: 'D',
                    answer: 'call myFunction() function'
                },
            ],
            correct: 'C'
        },
        {
            question: 'How to write an IF statement in JavaScript?',
            answers: [
                {
                    id: 'A',
                    answer: 'if i = 5 then'
                },
                {
                    id: 'B',
                    answer: 'if (i == 5)'
                },
                {
                    id: 'C',
                    answer: 'if i == 5 then'
                },
                {
                    id: 'D',
                    answer: 'if i = 5'
                },
            ],
            correct: 'B'
        },
        {
            question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
            answers: [
                {
                    id: 'A',
                    answer: 'if (i != 5)'
                },
                {
                    id: 'B',
                    answer: 'if i != 5 then'
                },
                {
                    id: 'C',
                    answer: 'if i <> 5'
                },
                {
                    id: 'D',
                    answer: 'if (i <> 5)'
                },
            ],
            correct: 'A'
        },
        {
            question: 'How does a WHILE loop start?',
            answers: [
                {
                    id: 'A',
                    answer: 'while i = 1 to 10'
                },
                {
                    id: 'B',
                    answer: 'while (i <= 10'
                },
                {
                    id: 'C',
                    answer: 'while (i<=10; i++)'
                },
                {
                    id: 'D',
                    answer: 'while i<=10 && i++'
                },
            ],
            correct: 'B'
        },
    ];
    var question_1 = document.getElementById('question');
    var questionName_1 = document.getElementById('questionName');
    var listAnswerContent_1 = document.getElementById('listAnswer');
    var answers_1 = document.getElementsByName('answer');
    var accept = document.getElementById('accept');
    var submit_1 = document.getElementById('submit');
    var time_1 = document.getElementById('time');
    var groupTime_1 = document.getElementById('group__time');
    var resultTotal_1 = document.getElementById('resultTotal');
    var secondCheck = localStorage.getItem('countDown');
    window.onload = function () {
        questionNumber_1(indexQuest_1);
        renderAnswer_1();
        showBtnQuestion_1();
    };
    var listAnswer_1 = [];
    var indexQuest_1 = 0;
    var showBtnQuestion_1 = function () {
        for (var i = 0; i < questionAnswer_1.length; i++) {
            var btn_1 = document.createElement('button');
            btn_1.innerText = "Question ".concat(i + 1);
            document.getElementById('listQuestion').appendChild(btn_1);
            btn_1.classList.add('btnSbm');
        }
        var btn = document.querySelectorAll('.btnSbm');
        Array.from(btn, function (item, index) {
            item.onclick = function () {
                questionNumber_1(index);
            };
        });
    };
    var showAnswer_1 = function (id, answers) {
        var answer = document.createElement('div');
        answer.classList.add('form-check');
        answer.innerHTML = "\n  <input class=\"form-check-input\" type=\"radio\" name=\"answer\" value='".concat(id, "' id=\"A\" checked>\n  <label class=\"form-check-label\" id=\"answer").concat(id, "\">\n  </label>\n  ");
        listAnswerContent_1.appendChild(answer);
        if (answers) {
            document.getElementById("answer".concat(id)).innerText = answers;
        }
    };
    var questionNumber_1 = function (index) {
        indexQuest_1 = index;
        question_1.innerText = "Question: ".concat(index + 1);
        questionName_1.innerText = questionAnswer_1[index].question;
        var formChecks = document.querySelectorAll('.form-check');
        for (var _i = 0, formChecks_1 = formChecks; _i < formChecks_1.length; _i++) {
            var formCheck = formChecks_1[_i];
            formCheck.remove();
        }
        questionAnswer_1[index].answers.map(function (item) {
            if (item.id) {
                showAnswer_1(item.id, item.answer);
            }
        });
    };
    var d = new Date();
    if (secondCheck === null || secondCheck <= 0) {
        d.setSeconds(400 + d.getSeconds());
        var countDownDate = d.getTime();
        localStorage.setItem('countDown', countDownDate);
    }
    var second = localStorage.getItem('countDown');
    d.setTime(second);
    var countDown_1 = d.getTime();
    var x_1 = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDown_1 - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (seconds < 10) {
            time_1.innerHTML = "Time spend: ".concat(minutes, ":0").concat(seconds);
        }
        else {
            time_1.innerHTML = "Time spend: ".concat(minutes, ":").concat(seconds);
        }
        if (distance < 0) {
            alert('Time out for homework!');
            time_1.innerHTML = "Time spend: 00:00";
            submitEx_1();
            clearInterval(x_1);
            localStorage.clear();
        }
    }, 400);
    var saveAnswer_1 = function (id) {
        var answer;
        var result = JSON.parse(localStorage.getItem('result'));
        for (var i = 0; i < answers_1.length; i++) {
            if (answers_1[i].checked == true) {
                answer = answers_1[i].value;
            }
        }
        var check;
        if (result) {
            listAnswer_1 = result;
            for (var i = 0; i < result.length; i++) {
                if (result[i].id == id) {
                    check = i;
                }
            }
            if (check) {
                listAnswer_1.splice(check, 1, {
                    id: id,
                    answer: answer
                });
            }
            else if (check == 0) {
                listAnswer_1.splice(0, 1, {
                    id: id,
                    answer: answer
                });
            }
            else {
                listAnswer_1.push({
                    id: id,
                    answer: answer
                });
            }
        }
        else {
            listAnswer_1.push({
                id: id,
                answer: answer
            });
        }
        localStorage.setItem('result', JSON.stringify(listAnswer_1));
        if (indexQuest_1 < 9) {
            questionNumber_1(indexQuest_1 + 1);
        }
    };
    var submitEx_1 = function () {
        var score = 0;
        submit_1.disabled = true;
        groupTime_1.style.display = 'none';
        resultTotal_1.style.display = 'block';
        var result = JSON.parse(localStorage.getItem('result'));
        for (var j = 0; j < questionAnswer_1.length; j++) {
            var answersContent = document.createElement('li');
            answersContent.innerText = "Question ".concat(j + 1, ".").concat(questionAnswer_1[j].correct);
            document.getElementById('answerCorrect').appendChild(answersContent);
        }
        if (result) {
            for (var i = 0; i < result.length; i++) {
                var answersList = document.createElement('li');
                answersList.innerText = "Question ".concat(result[i].id + 1, ".").concat(result[i].answer);
                document.getElementById('yourA').appendChild(answersList);
                for (var j = 0; j < questionAnswer_1.length; j++) {
                    if (j == result[i].id &&
                        questionAnswer_1[j].correct == result[i].answer) {
                        answersList.style.color = 'green';
                        score++;
                    }
                }
            }
        }
        else {
            score = 0;
        }
        document.getElementById('total').innerHTML = "Total Score:".concat(score, "/10");
        clearInterval(x_1);
        localStorage.clear();
    };
    var renderAnswer_1 = function () {
        document.getElementById('yourAnswer').innerHTML = '';
        var result2 = JSON.parse(localStorage.getItem('result'));
        if (result2) {
            for (var i = 0; i < result2.length; i++) {
                var answersList = document.createElement('li');
                answersList.innerText = "Question ".concat(result2[i].id + 1, ".").concat(result2[i].answer);
                document.getElementById('yourAnswer').appendChild(answersList);
            }
        }
    };
    submit_1.onclick = function () {
        var check = window.confirm('Are you sure submit your exercise?');
        if (check == true) {
            submitEx_1();
        }
    };
    accept.onclick = function () {
        saveAnswer_1(indexQuest_1);
        renderAnswer_1();
    };
}
