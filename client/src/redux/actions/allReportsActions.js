export const addReport = (reportUrl) => ({
    type: "ADD_REPORT",
    payload : reportUrl
});

export const removeReport = () => ({
    type: "REMOVE_REPORT"
});