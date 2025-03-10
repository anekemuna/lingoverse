import { create } from "zustand";

// export const useUserStore = create((set, get) => ({
//   user: null,
//   loading: false,

//   login: async (username, password) => {
//     set({ loading: true });
//     try {
//       const res = await fetch("/home/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             userName: username,
//             password: password,
//         })
//       });
//       const data = await res.json();
//       set({ user: data.data });
//       if (data.success) {
//         console.log("User details:", data.user); // Print user details
//         set({ user: data.user, loading: false });
//       }
//     //   console.log(data.success)
//     } catch (error) {
//       set({ loading: false });
//       console.error(error);
//     }
//   },
// }));

export const useUserStore = create((set) => ({
    user: null,
    loading: false,
  
    login: async (username, password) => {
      set({ loading: true });
      try {
        const res = await fetch("/home/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: username,
            password: password,
          }),
        });
  
        const data = await res.json();
  
        if (!res.ok) {
          throw new Error(data.message || "Login failed");
        }
  
        if (data.success) {
          console.log("User details:", data.message); // Print user details
          set({ user: data.user, loading: false });
        } else {
          throw new Error("Invalid login credentials");
        }
      } catch (error) {
        set({ loading: false });
        console.error("Error:", error.message);
      }
    },
  }));
  
