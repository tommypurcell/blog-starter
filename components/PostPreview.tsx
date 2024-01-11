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

const PostPreview = (props) => {
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
            {/* Image Component for displaying the image */}
            <div className="w-[450px] m-5">
              <Image src={props.imageSrc} alt={props.title} width={450} height={253} />
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
