const isMobile = () =>  typeof window !== "undefined" && window.matchMedia("(max-width: 500px)").matches;

export { isMobile }
