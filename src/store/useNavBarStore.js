import { create } from "zustand";

const useNavBarStore = create((set) => ({
  navBars: [
    {
      id: 1,
      name: "Product",
      url: "/",
      isActive: true,
    },
  ],

  setNavBars: (id) => {
    set((state) => ({
      navBars: state.navBars.map((navBar) => {
        if (navBar.id === id) {
          return { ...navBar, isActive: true };
        } else {
          return { ...navBar, isActive: false };
        }
      }),
    }));
  },
}));

export default useNavBarStore;