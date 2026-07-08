import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { activeTheme, type ButtonSize, type ButtonVariant } from "@/lib/themes";
import { cn } from "@/lib/utils";

type MobiButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function MobiButton({
  children,
  className,
  href,
  external = false,
  variant = "primary",
  size = "md",
  type = "button",
  disabled,
  ...props
}: MobiButtonProps) {
  const buttonClassName = cn(
    activeTheme.button.base,
    activeTheme.button.sizes[size],
    activeTheme.button.variants[variant],
    className,
  );

  if (href) {
    const isExternal = external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    const linkClassName = cn(buttonClassName, disabled && "pointer-events-none opacity-50");

    if (isExternal) {
      return (
        <a href={href} className={linkClassName} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-disabled={disabled || undefined}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={linkClassName} aria-disabled={disabled || undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
