import React, { useState } from "react";

const Greetings = (props) => {
    return(
        <div>
            <h1>Wellcome, {props.name}!</h1>
        </div>
    )
}

export default Greetings;