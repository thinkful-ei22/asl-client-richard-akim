import { TOGGLE_HAMBURGER_MENU } from "../actions/mobile";

const initialState = {
  hamburgerMenuOpen: false
};

export default function mobileReducer(state = initialState, action) {
  if (action.type === TOGGLE_HAMBURGER_MENU) {
    return { hamburgerMenuOpen: !state.hamburgerMenuOpen };
  }
  return state;
}
