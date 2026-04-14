"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().max(200).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  company: z.string().max(0).optional(), // Honeypot
});

type FormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try emailing me directly.");
    }
  };

  return (
    <div className="w-full bg-bg-secondary p-8 md:p-12 rounded-card border border-border shadow-soft">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center text-center gap-6 py-12"
          >
            <CheckCircle2 size={64} className="text-success" />
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-display font-bold">Message Sent!</h3>
              <p className="text-text-secondary">
                Thank you for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <Button onClick={() => setStatus("idle")} variant="secondary">
              Send Another
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
            aria-label="Contact form"
          >
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <input {...register("company")} tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Name"
                placeholder="Your Name"
                required
                register={register("name")}
                error={errors.name?.message}
              />
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                required
                register={register("email")}
                error={errors.email?.message}
              />
            </div>

            <Input
              label="Subject"
              placeholder="Project Inquiry"
              register={register("subject")}
              error={errors.subject?.message}
            />

            <Textarea
              label="Message"
              placeholder="Tell me about your project..."
              required
              register={register("message")}
              error={errors.message?.message}
            />

            <div className="flex flex-col gap-4 mt-4">
              <Button
                type="submit"
                loading={status === "loading"}
                disabled={status === "loading"}
                className="w-full md:w-fit"
              >
                Send Message <Send size={16} className="ml-2" />
              </Button>

              {status === "error" && (
                <div className="flex items-center gap-2 text-error text-xs uppercase tracking-wider">
                  <AlertCircle size={14} />
                  {errorMessage}
                </div>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;