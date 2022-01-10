import React, { useState } from 'react'

interface Props {
    content: any
}

export default function ToggleButton(props: Props) {
    const [show, setToggleState] = useState(false);

    return (
        <div>
          <button
           type="button"
           onClick={() => setToggleState((curr) => !curr)}>
            Show info
          </button>
          {show ? props.content : null}
        </div>
    );
}
