// @ts-check
import { writable } from 'svelte/store';

export const routePath = writable(window.location.pathname);

export const navigateTo = (path) => {
  window.history.pushState({}, '', path);
  routePath.set(path);
}
