//Prompts actions
export const nextPrompt = () => ({
    type: "NEXT_PROMPT",
});
export const lastPrompt = () => ({
    type: "LAST_PROMPT",
});
export const jumpToPrompt = (p) => ({
    type: "JUMP_TO_PROMPT",
    payload : p
});