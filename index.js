import { app, startText, startBtn } from "./src/elements.js";
import { attachEvents } from "./src/events.js";

app.append(startText, startBtn);
attachEvents();
