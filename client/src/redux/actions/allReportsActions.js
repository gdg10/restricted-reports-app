export const addReport = (reportUrl) => ({
    type: "ADD_REPORT",
    payload : reportUrl
});

export const removeReport = (index) => ({
    type: "REMOVE_REPORT",
    payload : index
});