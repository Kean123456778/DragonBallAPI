export default function handlerButtons(e, ...fns) {

  switch (e.target.id) {
    case "btn-todos":
      fns[0]();
      break;
    case "btn-angeles":
      fns[1]();
      break;
    case "btn-saiyans":
      fns[2]();
      break;
    case "btn-fusions":
      fns[3]();
      break;
    case "btn-humans":
      fns[4]();
      break;
    case "btn-namekians":
      fns[5]();
      break;
    case "btn-mestizos":
      fns[6]();
      break;
    case "btn-aleatorio":
      fns[7]();
      break;
    case "btn-borrar":
      fns[8]();
      break;
  }
}
