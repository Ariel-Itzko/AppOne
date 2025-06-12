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

7.אם יוצרים לאייאוט חדש בתוך תיקייה כמו הלייאאוט בסיין אפ, צריך לכתוב קצת קוד בתוך הקובץ שאליו מכוונים ושהוא קיים על מנת שהוא יופיע ובנוסף צריך להוסיף לבד את ההגדרה שיבטל את המסך העליון בתוך המסך שמראה על הניווט