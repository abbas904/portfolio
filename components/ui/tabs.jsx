"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    data-slot="tabs-list"
    className={cn(
      "inline-flex h-auto rounded-md p-1 text-primary",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      // الأساسيات
      "inline-flex items-center justify-center w-full whitespace-nowrap rounded-lg p-3 font-medium transition-all duration-300 text-base",
      // النص الأبيض الافتراضي
      "text-white bg-[#27272c]",
      // تأثير hover: خلفية خضراء ونص أسود
      "hover:bg-green-500 hover:text-black",
      // حالة التفعيل (tab المفتوح حاليًا)
      "data-[state=active]:bg-green-500 data-[state=active]:text-black",
      // دعم الوضع الليلي
      "dark:text-white dark:data-[state=active]:bg-green-500 dark:data-[state=active]:text-black",
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-white dark:focus-visible:ring-slate-300",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
