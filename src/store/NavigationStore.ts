import {writable} from "svelte/store";
import type { Navigation } from "../enums/component";

export const currentTab = writable(null as Navigation);
