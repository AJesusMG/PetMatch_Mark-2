"use client"
import React, { useEffect, useState} from "react";
import { Button, Link } from "@nextui-org/react";
import PostCard from "@/Components/PostCard/PostCard";

interface UserData {
  name: string;
  email: string;
  image: string;
}

// Datos de usuario estáticos
const staticUser = {
  name: "Nombre del Usuario",
  email: "usuario@example.com",
  image: "/path/to/default/avatar.jpg" // Cambia esto a la ruta de tu imagen por defecto
};

const staticPosts = [
  {
    id: 1,
    urlImage: "https://petmatchbucketcd.s3.amazonaws.com/1717172384010_582",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    user: "Usuario 1",
    content: "Contenido del post 1",
    breed: "Raza 1",
    size: "Tamaño 1",
    age: "Edad 1",
    instagram: "@usuario1",
    whatsapp: "+123456789",
    facebook: "/usuario1",
  }
];

export default function PrincipalPage() {
  const email = staticUser.email;

  const [PostProps, setPostProps] = useState(staticPosts);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch(`/api/user/${email}`);
        if (!response.ok) {
          const requestBody = {
            name: staticUser.name,
            email: staticUser.email,
            password: "",
          };

          const registerResponse = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
          });

          console.log('Register Response:', registerResponse);

          if (!registerResponse.ok) {
            throw new Error('Error al registrar el usuario');
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    checkUser();
  }, []);

  useEffect(() => {
    const getPostsId = async () => {
      try {
        if (!email) return;

        const postsIds = await fetch(`https://v4utf4qdjgpkumci6ogti5psdu0urtem.lambda-url.us-east-1.on.aws/surveys/${email}`);
        const result = await postsIds.json();

        console.log(result);

        const list = {
          list: result
        };

        const posts = await fetch(`/api/posts/getMany`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(list),
        });

        const finalResult = await posts.json();

        console.log(finalResult.data);
        if (finalResult.data) {
          setPostProps(finalResult.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPostsId();
  }, []);

  return (
    <div className="flex flex-col gap-16 w-full h-full">
      <div className="flex w-full">
        <div className="flex flex-col">
          <h1 className="text-center text-7xl">
            Bienvenidos a{" "}
            <p className="text-6xl text-primary-500 font-bold">PetMatch</p>
          </h1>
          <div className="flex w-1/2 mx-auto mt-8">
            <p className="text-center text-xl">
              ¿Buscas a tu compañero perfecto de cuatro patas? ¡No busques más!
              En nuestra plataforma, te conectamos con los animales en adopción
              que están ansiosos por encontrar un hogar amoroso.
            </p>
          </div>
          <div className="flex mx-auto mt-8">
            <Button
              className="bg-success-300 font-bold text-xl"
              size="lg"
              as={Link} // Enlace al catálogo
              href="/user/Questionnaire"
            >
              Resolver Cuestionario
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Mascotas en adopción</h1>
        <div className="grid grid-cols-5 gap-4">
          {PostProps.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              urlImage={post.urlImage}
              avatar={post.avatar}
              user={post.user}
              content={post.content}
              race={post.breed}
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
  );
}