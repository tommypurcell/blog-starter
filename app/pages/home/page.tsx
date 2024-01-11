"use client"
import React from "react";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar";
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

import getMetaData from "@/components/getPostMetaData";
import PostPreview from "@/components/PostPreview";
import Hero from "@/components/ui/hero";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import {getTodos} from '@/utils/supabaseRequests'
import SupabaseTest from "@/components/supabase-test-fetch-data";
import PostPage from "@/app/posts/[slug]/page";

const Home: React.FC = () => {

  const [todos, setTodos] = useState([])
  const {userId, getToken} = useAuth();
  console.log(userId)
  const loadTodos = async () => {
    try {
      const token = await getToken({ template: "supabase" });
      console.log('token', token)
      const todosData = await getTodos({ userId, token });
      setTodos(todosData);
      console.log('todos ==>', todosData?.map((todo) => todo.title));
    } catch (error) {
      console.error("Error loading todos:", error);
    }
  };

  useEffect(() => {
    loadTodos();
  },[])

  return (
    <>
      <Hero />
      <div className="container grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 p-6 lg:grid-cols-3">
        <PostPage />
      </div>
    </>
  );
};

export default Home;
