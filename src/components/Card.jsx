import { RiEdit2Fill } from "react-icons/ri";
import { LiaTrashAlt } from "react-icons/lia";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Card = ({ user, handleDelete, id, handleEdit }) => {
  // console.log(user);
  const [name, surName] = user.name.split(" ");

  return (
    <div className="card">
      <div className="buttons">
        <button onClick={() => {handleEdit(user, user.id)}}>
          <RiEdit2Fill />
        </button>
        <button onClick={() => {handleDelete(user.id)}}>
          <LiaTrashAlt />
        </button>
      </div>

      <h1>
        {name?.[0]} {surName?.[0]}
      </h1>
      <h3>{user.name}</h3>
      <p>{user.position}</p>
      <p>{user.company}</p>

      <div className="bottom">
        <div>
          <span>
            <FaPhone />
          </span>
          <span>Telefon: {user.phone} </span>
        </div>
        <div>
          <span>
            <IoMdMail />
          </span>
          <span>Mail: {user.email} </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
