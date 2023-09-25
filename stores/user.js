import { defineStore } from "pinia";
export const useUserStore = defineStore("user", () => {
  const user = ref({
    name: "John Doe",
    age: 30,
    email: "",
  });

  //computed
  const isAdult = computed(() => user.value.age >= 18);

  //functions
  const setName = (name) => (user.value.name = name);


  return {
    user,
    isAdult,
    setName,
  };
});
