import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/UserAuth/Login/login" />;
}