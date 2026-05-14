"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialState = { name: "", email: "", message: "" };

export default function LeaveAComment({ id, setComments }) {
  const [formState, setFormState] = useState(initialState);
  const [formLoading, setFormLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setFormLoading(true);
    try {
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
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setFormLoading(false);
      setFormState(initialState);
    }
  }

  return (
    <div className="mb-6 w-full rounded-2xl border border-[#1e3a5f] bg-[#0a1628] p-5 pb-6">
      <p className="text-sm font-semibold text-slate-200">Leave a comment</p>
      <div className="my-4 h-px w-full bg-[#1e3a5f]" />

      <form onSubmit={onSubmit} className="w-full">
        <Textarea
          placeholder="Share your thoughts..."
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          required
          className="mb-3 border-[#1e3a5f] bg-[#060f1f] text-slate-300 placeholder-slate-600 focus:border-amber-500/40 focus:ring-amber-500/10"
        />

        <div className="mb-5 flex w-full items-center gap-x-3">
          <Input
            type="text"
            placeholder="Your name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            required
            className="border-[#1e3a5f] bg-[#060f1f] text-slate-300 placeholder-slate-600 focus:border-amber-500/40"
          />
          <Input
            type="email"
            placeholder="Email address"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            required
            className="border-[#1e3a5f] bg-[#060f1f] text-slate-300 placeholder-slate-600 focus:border-amber-500/40"
          />
        </div>

        <Button
          disabled={formLoading}
          type="submit"
          className="border border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-white hover:border-amber-500"
        >
          Post comment
          {formLoading && (
            <div className="ml-2">
              <RotatingLines strokeColor="#f59e0b" width={16} />
            </div>
          )}
        </Button>
      </form>
    </div>
  );
}
