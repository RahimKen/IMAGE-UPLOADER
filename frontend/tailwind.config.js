/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend:{
       colors : {
          'blue' : '#2f80ed',
          'green' : '#219653',
          'grey' : '#fafafb' ,
          'light-grey' : '#f6f8fb',
          'light-blue' : '#97bef4'
       }, 
       keyframes : {
         loader : {
           '0%' : {width: '0'},
           '25%' : {width: '25%'},
           '50%' : {width: '50%'},
           '75%' : {width: '75%'},
           '100%' : {width: '100%'}
         }
       }, 
       animation : {
         'loaders' : 'loader 2s ease-in-out infinite'
       }
    }
  },
  plugins: [],
}