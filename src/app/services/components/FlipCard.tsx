"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FlipCard({ service }: { service: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div className="flex w-full m-4">
      <div className="relative w-full h-full perspective">
        <motion.div
          animate={isFlipped ? "back" : "front"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full"
        >
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold mb-4">{service.price}</div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setIsFlipped(!isFlipped)}>
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          animate={isFlipped ? "front" : "back"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full"
        >
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm mb-4 list-disc list-inside">
                {service.details.map((detail: string, idx: number) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setIsFlipped(!isFlipped)}>
                See front
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}