import React from "react";

const Context = React.createContext({
    text: "Choose Service",
    step: 1,
    update: () => {}
})

export default Context;