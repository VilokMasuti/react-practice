import { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  const initialData = [
    {
      img: "https://media.istockphoto.com/id/825661616/photo/radha-krishna.webp?b=1&s=170667a&w=0&k=20&c=S6oWZhLp2htzhT01dT-iGetbQh6FBTpg9uMVM080bZM=",
      name: "Krishan",
      Singer: "vilok",
      added: false,
    },
    {
      img: "https://images.unsplash.com/photo-1706709224353-f12c2cdc74a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
      name: "Radha",
      Singer: "rilok",
      added: false,
    },
    {
      img: "https://images.unsplash.com/photo-1707058665459-af53e40e05d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
      name: "Shiva",
      Singer: "silok",
      added: false,
    },
    {
      img: "https://images.unsplash.com/photo-1682685797818-c9dc151d241e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      name: "Parvthi",
      Singer: "gilok",
      added: false,
    },
    {
      img: "https://images.unsplash.com/photo-1682685797818-c9dc151d241e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      name: "Vishnu",
      Singer: "uilok",
      added: false,
    },
  ];

  const [songs, setSongs] = useState(initialData);

  const handleCilck = index => {
    setSongs(pre => {
      return pre.map((item, itemIndex) => {
        if (itemIndex === index) {
          return { ...item, added: !item.added };
        }

        return item;
      });
    });
  };

  return (
    <div className="w-full h-screen bg-slate-950">
      <Navbar data={songs} />
      <div className="flex flex-nowrap mt-11 px-24 gap-5">
        {songs.map((obj, index) => (
          <Card key={index} data={obj} handleCilck={() => handleCilck(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
