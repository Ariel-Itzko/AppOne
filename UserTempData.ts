let email = '';
let password = '';
let username = '';

export function setTempEmail(val: string) {
  email = val }


export function setTempPassword(val: string) {
  password = val }


export function setTempUsername(val: string) {
  username = val }


export function getUserData() {
    return {email, password, username } }




// לוקחים את המשתנים מכל מיני מקומות שהם נכתבו במסכי האפליקציה ועכשיו שומרים אותם כמשתנים זמניים כאן בשביל לבדוק אם הם נכונים / להוסיף משתמש