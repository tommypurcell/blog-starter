import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

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
import { PostMetadata } from "./postmetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div key={props.slug}>
      <Link href={`/posts/${props.slug}`}>
        <Card>
          <CardHeader>
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>{props.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="m-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="w-[450px] m-5">
              <AspectRatio ratio={16 / 9}></AspectRatio>
            </div>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default PostPreview;
