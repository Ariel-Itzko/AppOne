import { get, ref, set } from "firebase/database";
import { database } from "../Firebase/config";




export function addUser(userId: string, username: string, email: string, password: string) {
  return set(ref(database, 'users/' + userId), {
    username: username,
    email: email,
    password: password
  });
}



export async function getUser(userId: string) {
  const userRef = ref(database, 'users/' + userId);
  const snapshot = await get(userRef);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
}







// שני פונקציות - אחת להגדיר. משתמש חדש ולהוסיף אותו לדאטהבייס ופונקציה שנייה נועדה על מנת לבדוק אם משתמש קיים ולשלוף מידע מהדאטהבייס
// מגדיר איפה לשמור את הנתונים בדאטהבייס - ref
// משנה ושומר שם את הנתונים עצמם - set
// קורא משם את הנתונים תכלס - get