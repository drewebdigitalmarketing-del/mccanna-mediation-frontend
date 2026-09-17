import { create } from "zustand";

const useGenStore = create((set)=>({
   menuActive:false,
   ActiveLink:"",

   setMenuActive:(st)=>set({menuActive:(st)}),
   setActiveLink:(st)=>set({ActiveLink:(st)}),
}))


export default useGenStore;