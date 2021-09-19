import Head from 'next/head'
import Script from 'next/script'
import { userService } from 'services';
import { Link } from 'components';
import JutsuComponent from 'components/JutsuComponent.js';


export default function listener() {
  return (
    <div className="p-4">
    <div className="container">
        <Script src="https://meet.jit.si/external_api.js"/>
        <h1 id="WelcomeMessage">Hi {userService.userValue?.firstName}!</h1>
        <JutsuComponent></JutsuComponent>
    </div>
  </div>
  )
}
