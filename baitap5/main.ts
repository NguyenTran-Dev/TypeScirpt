/** @format */
if (typeof (document) != 'undefined') {
  const questionAnswer: any = [
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      answers: [
        {
          id: 'A',
          answer: '<script>',
        },
        {
          id: 'B',
          answer: '<javaScript>',
        },
        {
          id: 'C',
          answer: '<js>',
        },
      ],
      correct: 'A',
    },
    {
      question: 'Where is the correct place to insert a JavaScript?',
      answers: [
        {
          id: 'A',
          answer: 'The <head> section',
        },
        {
          id: 'B',
          answer: 'The <body> section',
        },
        {
          id: 'C',
          answer: 'Both the <head> section and the <body> section are correct',
        },
        {
          id: 'D',
          answer: 'All answer correct',
        },
      ],
      correct: 'C',
    },
    {
      question:
        'What is the correct syntax for referring to an external script called "xxx.js"?',
      answers: [
        {
          id: 'A',
          answer: '<script src="xxx.js">',
        },
        {
          id: 'B',
          answer: '<script href="xxx.js',
        },
        {
          id: 'C',
          answer: '<script name="xxx.js">',
        },
        {
          id: 'D',
          answer: '<script link="xxx.js">',
        },
      ],
      correct: 'A',
    },
    {
      question: 'How does a FOR loop start?',
      answers: [
        {
          id: 'A',
          answer: 'for(i <=5;i++)',
        },
        {
          id: 'B',
          answer: 'for(i = 0;i <= 5)',
        },
        {
          id: 'C',
          answer: 'for i = 1 to 5',
        },
        {
          id: 'D',
          answer: 'for(i = 0;i <= 5;i++)',
        },
      ],
      correct: 'D',
    },
    {
      question: 'How do you write "Hello World" in an alert box?',
      answers: [
        {
          id: 'A',
          answer: 'alertBox("Hello World"',
        },
        {
          id: 'B',
          answer: 'msg("Hello World")',
        },
        {
          id: 'C',
          answer: 'msgBox("Hello World")',
        },
        {
          id: 'D',
          answer: 'alert("Hello World")',
        },
      ],
      correct: 'D',
    },
    {
      question: 'How do you create a function in JavaScript?',
      answers: [
        {
          id: 'A',
          answer: 'function:myFunction()',
        },
        {
          id: 'B',
          answer: 'function=myFunction()',
        },
        {
          id: 'C',
          answer: 'function myFunction()',
        },
        {
          id: 'D',
          answer: 'function => myFunction()',
        },
      ],
      correct: 'C',
    },
    {
      question: 'How do you call a function named "myFunction"?',
      answers: [
        {
          id: 'A',
          answer: 'call function myFunction()',
        },
        {
          id: 'B',
          answer: 'call myFunction()',
        },
        {
          id: 'C',
          answer: 'myFunction()',
        },
        {
          id: 'D',
          answer: 'call myFunction() function',
        },
      ],
      correct: 'C',
    },
    {
      question: 'How to write an IF statement in JavaScript?',
      answers: [
        {
          id: 'A',
          answer: 'if i = 5 then',
        },
        {
          id: 'B',
          answer: 'if (i == 5)',
        },
        {
          id: 'C',
          answer: 'if i == 5 then',
        },
        {
          id: 'D',
          answer: 'if i = 5',
        },
      ],
      correct: 'B',
    },
    {
      question:
        'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      answers: [
        {
          id: 'A',
          answer: 'if (i != 5)',
        },
        {
          id: 'B',
          answer: 'if i != 5 then',
        },
        {
          id: 'C',
          answer: 'if i <> 5',
        },
        {
          id: 'D',
          answer: 'if (i <> 5)',
        },
      ],
      correct: 'A',
    },
    {
      question: 'How does a WHILE loop start?',
      answers: [
        {
          id: 'A',
          answer: 'while i = 1 to 10',
        },
        {
          id: 'B',
          answer: 'while (i <= 10',
        },
        {
          id: 'C',
          answer: 'while (i<=10; i++)',
        },
        {
          id: 'D',
          answer: 'while i<=10 && i++',
        },
      ],
      correct: 'B',
    },
  ];

  const question: HTMLElement = document.getElementById('question');
  const questionName: HTMLElement = document.getElementById('questionName');
  const listAnswerContent: HTMLElement = document.getElementById('listAnswer');
  const answers = <any>document.getElementsByName('answer');
  const accept = <HTMLInputElement>document.getElementById('accept');
  const submit = <HTMLInputElement>document.getElementById('submit');
  const time: HTMLElement = document.getElementById('time');
  const groupTime: HTMLElement = document.getElementById('group__time');
  const resultTotal: HTMLElement = document.getElementById('resultTotal');
  const secondCheck: any = localStorage.getItem('countDown');

  window.onload = () => {
    questionNumber(indexQuest);
    renderAnswer();
    showBtnQuestion();
  };
  let listAnswer: any = [];
  let indexQuest: number = 0;
  const showBtnQuestion = () => {
    for (let i: number = 0; i < questionAnswer.length; i++) {
      const btn = document.createElement('button');
      btn.innerText = `Question ${i + 1}`;
      document.getElementById('listQuestion').appendChild(btn);
      btn.classList.add('btnSbm');
    }
    const btn:any = document.querySelectorAll('.btnSbm');
    (<any>Array.from(btn, (item: any, index: number) => {
      item.onclick = () => {
        questionNumber(index);
      };
    }));
  };

  const showAnswer = (id: number, answers: string) => {
    const answer = document.createElement('div');
    answer.classList.add('form-check');
    answer.innerHTML = `
  <input class="form-check-input" type="radio" name="answer" value='${id}' id="A" checked>
  <label class="form-check-label" id="answer${id}">
  </label>
  `;
    listAnswerContent.appendChild(answer);
    if (answers) {
      document.getElementById(`answer${id}`).innerText = answers;
    }
  };

  const questionNumber = (index: number) => {
    indexQuest = index;
    question.innerText = `Question: ${index + 1}`;
    questionName.innerText = questionAnswer[index].question;
    const formChecks:any = document.querySelectorAll('.form-check');
    for (const formCheck of formChecks) {
      formCheck.remove();
    }
    questionAnswer[index].answers.map((item: any) => {
      if (item.id) {
        showAnswer(item.id, item.answer);
      }
    });
  };

  const d:any = new Date();
  if (secondCheck === null || secondCheck <= 0) {
    d.setSeconds(400 + d.getSeconds());
    const countDownDate: any = d.getTime();
    localStorage.setItem('countDown', countDownDate);
  }
  const second: any = localStorage.getItem('countDown');
  d.setTime(second);
  const countDown:number = d.getTime();
  const x = setInterval(():void => {
    const now:number = new Date().getTime();
    const distance:number = countDown - now;
    const minutes:number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds:number = Math.floor((distance % (1000 * 60)) / 1000);

    if (seconds < 10) {
      time.innerHTML = `Time spend: ${minutes}:0${seconds}`;
    } else {
      time.innerHTML = `Time spend: ${minutes}:${seconds}`;
    }
    if (distance < 0) {
      alert('Time out for homework!');
      time.innerHTML = `Time spend: 00:00`;
      submitEx();
      clearInterval(x);
      localStorage.clear();
    }
  }, 400);
  const saveAnswer = (id: number):void => {
    let answer: string;
    const result: any = JSON.parse(localStorage.getItem('result'));
    for (let i:number = 0; i < answers.length; i++) {
      if (answers[i].checked == true) {
        answer = answers[i].value;
      }
    }
    let check:number;
    if (result) {
      listAnswer = result;
      for (let i = 0; i < result.length; i++) {
        if (result[i].id == id) {
          check = i;
        }
      }
      if (check) {
        listAnswer.splice(check, 1, {
          id,
          answer,
        });
      } else if (check == 0) {
        listAnswer.splice(0, 1, {
          id,
          answer,
        });
      } else {
        listAnswer.push({
          id,
          answer,
        });
      }
    } else {
      listAnswer.push({
        id,
        answer,
      });
    }
    localStorage.setItem('result', JSON.stringify(listAnswer));
    if (indexQuest < 9) {
      questionNumber(indexQuest + 1);
    }
  };

  const submitEx = () => {
    let score:number = 0;
    submit.disabled = true;
    groupTime.style.display = 'none';
    resultTotal.style.display = 'block';
    const result:any = JSON.parse(localStorage.getItem('result'));
    for (let j:number = 0; j < questionAnswer.length; j++) {
      const answersContent = document.createElement('li');
      answersContent.innerText = `Question ${j + 1}.${questionAnswer[j].correct}`;
      document.getElementById('answerCorrect').appendChild(answersContent);
    }
    if (result) {
      for (let i:number = 0; i < result.length; i++) {
        const answersList = document.createElement('li');
        answersList.innerText = `Question ${result[i].id + 1}.${result[i].answer
          }`;
        document.getElementById('yourA').appendChild(answersList);
        for (let j:number = 0; j < questionAnswer.length; j++) {
          if (
            j == result[i].id &&
            questionAnswer[j].correct == result[i].answer
          ) {
            answersList.style.color = 'green';
            score++;
          }
        }
      }
    } else {
      score = 0;
    }
    document.getElementById('total').innerHTML = `Total Score:${score}/10`;
    clearInterval(x);
    localStorage.clear();
  };

  const renderAnswer = ():void => {
    document.getElementById('yourAnswer').innerHTML = '';
    const result2:any = JSON.parse(localStorage.getItem('result'));
    if (result2) {
      for (let i:number = 0; i < result2.length; i++) {
        const answersList = document.createElement('li');
        answersList.innerText = `Question ${result2[i].id + 1}.${result2[i].answer
          }`;
        document.getElementById('yourAnswer').appendChild(answersList);
      }
    }
  };
  submit.onclick = ():void => {
    const check:any = window.confirm('Are you sure submit your exercise?');
    if (check == true) {
      submitEx();
    }
  };

  accept.onclick = ():void => {
    saveAnswer(indexQuest);
    renderAnswer();
  };
}