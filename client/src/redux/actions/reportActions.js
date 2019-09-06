//Report actions
export const addClient = (client) => ({
    type: "ADD_CLIENT",
    payload : client
});

export const addSubject = (subject) => ({
    type: "ADD_SUBJECT",
    payload: subject
})

export const addComp = (comp) => ({
    type: "ADD_COMP",
    payload: comp
})

export const removeComp = (compIndex) => ({
    type: "ADD_COMP",
    payload: compIndex
})

export const addMarket = (market) => ({
    type: "ADD_MARKET",
    payload: market
})