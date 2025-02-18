import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000"
})

// ! APİ'YE İSTEK ATMA
  // api.get("/contact")
  // .then((res) => console.log(res.data))
  // .catch((err) => console.log(err))

  // ! APİYE VERİ EKLEME
  /* api.post("/contact", {
    name: "Ömer Ekin",
    position: "Frontend Developer",
    company: "Udemig",
    phone: "0538 887 21 06",
    email: "omerekin@gmail.com",
  }); */
  // ! APİ'DEN VERİ SİLME
  // api.delete("/contact/id");

export default api;