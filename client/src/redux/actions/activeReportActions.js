export const makeActiveReport = (reportUrl) => ({
    type: "MAKE_ACTIVE_REPORT",
    payload : reportUrl
});

export const clearActiveReport = () => ({
    type: "CLEAR_ACTIVE_REPORT"
});