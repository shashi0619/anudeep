"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function LeaveAComment({ id, setComments }) {
  const [formState, setFormState] = useState(initialState);
  const [formLoading, setFormLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setFormLoading(true);

    try {
      // Mocking the API response
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newComment = {
        _id: `comment-${Date.now()}`,
        name: formState.name,
        comment: formState.message,
        _createdAt: new Date().toISOString(),
        post: { _ref: id }
      };

      toast.success("Comment posted successfully.");
      setComments((prev) => [newComment, ...prev]);

    } catch(err) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setFormLoading(false);
      setFormState(initialState);
    }
  }

  return (
    <div className="mb-6 w-full rounded-lg border border-border bg-card p-4 pb-6 shadow-md">
      <p className="text-base font-bold text-card-foreground">
        Leave a comment
      </p>

      <div className="my-4 h-[1px] w-full bg-border"/>

      <form onSubmit={onSubmit} className="w-full">
        <Textarea
          placeholder="Comment"
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          required
          className="mb-3"
        />

        <div className="mb-6 flex w-full items-center gap-x-3">
          <Input
            type="text"
            placeholder="Name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            required
          />

          <Input
            type="email"
            placeholder="Email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            required
          />
        </div>

        <Button 
          disabled={formLoading}
          type="submit"
        >
          Post comment

          {formLoading && (
            <div className="ml-2">
              <RotatingLines
                strokeColor="black"
                width={16}
              />
            </div>
          )}
        </Button>
      </form>
    </div>
  );
}