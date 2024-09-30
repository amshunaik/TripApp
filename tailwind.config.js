/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  theme: {
    extend: {
      // spacing:{
      //   'x1':'18px',
      //   'y1':'64px',
      //   'wid1':'885px',
      //   'ml1':'340px',
      //   'wid2':'300px',
      //   'hig2':'388.31px',
      //   'ml2':'550px',
      //   '194': '194px',
      //   '885':'885px',
        
      //   '146':'146px',
      //   '476px':'310px',
      //   '388.31':'388.31px',
      //   '303px':'303px',
      //   '160px':'132px',
      //   '250px':'250px',
      //   '435px':'435px',
      //   '464px' : '464px',
      //   '434px':'434px',
      //   '263px':'263px',
      //   '280px':'280px',
      //   '318px' :'318px',
      //   '890px':'720px'

      // }
    },
  },
  plugins: [],
}