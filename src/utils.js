export const getImageUrl = (path) => {
    return new URL (`/assets/${path}`, import.meta.url).href; //Dynamicallly import images in assets
};