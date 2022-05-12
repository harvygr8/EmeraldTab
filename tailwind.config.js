module.exports = {
  content: ["./src/components/*.svelte","./src/*.svelte","./extension/*.html"],
  theme: {
    extend: {
      fontFamily :{
        customfont: "'Share Tech Mono',monospace",
        customfont2:"'Roboto Mono',monospace"
        // customfont2:"'Major Mono Display', monospace"
      },
    },
  },
  plugins: [],
}
