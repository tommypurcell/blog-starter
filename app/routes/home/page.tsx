import React from "react";
import fs from "fs";
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

const Home: React.FC = () => {
  const postMetaData = getMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 p-6 lg:grid-cols-3">
        {postPreviews}
      </div>
    </>
  );
};

export default Home;
