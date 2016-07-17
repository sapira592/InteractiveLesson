
##Iteractive Lesson API
---
date: "17 ביולי 2016"
---

This is an application based on Node.js and Angular.js.
The goal of this app, is create an iteractive lesson between theacher and students during the lesson.

This Web Services provide all needed functionality to perform the above-mentioned goal.

#How To Use?

** http://interactive-lesson.herokuapp.com/ - general ruote to index page **

There are 7 main moduls:

#####1.Lesson:

   http://interactive-lesson.herokuapp.com/getAllLessons:
```http
   method: GET,
   parameter required: none,
   purpose: return all the lesson of the logged in teacher,
   belong to: teacher app
```


   http://interactive-lesson.herokuapp.com/createLesson:
```http
   method: POST (passed by form),
   parameter required: id, subject, grade, lessonTitle, date
   purpose: add new lesson,
   belong to: teacher app
```


   http://interactive-lesson.herokuapp.com/updateLesson:
```http
   method: POST (passed by form),
   parameter required: file - choosen image, id
   purpose: add image for specific lesson,
   belong to: teacher app
```

#####2.Teacher: 

   http://interactive-lesson.herokuapp.com/teacherLogin:
```http
   method: POST (passed by form),
   parameter required: id, pass
   purpose: login,
   belong to: teacher app
```

#####3.Student: 

   http://interactive-lesson.herokuapp.com/studentLogin:
```http
   method: POST (passed by form),
   parameter required: id, password,
   purpose: login, 
   belong to: student app
```

   http://interactive-lesson.herokuapp.com/getProgress:
```http
   method: POST (passed by form),
   parameter required: lessonID,
   purpose: returen the progerss of the students in all the activities that belongs to specific lesson,
   belong to: teacher & student app
```

#####4.KeyWords:

   http://interactive-lesson.herokuapp.com/getAllKeyWords:
```http
   method: GET,
   parameter required: none,
   purpose: return all the keywords of the current lesson,
   belong to: student app
```

   http://interactive-lesson.herokuapp.com/createKeyWord:
```http
   method: POST (passed by form),
   parameter required: Keyword, Description,
   purpose: add new keyword to current lesson,
   belong to: teacher app 
```

#####5.Multiple Choice: 

   http://interactive-lesson.herokuapp.com/getAllMultipleChoice:
```http
   method: GET,
   parameter required: none,
   purpose: return all the MultipleChoices activities of the current lesson,
   belong to: student app
```

   http://interactive-lesson.herokuapp.com/createMultipleChoice:
```http
   method: POST (passed by form),
   parameter required: Question, Answer1, correct1, Answer2, correct2
                       Answer3, correct3 , Answer4, correct4,
   purpose: add new MultipleChoice activity to current lesson,
   belong to: teacher app 
```

   http://interactive-lesson.herokuapp.com/removeMultipleChoice:
```http
   method: POST (passed by form),
   parameter required: none
   purpose: delete specific MultipleChoice activity,
   belong to: teacher app
```

#####6.Answers: 

   http://interactive-lesson.herokuapp.com/getAllAnswers:
```http
   method: GET,
   parameter required: questionID,
   purpose: return all Answers of the given questionID,
   belong to: teachet & student app
```

   http://interactive-lesson.herokuapp.com/addAnswer:
```http
   method: POST (passed by form),
   parameter required: name(of the responser), answer, questionID, 
   purpose: add new Answer to the given questionID,
   belong to: teacher & student app 
```

#####7.Questions: 

   http://interactive-lesson.herokuapp.com/getAllQuestions:
```http
   method: GET,
   parameter required: none,
   purpose: return all Questions of the current lesson,
   belong to: teachet & student app
```

   http://interactive-lesson.herokuapp.com/addQuestion:
```http
   method: POST (passed by form),
   parameter required: Question, 
   purpose: add new Question to the current lessonD,
   belong to: student app 
```


************************************************************
###Copyright (c) Sapir Abargil, Niv Levi
