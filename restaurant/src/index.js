import drawHome from "./home";
import "./style.css";
import menuitems from "./menu-items.json"
import drawMenu from "./menu";

const entrees = menuitems.entrees;
const main = menuitems.main;
const dessert = menuitems.dessert;


// drawHome();
drawMenu(entrees, main, dessert);

