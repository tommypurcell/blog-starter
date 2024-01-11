
"use client"
import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { getAllPosts } from "@/utils/supabaseRequests";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { useUser } from "@clerk/nextjs";




const PostPage = () => {
  const { user } = useUser()
  console.log(user?.imageUrl)

  const [posts, setPosts] = useState(null);

  const {userId, getToken} = useAuth();
  const loadPosts = async () => {
    try {
      const token = await getToken({ template: "supabase" });
      const postsData = await getAllPosts({ token });
      setPosts(postsData); // Update the state after fetching data
    } catch (error) {
      console.error("Error loading posts:", error);
    }
  };  
  

  useEffect(() => {
    loadPosts()
  },[])

  return (
    <>  
      {posts == null ? <h1>loading...</h1> : 
      <>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <Card>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="m-5">
              <Avatar>
                <AvatarImage src={post.author_image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {/* Image Component for displaying the image */}
              <div className="w-[450px] m-5">
                {/* <Image src={post.imageSrc} alt={post.title} width={450} height={253} /> */}
              </div>
              <p>{post.content}</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </Link>
      ))}    
      </>
      }
    </>
  );
};

export default PostPage;
