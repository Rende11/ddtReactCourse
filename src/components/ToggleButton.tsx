import React, { useState } from 'react'

export default function ToggleButton() {
    const [show, setToggleState] = useState(false);

    return (
        <div>
          <button
           type="button"
           onClick={() => setToggleState((curr) => !curr) }>
            Show info
          </button>
          {show ? <p>Made by <a href="https://github.com/Rende11/ddtReactCourse">@rende11.</a></p> : null}
        </div>
    );
}
