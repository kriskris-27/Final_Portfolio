"use client"

import type React from "react"
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

export default function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-white dark:text-neutral-400" />}
        spann={["HTML", "JavaScript", "TypeScript","CSS", "Tailwind", "React", "Redux", "framer"]}
        title="Front-End Development"
        description="Crafting high-performance, scalable interfaces with modern front-end stacks like React, focusing on accessibility, responsiveness, and user engagement."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Lock className="h-4 w-4 text-white dark:text-neutral-400" />}
        spann={["Node.js", "Express", "Rails","MySQL", "PostgreSQL", "MongoDB"]
        }
        title="Back-End Engineering"
        description="Built and managed the behind-the-scenes systems that power apps, handling data, users, and server operations.."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Settings className="h-4 w-4 text-white dark:text-neutral-400" />}
        spann={["python", "c", "javascript", "typescript","os", "oops", "networks", "dsa", "system_design"]
        }
        title="Programming Fundamentals & Essentials"
        description="Strong problem-solving skills through C, Python, and JavaScript; applied in building logic-heavy features across projects."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-white dark:text-neutral-400" />}
        spann={["git", "github", "vercel", "render"]
        }
        title="Version Control & Deployment"
        description="Handled deployment, version control, and collaboration using platforms like GitHub, Vercel, and Render."
      />
      

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-white dark:text-neutral-400" />}
        spann={["time", "leadership", "communication", "problem_solving"]
        }
        title="Growth & Soft Skills"
        description="Practiced time management, leadership, and problem-solving through multiple projects, freelancing, and iterative development."
      />
      
    </ul>
  )
}

interface GridItemProps {
  area: string
  icon: React.ReactNode
  title: string
  spann: string[]
  description: string
}

const GridItem = ({ area, icon, title, spann, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-gray-200 dark:text-white">
                {title}
              </h3>

              {/* Tech stack pills */}
              {spann && spann.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {spann.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block rounded-full bg-zinc-900 text-white px-3 py-1 text-sm font-sans border border-zinc-700 shadow-sm transition hover:scale-105 hover:bg-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <h2 className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-gray-400 dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
} 