import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import React from "react";

interface PostCardProps {
  title: string;
  summary: string;
  publishedAt: string;
  picture?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export function PostCard({
  title,
  summary,
  publishedAt,
  picture,
  alt = "image",
  width = 450,
  height = 500,
}: PostCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start">
        {picture && (
          <Image
            src={picture}
            alt={alt}
            width={width}
            height={height}
            className="mr-4 rounded-md"
          />
        )}
        <div>
          <p className="mt-2" />
          <CardTitle>{title}</CardTitle>
          <p className="mb-2" />
          <CardDescription>{summary}</CardDescription>
          <CardDescription>{publishedAt}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
