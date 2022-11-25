# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Shortly URL shortening API Challenge solution](#frontend-mentor---shortly-url-shortening-api-challenge-solution)
  - [Table of contents](#table-of-contents)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)
    - [Scripts](#scripts)

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   Shorten any valid URL
-   See a list of their shortened links, even after refreshing the browser
-   Copy the shortened link to their clipboard in a single click
-   Receive an error message when the `form` is submitted if:
    -   The `input` field is empty

### Screenshot

![](https://github.com/charlesmiller0412/shortly_landing_page/blob/main/Project%20Display%20Images/shortlyDesktop.png?raw=true)

### Links

-   Solution URL: [https://github.com/charlesmiller0412/shortly_landing_page](https://github.com/charlesmiller0412/shortly_landing_page)
-   Live Site URL: [https://shortly-landing-page-ecru.vercel.app/](https://shortly-landing-page-ecru.vercel.app/)

## My process

While I was able to finish all requirements for this exercise, I also wanted to go a little further and make this a CRUD app. So not only does this save when you leave the page or refresh (as long as you don't delete cookies), you can also delete an individual entry or all.

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   SCSS
-   [React](https://reactjs.org/) - JS library
-   [Next.js](https://nextjs.org/) - React framework
-   UUID
-   FontAwesome Icons

### What I learned

Here is a small bit of code I was happy with. An issue I was having was saving to local storage as the array is updated. However, the array was updated by mutating the state which is asynchronous. So the last entry would not save if I were to refresh or leave the site immediately after. To fix this I added this effect to call `saveStorage()` every time I would fetch a new link.

```js
// * allows list to update dependant on fetchLink being ran but wont overwrite array on load
useEffect(() => {
    if (updating === true) {
        saveStorage();
    }
}, [fetchLink]);
```

## Author

-   Website - [Charles Miller](https://www.charlesmiller.dev)
-   Frontend Mentor - [@charlesmiller0412](https://www.frontendmentor.io/profile/charlesmiller0412)
-   Twitter - [@millersWebDev](https://www.twitter.com/yourusername)

### Scripts

`npm run dev` - starts development environment

`npm run sass` - begins looking for changes to SCSS files
