/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}"],
  theme: {
    colors:{
      "ajebah-orange":'#AD6300',
      "ajebah-blue":'#004BAA',
      "ajebah-light-blue":'#004AAD',
      "white":'#fff',
      "dark":'#000',
      "gray":'#F5F5F5',
      "opacity-black":'#7d7d7d',
      "new-gray":'#666666',
      "rose":'#EBD8BF',
      "white-gray":'#F7F7F7',
      "for-number":'#ccccca',
      "new-blue":'#003172',
      "new-yellow":'#FFBB48',
      "new-cyan":'#00A1AD',
      "new-dark-blue":'#0D00AD',
      "new-white-blue":'#004AAC',
      "new-green":'#CCECEF',
      "from-grad":'#4A7EC4',
      "to-grad":'#024BAD',
      "new-another-blue":'#003C8C',
      "contact-gray":'#939597',



      
    },
    extend: {},
    fontFamily: {
      Cairo: "'Cairo', serif"
    },
    screens: {
      'md':'1025px'
    },
    container: {
      center: true,
      padding: '2rem',
      margin: 'auto',
      width: 'fit-content',
      screens: {
        lg: '1025px',
        xl: '1440px',
        // "2xl" : '1124px'
      }
    }
  },
  plugins: [],
}