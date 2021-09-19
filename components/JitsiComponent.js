import React, { useState } from 'react'

import { Jutsu } from 'react-jutsu'

export default function JutsuComponent({roomCode}){
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')
  var test = false;
  const handleClick = event => {
    event.preventDefault()
    setRoom(roomCode);
    setName("Anonymous");
    setPassword("");
    setCall(true)
  }

  return (
    <div>
      {call ? (<Jutsu
        roomName={room}
        password={password}
        displayName={name}
        onMeetingEnd={() => console.log('Meeting has ended')}
        loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />)
        : (
          <form>
            <label for='room'>Meeting Name:&nbsp;</label>
            <input className="matchInfo" id='room' type='text' placeholder='Room' readOnly value={roomCode} /><br></br>
            <label for='room'>Your Identity:&nbsp;</label>
            <input className="matchInfo" id='name' type='text' placeholder='Name' readOnly value="Anonymous" /><br></br>
            <button onClick={handleClick} type='submit'>
              Join Call
            </button>
          </form>
        )}
    </div>
  )
}
