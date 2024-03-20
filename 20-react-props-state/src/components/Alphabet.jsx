import { useState } from "react";
// export default function Alphabet() {
//   const [list, setList] = useState([
//     { id: 1, alpha: "a" },
//     { id: 2, alpha: "b" },
//     { id: 3, alpha: "c" },
//     { id: 4, alpha: "d" },
//     { id: 5, alpha: "e" },
//   ]);
//   const [inputAlpha, setInputAlpha] = useState("");
//   const addAlpha = () => {
//     if (inputAlpha.trim().length === 0) return;
//     const newAlpha = list.concat({
//       id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
//       alpha: inputAlpha,
//     });
//     setList(newAlpha);
//     setInputAlpha(" ");
//   };
//   console.log(inputAlpha);
//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => {
//           setInputAlpha(e.target.value);
//         }}
//         value={inputAlpha}
//       />
//       <button onClick={addAlpha}>add alphabet</button>{" "}
//       {list?.map((list, id) => {
//         return (
//           <ul key={id}>
//             {list.id}. {list.alpha}
//           </ul>
//         );
//       })}
//     </div>
//   );
// }

// import React, { useState } from 'react';

// function RegistrationForm() {
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleRegistration = () => {
//     if (name && email) {
//       const newUser = { name, email };
//       setUsers([...users, newUser]);
//       setName('');
//       setEmail('');
//     } else {
//       alert('이름과 이메일을 모두 입력해주세요.');
//     }
//   };

//   return (
//     <div>
//       <h2>Registration Form</h2>
//       <div>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={handleNameChange} />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={handleEmailChange} />
//       </div>
//       <button onClick={handleRegistration}>등록</button>
//       <h3>Registered Users:</h3>
//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>
//             <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default RegistrationForm;

export default function Alphabet() {
  const [users, setUsers] = useState([
    { name: "코디", email: "codi@gmail.com" },
    { name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRegistration = () => {
    if (name && email) {
      const newUser = { name, email };
      setUsers([...users, newUser]);
      setName("");
      setEmail("");
    } else {
      alert("이름과 이메일을 모두 입력해주세요.");
    }
  };

  const handleDelete = (index) => {
    setUsers(users.filter((user, i) => i !== index));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="이름"
        />{" "}
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="이메일"
        />{" "}
        <button onClick={handleRegistration}>등록</button>
        <button onClick={handleRegistration}>삭제</button>
      </div>
      <div>
        <ul>
          {users.map((user, index) => (
            <li key={index} onDoubleClick={() => handleDelete(index)}>
              <strog> {user.name}</strog>: <strong>{user.email}</strong>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
