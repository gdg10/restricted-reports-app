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
    type: "REM_COMP",
    payload: compIndex
})

export const addMarket = (market) => ({
    type: "ADD_MARKET",
    payload: market
})

export const removeMarket = () => ({
    type: "REM_MARKET"
})

export const addScope = (scope) => ({
    type: "ADD_SCOPE",
    payload: scope
})

export const removeScope = () => ({
    type: "REM_SCOPE"
})

export const addConditions = (conditions) => ({
    type: "ADD_CONDITIONS",
    payload: conditions
})

export const removeConditions = () => ({
    type: "REM_CONDITIONS"
})

export const addExposure = (exposure) => ({
    type: "ADD_EXPOSURE",
    payload: exposure
})

export const removeExposure = () => ({
    type: "REM_EXPOSURE"
})

export const addValue = (value) => ({
    type: "ADD_VALUE",
    payload: value
})

export const removeValue = () => ({
    type: "REM_VALUE"
})

export const addDate = (date) => ({
    type : 'ADD_DATE',
    payload : date
})

export const addSources = (sources) => ({
    type : 'ADD_SOURCES',
    payload : sources
})
