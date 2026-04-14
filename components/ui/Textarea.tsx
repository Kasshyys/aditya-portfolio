"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  register?: any;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  register,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-xs uppercase tracking-widest text-text-muted font-medium">
          {label} {props.required && <span className="text-error">*</span>}
        </label>
      )}
      <textarea
        className={cn(
          "w-full bg-bg-secondary border border-border rounded-input px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300 min-h-[150px] resize-y",
          error && "border-error focus:ring-error",
          className
        )}
        {...(register ? register : {})}
        {...props}
      />
      {error && <span className="text-[10px] text-error uppercase tracking-wider">{error}</span>}
    </div>
  );
};

export default Textarea;
