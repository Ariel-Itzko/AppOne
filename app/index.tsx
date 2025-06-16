import { Redirect } from 'expo-router';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

export default function MainScreen() {
  return <Redirect href="/UserAuth/Login/login" />;
}


// המטרה היא להציג איזה עמוד שנרצה שנוכל לראות אותו ראשון וככה לעצב אותו בסימולטור, קראנו לו אינדקס כי המערכת מזהה את השם הזה והולכת ישר אליו ומכאן נוכל להפנות בקלות