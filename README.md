# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



Explantin on the project - 

1. אפשר לשנות את השם של התיקיות שבהם נשים את הקבצים רק חשוב לעדכן את זה בקובץ 
app/_layout.tsx
איפה שנמצא המידע על המסכים על מנת שלא יופיע צג ניווט בצד העליון של המסך

2. index.tsx 
זה קובץ שנועד על מנת שאוכל להציג איזה מסך שארצה בסימולוטור, אני פשוט נכנס אל הקובץ ומשנה את ההפניה אל המסך שארצה. זה השם שלו כי זה השם שהמערכת מחפשת דבר ראשון וככה זה יקפוץ ראשון ויפנה לאן שצריך

3. בכל מסך חדש שנפתח יש רק הגדרה אחת ובתוכה כותבים את כל מה שנמצא בתוך המסך כלומר שם נמצא הכול, זה יתחיל ויגמר תמיד ב
<view>

4. בשביל לרדת שורה באמצע טקסט צריך לכתוב - {'\n'} 

5.  בשביל להוסיף פונט צריך ללכת לגוגל פונטס לחפש את הפונט שאנחנו נרצה להוריד אותו ולשים אותו בתיקיית 
assest/fonts
אחר כך ללכת לקוד, לקובץ של הלייאאוט הכללי של כל האפליקציה ופשוט לשים נתיב מדוייק אל הפונט שלנו

6. בשביל להפוך משהו להיות כפתור נכתוב - 
<TouchableOpacity style={art.Eye} onPress={() => console.log('Show String')}></TouchableOpacity>

7. אם יוצרים לאייאוט חדש בתוך תיקייה כמו הלייאאוט בסיין אפ, צריך לכתוב קצת קוד בתוך הקובץ שאליו מכוונים ושהוא קיים על מנת שהוא יופיע ובנוסף צריך להוסיף לבד את ההגדרה שיבטל את המסך העליון בתוך המסך שמראה על הניווט

8. באג אפשרי שיכול להיות הוא שמייצרים כפתור ואז הוא נהיה לא לחיץ כל כך טוב, זה קורה בגלל ששמים את הטקסט שכתוב בתוך הכפתור בתור טקסט נפרד מהכפתור ואז הוא תופס מקום מהכפתור ולרוב יעבוד ללחוץ על הכפתור רק מהצדדים חשוב לשים את הטקסט בתוך touchableopasity

9. בשביל לשלב בין עיצובים לדוגמא אם רוצים שיהיה וי בצבע שחור ואז אם תנאי מתקיים הוא יהפוך לצבע ירוק צריך לכתוב ככה
  style={[style.CheckIcon, usernameValid==true && style.ActiveCheckIcon]}
זה אומר שהוא מקבל את העיצוב של הוי כצבע שחור ואז אם התנאי קורה העיצוב השני בצבע ירוק ידרוס את העיצוב הראשון מעבר לכל הדברים שהעיצוב הראשון הביא. כלומר הוא השתמש בכל התנאים של העיצוב הראשון ואם בשניהם כתוב צבע אז הוא ישתמש בצבע שכתוב במידה והתנאי מתקיים

10. בשביל ללכת תיקייה אחת אחורה צריך לכתוב ../

11. השורה הבאה יכולה לגרום לשגיאה שהמסך לא יעבור למסך הבא והוא יכתוב שהוא לא קיים -
  router.push({ pathname: '../SignTwo', params: { email }})}


  12. באג שיכול לקרות הרבה - שמריצים את הפרויקט ואז מנסים לפתוח אותו כסימולטור באייפון או אנדרואיד בטעות אפשר לפני ללחוץ על הכפתור המקש אס כמו סייב באנגלית והוא יכול להחליף את הניסיון לחשבון פיתוח כאילו אנחנו ממש מייצאים את האפליקציה ואנחנו לא רוצים את זה כי אז צריך להוריד הרבה דברים ספציפים ואין לנו צורך בזה. הפתרון הוא לנסות להריץ וללחוץ פשוט עוד פעם אס בשביל לחזור למצב של אקספו גו

  13. בשביל לשנות את השם של האפליקציה חשוב לשנות את השם של התיקייה קודם - כאשר הויזואל סטודיו סגור, אחר כך לשנות את השם בקבצים הבאים - 
  app.json ,  package.json , package-lock.json
  בפאקאג חשוב שהשם יהיה באותיות קטנות

  14. You're right, you can't use the full Firebase SDK with native modules, including Firebase Authentication, directly in the Expo Go app for iOS and Android. Expo Go uses a pre-compiled binary that doesn't include the native code required by Firebase. 
