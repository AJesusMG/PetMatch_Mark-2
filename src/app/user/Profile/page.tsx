"use client";

import React, { useState }from "react";
import { Avatar, Chip, user } from "@nextui-org/react";
import PostCard from "@/Components/PostCard/PostCard";
import { useSession } from 'next-auth/react';

interface UserData{
  name : String;
  image : String;
}

// const PostProps = [
//     {
//       id: 1,
//       urlImage: "https://petmatchbucketcd.s3.amazonaws.com/1717172384010_582",
//       avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
//       user: "Usuario 1",
//       content: "Contenido del post 1",
//       race: "Raza 1",
//       size: "Tamaño 1",
//       age: "Edad 1",
//       instagram: "@usuario1",
//       whatsapp: "+123456789",
//       facebook: "/usuario1",
//     },
//     {
//       id: 2,
//       urlImage: "https://nextui.org/images/album-cover.png",
//       avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
//       user: "Usuario 2",
//       content: "Contenido del post 2",
//       race: "Raza 2",
//       size: "Tamaño 2",
//       age: "Edad 2",
//       instagram: "@usuario2",
//       whatsapp: "+987654321",
//       facebook: "/usuario2",
//     },
//     {
//       id: 3,
//       urlImage: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
//       avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
//       user: "Usuario 3",
//       content: "Contenido del post 3",
//       race: "Raza 3",
//       size: "Tamaño 3",
//       age: "Edad 3",
//       instagram: "@usuario3",
//       whatsapp: "+2342342323",
//       facebook: "/usuario3",
//     },
//     {
//       id: 4,
//       urlImage: "https://nextui-docs-v2.vercel.app/images/fruit-2.jpeg",
//       avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
//       user: "Usuario 3",
//       content: "Contenido del post 3",
//       race: "Raza 3",
//       size: "Tamaño 3",
//       age: "Edad 3",
//       instagram: "@usuario3",
//       whatsapp: "+2342342323",
//       facebook: "/usuario3",
//     },
//     {
//       id: 5,
//       urlImage: "https://nextui-docs-v2.vercel.app/images/fruit-3.jpeg",
//       avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
//       user: "Usuario 3",
//       content: "Contenido del post 3",
//       race: "Raza 3",
//       size: "Tamaño 3",
//       age: "Edad 3",
//       instagram: "@usuario3",
//       whatsapp: "+2342342323",
//       facebook: "/usuario3",
//     },
//     {
//       id: 6,
//       urlImage: "https://nextui-docs-v2.vercel.app/images/fruit-7.jpeg",
//       avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
//       user: "Usuario 3",
//       content: "Contenido del post 3",
//       race: "Raza 3",
//       size: "Tamaño 3",
//       age: "Edad 3",
//       instagram: "@usuario3",
//       whatsapp: "+2342342323",
//       facebook: "/usuario3",
//     },
//     {
//       id: 7,
//       urlImage: "https://nextui-docs-v2.vercel.app/images/fruit-8.jpeg",
//       avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
//       user: "Usuario 3",
//       content: "Contenido del post 3",
//       race: "Raza 3",
//       size: "Tamaño 3",
//       age: "Edad 3",
//       instagram: "@usuario3",
//       whatsapp: "+2342342323",
//       facebook: "/usuario3",
//     },
//     {
//       id: 8,
//       urlImage: "https://nextui-docs-v2.vercel.app/images/fruit-8.jpeg",
//       avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
//       user: "Usuario 3",
//       content: "Contenido del post 3",
//       race: "Raza 3",
//       size: "Tamaño 3",
//       age: "Edad 3",
//       instagram: "@usuario3",
//       whatsapp: "+2342342323",
//       facebook: "/usuario3",
//     },
//     {
//       id: 9,
//       urlImage: "https://nextui-docs-v2.vercel.app/images/fruit-8.jpeg",
//       avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
//       user: "Usuario 3",
//       content: "Contenido del post 3",
//       race: "Raza 3",
//       size: "Tamaño 3",
//       age: "Edad 3",
//       instagram: "@usuario3",
//       whatsapp: "+2342342323",
//       facebook: "/usuario3",
//     },
//     {
//       id: 10,
//       urlImage: "https://nextui-docs-v2.vercel.app/images/fruit-8.jpeg",
//       avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
//       user: "Usuario 3",
//       content: "Contenido del post 3",
//       race: "Raza 3",
//       size: "Tamaño 3",
//       age: "Edad 3",
//       instagram: "@usuario3",
//       whatsapp: "+2342342323",
//       facebook: "/usuario3",
//     },
//   ];

export default function Profile() {
  const { data: session } = useSession();
  console.log(session);

  const [PostProps, setPostProps] = useState([
    {
      id: 1,
      urlImage: "https://petmatchbucketcd.s3.amazonaws.com/1717172384010_582",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      user: "Usuario 1",
      content: "Contenido del post 1",
      race: "Raza 1",
      size: "Tamaño 1",
      age: "Edad 1",
      instagram: "@usuario1",
      whatsapp: "+123456789",
      facebook: "/usuario1",
    }
  ]);

  const [userData, setUserData] = useState<UserData>({
    name: session?.user?.name || "No definido",
    image: session?.user?.image ?? ""
  });

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-row w-full">
        <header className="flex flex-row w-full items-center justify-between">
          <h1 className="text-4xl font-bold">Mi Perfil</h1>
        </header>
      </div>
      <div className="flex flex-col w-full h-full gap-8">
        <div className="flex flex-col w-full h-full gap-8 items-center">
          <Avatar
            src={session?.user?.image as string}
            className="w-48 h-48"
          />
          <h1 className="text-4xl font-bold">{session?.user?.name}</h1>
          <Chip size="md" className="bg-success-300 p-4 text-md">Mis publicaciones</Chip>
        </div>
        <div className="flex flex-col gap-8">
        <div className="grid grid-cols-5 gap-4">
          {PostProps.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              urlImage={post.urlImage}
              avatar={post.avatar}
              user={post.user}
              content={post.content}
              race={post.race}
              size={post.size}
              age={post.age}
              instagram={post.instagram}
              whatsapp={post.whatsapp}
              facebook={post.facebook}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
