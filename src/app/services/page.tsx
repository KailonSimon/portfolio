"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import {
  GlobeAltIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Service {
  id: number;
  name: string;
  description: string;
  icon: React.ElementType;
  price: string;
  details: string[];
}

const services: Service[] = [
  {
    id: 1,
    name: "User Interface Magic",
    description:
      "Create intuitive, beautiful interfaces that delight your users and boost engagement.",
    icon: DevicePhoneMobileIcon,
    price: "249",
    details: [
      "User-centered interface design",
      "Intuitive navigation and layout",
      "Consistent and appealing visual elements",
      "Responsive design for all devices",
    ],
  },
  {
    id: 2,
    name: "Web Design Brilliance",
    description:
      "Get a stunning, professional website that showcases your brand and captivates visitors.",
    icon: GlobeAltIcon,
    price: "349",
    details: [
      "Custom web design tailored to your brand",
      "Engaging and interactive elements",
      "Fast-loading and optimized pages",
      "SEO-friendly structure and content",
    ],
  },
  {
    id: 3,
    name: "E-commerce Excellence",
    description:
      "Launch a powerful online store that drives sales and provides a seamless shopping experience.",
    icon: ShoppingCartIcon,
    price: "599",
    details: [
      "User-friendly product catalogs",
      "Secure checkout process",
      "Mobile-optimized shopping experience",
      "Integration with payment gateways",
    ],
  },
];

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
        className="h-full"
    >
      <Card className="h-full bg-zinc-800 hover:bg-zinc-700 border-0 transition-colors duration-300 rounded-xl">
        <CardHeader>
          <div className="flex justify-center items-center mb-4">
            <service.icon className="h-12 w-12 text-green-500" aria-hidden="true" />
          </div>
          <CardTitle className="text-lg font-semibold text-white text-center">{service.name}</CardTitle>
          <CardDescription className="text-sm text-gray-400 text-center">{service.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-col items-center gap-x-1">
            <span className="text-lg font-medium text-gray-400">Starting at</span>
            <div className="flex items-baseline gap-x-1">
              <span className="text-2xl font-bold tracking-tight text-green-500">$</span>
              <span className="text-5xl font-extrabold tracking-tight text-white">{service.price}</span>
            </div>
          </div>
          <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-400">
            {service.details.map((detail) => (
              <li key={detail} className="flex gap-x-3 text-xs">
                <CheckCircleIcon className="h-6 w-5 flex-none text-green-500" aria-hidden="true" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-green-600 hover:bg-green-500 text-white" asChild>
            <Link href='/contact'>Get Started</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function Page() {
  return (
    <div className="text-gray-300 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-green-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Plans That Fit Your Business Needs
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-400"
        >
          Our tailored solutions are designed to help you achieve your goals
          efficiently and effectively. Choose a plan that aligns with your
          business objectives and start growing today.
        </motion.p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="h-full"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
