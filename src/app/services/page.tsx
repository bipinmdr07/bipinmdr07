import { Button } from "@/components/ui/button";
import { SERVICES } from "@/utils/data";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";
import { Icon } from '@iconify/react'

export default function page() {
  return (
    <div className="container min-h-screen grid place-items-center pb-7 pt-32">
      <div>
        {/* Heading */}
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className="text-center"
        >
          <h3>Services <span>Offered</span></h3>
        </MotionDiv>

        {/* Content */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">{
          SERVICES.map((service, i) => {
            return (
              <MotionDiv key={service.id}
                initial="initial"
                animate="animate"
                variants={variants.moveRight}
              transition={{
                ...transition.moveRight,
                delay: i * 0.6
              }}
                className="bg-accent p-5 cursor-pointer group rounded-3xl flex flex-col justify-between">
                <div>
                  <Icon icon={service.icon} width={55} height={55} className="" />
                  <div>
                    <h3 className="mb-2">
                      <span>
                        {service.name.split(" ")[0]}
                      </span>
                      &nbsp;
                      {service.name.split(" ").slice(1).join(' ')}
                    </h3>
                    <small className="text-accent-foreground">{service.description}</small>
                  </div>
                </div>
                <Button variant="plain" size="sm" className="block ml-auto mt-7">
                  Learn More
                </Button>
              </MotionDiv>
            )
          })
        }</div>
      </div>
    </div>
  )
}
