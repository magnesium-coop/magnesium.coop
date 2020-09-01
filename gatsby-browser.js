// custom typefaces
import "./src/css/tailwind.css"

export const onInitialClientRender = () => {
  setTimeout(function() {
    document.getElementById("___loader").style.display = "none"
  }, 1000)
}
