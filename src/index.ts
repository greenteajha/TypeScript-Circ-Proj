import { renderContent } from "./content";
import { init } from "./init";
import { renderLayout } from "./layout";
import "./style.css";

const root = init();

const { layout, mainContent } = renderLayout();

root.appendChild(layout);

renderContent(mainContent);
