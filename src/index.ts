import { init } from "./init";
import { renderLayout } from "./layout";

const root = init();

const { layout } = renderLayout();

root.appendChild(layout);
