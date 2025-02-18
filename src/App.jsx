import { RiSearchLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoPersonAddSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import api from "./api";
import Card from "./components/Card.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  const [data, setData] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [editItem, seteditItem] = useState(null);

  useEffect(() => {
    api.get("/contact").then((res) => setData(res.data));
  }, []);

  // console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target[1].value;
    const params = {
      q: query,
    };

    api.get("/contact", { params }).then((res) => setData(res.data));
  };

  const handleDelete = (id) => {
    console.log(`${id} li kullanıcıyı silme işlemi`);

    const res = confirm(`kişi silmek istediğinize emin misiniz?`);

    if (res) {
      api.delete(`/contact/${id}`);
      api.get("/contact").then((res) => setData(res.data));
    }
  };

  const handleEdit = (user, id) => {
    console.log(`kullanıcıyı güncelleyecek fonksiyon`);
    setisModalOpen(true);
    seteditItem(true);
    seteditItem(user);

    api.patch(`/contact/${id}`, editItem);
  };

  console.log(editItem);

  return (
    <div className="app">
      <header>
        <h1>Rehber</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <button>
              <RiSearchLine />
            </button>
            <input type="search" placeholder="Kişi aratınız.." />
          </form>
          <button className="ns">
            <IoIosMenu />
          </button>
          <button className="ns">
            <HiMiniSquares2X2 />
          </button>
          <button className="add" onClick={() => setisModalOpen(!isModalOpen)}>
            <IoPersonAddSharp />
            <span>Yeni Kişi</span>
          </button>
        </div>
      </header>

      <main>
        {data.map((user) => (
          <Card
            key={user.id}
            user={user}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </main>

      {/* modal*/}

      <Modal
        editItem={editItem}
        isModalOpen={isModalOpen}
        setData={setData}
        setisModalOpen={setisModalOpen}
        seteditItem={seteditItem}
      />
    </div>
  );
}

export default App;
