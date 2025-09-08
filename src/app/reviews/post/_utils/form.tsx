"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import C__Input from "./input";
import CLD__UploadWidget from "./cld-upload-widget";
import { Action___POST__Review } from "./actions";
import CustomSelect from "./custom-select";
import CustomInput from "./custom-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  rating: z.number().min(0, { message: "Rating is required" }).max(5),
  category: z.string().min(1),
  text: z.string().min(1, { message: "Text is required" }),
  avatar: z.string().min(1, { message: "Avatar URL is required" }),
  company: z.string().min(1, { message: "Company is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  image: z.string().min(1, { message: "Image is required" }),
  date: z.date().default(new Date()),
});

export default function ReviewPostForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      rating: 0,
      text: "",
      avatar: "",
      company: "",
      country: "",
      category: "",
      image: "",
    },
  });

  const onUpload = (url: string) => {
    console.log("Uploaded file URL:", url);
    // You can update form fields or take any other action here.
    form.setValue("avatar", url); // For example, set the URL as the avatar
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const formData = { ...data };
    const result = await Action___POST__Review(formData);

    toast({
      title: "Form submitted successfully!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify({ result, payload: formData }, null, 2)}
          </code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomInput name="name" label="Client's name" />
        <CustomInput name="rating" label="Rating" type="number" />
        <CustomSelect
          name="category"
          label="Category"
          options={categoryOptions}
        />
        <CustomInput name="text" label="Client's Message" type="textarea" />
        <CustomInput name="company" label="Client's Company" />
        <CustomInput name="country" label="Company location (Country)" />

        {/* Pass the `onUpload` function here */}
        <CLD__UploadWidget
          name="avatar"
          label="Client's Avatar/Profile picture"
          onUpload={onUpload}
        />
        <CLD__UploadWidget
          name="image"
          label="Review Image (Fiverr/Other marketplace Review Screenshot/image)"
          onUpload={onUpload}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

const categoryOptions: { label: string; value: string }[] = [
  { label: "Google Ads", value: "googleads" },
  { label: "Google Analytics", value: "googleanalytics" },
  { label: "Social Media Paid Ads", value: "socialmediapaidads" },
  { label: "UI/UX & Graphic Design", value: "uiux" },
  { label: "Custom Web Development", value: "customwebdev" },
  { label: "Software Development", value: "software" },
  { label: "Wordpress Development", value: "wordpress" },
  { label: "Shopify Development", value: "shopify" },
];
