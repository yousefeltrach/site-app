"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState, FormEvent } from "react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Subscribed successfully!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-primary">
        Subscribe to our newsletter
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        The latest news, articles, and resources, sent to your inbox weekly.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 sm:flex sm:max-w-md">
        <Label htmlFor="email-address" className="sr-only">
          Email address
        </Label>
        <Input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md placeholder:text-muted-foreground border-muted-foreground"
        />
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full justify-center sm:w-auto hover:bg-secondary hover:text-primary"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
      </form>
      {message && (
        <p
          className={`mt-2 text-sm ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;
