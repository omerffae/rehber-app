// Icons
import { IoMdClose } from "react-icons/io";
// Components
import Field from "./Field";
import api from "../api";

const Modal = ({ isModalOpen, setisModalOpen, editItem, setData, seteditItem }) => {
  console.log(isModalOpen);

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newObject = Object.fromEntries(formData.entries());
    console.log(newObject);

    if (!editItem) {
      const response = await api.post("/contact", newObject);

      // Mevcut rehber listesini güncelliyoruz:
      // 1. Önceki state değerini al (res parametresi)
      // 2. Spread operatörü ile mevcut dizinin tüm elemanlarını kopyala
      // 3. API'den gelen yeni kişi verisini (response.data) dizinin sonuna ekle
      // 4. Böylece immutable update yaparak state'i güncellemiş oluyoruz
      // NOT: response.data objesi içinde sunucudan dönen tüm kişi bilgileri (id, name, position vb.) bulunuyor

      setData((res) => [...res, response.data]);
    } else {
      const response = await api.put(`/contact/${editItem.id}`, newObject);
      setData((data) =>
        data.map((data) => (data.id === editItem.id ? response.data : data))
      );

      
    }

    setisModalOpen(false);
  };


  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal-inner">
          <div className="modal-head">
            {editItem ? <h2>Kişiyi Güncelle</h2> : <h2>Yeni Kişi Ekle</h2>}
            <button onClick={() => {
              seteditItem(null)
              setisModalOpen(!isModalOpen)}}>
              <IoMdClose />
            </button>
          </div>

          <form onSubmit={submitForm}>
            <Field value={editItem?.name} label="İsim Soyisim" name="name" />
            <Field value={editItem?.position} label="Pozisyon" name="position" />
            <Field value={editItem?.company} label="Şirket" name="company" />
            <Field value={editItem?.phone} label="Telefon" name="phone" />
            <Field value={editItem?.mail} label="Email" name="email" />

            <div className="buttons">
              <button onClick={() => {
                seteditItem(null)
                setisModalOpen(!isModalOpen)}}>
                Vazgeç
              </button>
              <button type="submit" onClick={() => seteditItem(null)}>
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
