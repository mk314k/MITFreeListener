import Head from 'next/head'
import Script from 'next/script'
import { userService } from 'services';
import { Link } from 'components';
import JutsuComponent from 'components/JutsuComponent.js';
import JitsiComponent from 'components/JitsiComponent.js';
import { get } from 'react-hook-form';


export default function talk() {
  function getKey() {
    var roomCode = "test";
    var matchFound = true;
    //Fetch room key from database
    //While loop waiting. . .
    //Cancel button to get out

    return [roomCode, matchFound];
  }
  var output = getKey()
  var roomCode = output[0]
  var matchFound = output[1]
  if (!matchFound) {
    window.setTimeout(function () { location.reload() }, 3000)
  }
  return (
    <div className="p-4">
      <div className="container">
      <Script src="https://meet.jit.si/external_api.js"/>
        {matchFound ? (
          <><h1 id="WelcomeMessage">Hello! Your call is waiting below!</h1><>
            <JitsiComponent roomCode={roomCode}></JitsiComponent>
          </></>
        ) : (
          <h1 id="WelcomeMessage">Hello! Waiting for listener... </h1>
        )}
      </div>
    </div>
  )
}
