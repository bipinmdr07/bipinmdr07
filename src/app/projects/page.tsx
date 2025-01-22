"use client"

import { Badge } from "@/components/ui/badge";
import RenderOnCondition from "@/components/ui/renderOnCondition";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { createMarkup } from "@/utils/createMarkup";
import { PROJECTS } from "@/utils/data";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";
import { Icon } from "@iconify/react";

export default function Projects() {
  return (
    <div className="grid place-items-center lg:pt-0 sm:pt-32 pt-20 min-h-screen container">
      <div className="mt-12">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className="text-center mb-10"
        >
          <h3> My <span>Projects</span></h3>
        </MotionDiv>

        {PROJECTS.map((project, index) => (
          <MotionDiv
            initial="initial"
            animate="animate"
            variants={variants.moveDown}
            transition={transition.moveDown}
            className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-10 lg:pb-0 pb-7 items-center w-full"
          >
            <div className="flex-1 space-y-3">
              <h2 className="text-6xl font-semibold text-primary">
                {index < 10 ? `0${index}` : index}
              </h2>
              <h3>{project.title}</h3>
              <p className="w-10/12 text-accent-foreground">
                <div dangerouslySetInnerHTML={createMarkup(project?.html)}>
                </div>
              </p>
              Contribution:
              <ol>
                {project?.contributions?.map((item) =>
                  <li>
                    <p dangerouslySetInnerHTML={createMarkup(item)} />
                  </li>
                )}
              </ol>
              <div className="mt-2 text-primary font-semibold tracking-wider space-x-2">
                {project?.tech?.map((item) => {
                  return (
                    <Badge
                      key="{item}"
                      variant="outline"
                      className="text-primary text-base"
                    >
                      {item}
                    </Badge>
                  )
                })}
              </div>
              <br/>
              <div className="flex gap-x-3">
                <RenderOnCondition condition={Boolean(project.github)}>
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a href="#" className="bg-accent p-2.5 rounded-full">
                          <Icon icon="mdi:github" className="text-xl" fill="#000000" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </RenderOnCondition>
                <RenderOnCondition condition={Boolean(project.external)}>
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a href={project.external} target="_blank" className="bg-accent p-2.5 rounded-full">
                          <Icon icon="mdi:globe" className="text-xl" fill="#000000" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Preview</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </RenderOnCondition>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  )
}
