import * as React from "react";
import Link from "next/link";
import Icon from "../icon/lucide-icon";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "../ui/separator";
import { menuType, menuItemType } from "@/lib/type/menu";
import { usePathname } from "next/navigation";



function Sidebar({ isCollapsed, menus }: { isCollapsed: boolean, menus:menuType | undefined }) {
  const pathname = usePathname();
  return (
    <div className="overflow-y-auto scroll-auto">
      {menus?.level1 && menus?.level1.length > 0 && (
        <div
          data-collapsed={isCollapsed}
          className="group flex flex-col gap-4 py-5 data-[collapsed=true]:py-5"
        >
          <nav className="flex flex-col gap-3 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 group-[[data-collapsed=true]]:gap-2">
            {menus?.level1.length ? (
              <>
                {menus.level1.map((item: menuItemType, index) =>
                  isCollapsed ? (
                    <Tooltip key={index} delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Link
                          href="#"
                          className={cn(
                            buttonVariants({
                              variant: item.href === pathname ? 'default':'ghost',
                              size: "icon",
                            }),
                            "h-9 w-9",
                            item.variant === "default" &&
                              "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                          )}
                        >
                          {/* <item.icon className="h-4 w-4" /> */}
                          <Icon name={item.icon} className="h-4 w-4" />
                          <span className="sr-only">{item.title}</span>
                        </Link>
                      </TooltipTrigger>
                      {item.children ? (
                        <TooltipContent
                          side="right"
                          className="flex flex-col gap-3 justify-center items-start"
                          asChild
                        >
                          <ul>
                            {item.children?.map((child: any, index: any) => (
                              <li key={index}>
                                <Link href={child.href} className="text-white">
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </TooltipContent>
                      ) : (
                        <TooltipContent
                          side="right"
                          className="flex items-center gap-4"
                        >
                          <Link href={item.href}>{item.title}</Link>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  ) : item.children ? (
                    <Accordion key={index} type="single" collapsible>
                      <AccordionItem value={item.title} className="border-b-0">
                        <AccordionTrigger
                          className={cn(
                            buttonVariants({
                              size: "sm",
                              variant: item.href === pathname ? 'default':'ghost',
                            }),
                            "justify-between"
                          )}
                        >
                          <div className="flex items-center justify-start">
                            {item.icon && (
                              // <item.icon
                              //   className="mr-2 h-4 w-4 shrink-0"
                              //   aria-hidden="true"
                              // />
                              <Icon name={item.icon} className="mr-2 h-4 w-4 shrink-0"
                              aria-hidden="true" />
                            )}
                            {item.title}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-0">
                          <div className="ml-7 flex flex-col gap-2">
                            {item.children.map((child: any, index: any) => (
                              <Link
                                key={index}
                                href={child.href || "/"}
                                className={cn(
                                  buttonVariants({
                                    size: "sm",
                                    variant: child.href === pathname ? 'default':'ghost',
                                  }),
                                  "justify-start"
                                )}
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    item.href && (
                      <Link
                        key={index}
                        href={item.href}
                        className={cn(
                          buttonVariants({
                            size: "sm",
                            variant: item.href === pathname ? 'default':'ghost',
                          }),
                          "justify-start"
                        )}
                      >
                        {item.icon && (
                          // <item.icon
                          //   className="mr-2 h-4 w-4 shrink-0"
                          //   aria-hidden="true"
                          // />
                          <Icon name={item.icon} className="mr-2 h-4 w-4 shrink-0"
                              aria-hidden="true" />
                        )}
                        {item.title}
                      </Link>
                    )
                  )
                )}
              </>
            ) : null}
          </nav>
        </div>
      )}
      <Separator />
      {menus?.level2 && menus?.level2.length > 0 && (
        <div
          data-collapsed={isCollapsed}
          className="group flex flex-col gap-4 py-5 data-[collapsed=true]:py-5"
        >
          <nav className="flex flex-col gap-3 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 group-[[data-collapsed=true]]:gap-2">
            {menus?.level2.length ? (
              <>
                {menus?.level2.map((item: any, index) =>
                  isCollapsed ? (
                    <Tooltip key={index} delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Link
                          href="#"
                          className={cn(
                            buttonVariants({
                              variant: item.href === pathname ? 'default':'ghost',
                              size: "icon",
                            }),
                            "h-9 w-9",
                            item.variant === "default" &&
                              "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                          )}
                        >
                          {/* <item.icon className="h-4 w-4" /> */}
                          <Icon name={item.icon} className="h-4 w-4" />
                          <span className="sr-only">{item.title}</span>
                        </Link>
                      </TooltipTrigger>
                      {item.children ? (
                        <TooltipContent
                          side="right"
                          className="flex flex-col gap-3 justify-center items-start"
                          asChild
                        >
                          <ul>
                            {item.children?.map((child: any, index: any) => (
                              <li key={index}>
                                <Link href={child.href} className="text-white">
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </TooltipContent>
                      ) : (
                        <TooltipContent
                          side="right"
                          className="flex items-center gap-4"
                        >
                          <Link href={item.href}>{item.title}</Link>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  ) : item.children ? (
                    <Accordion key={index} type="single" collapsible>
                      <AccordionItem value={item.title} className="border-b-0">
                        <AccordionTrigger
                          className={cn(
                            buttonVariants({
                              size: "sm",
                              variant: item.href === pathname ? 'default':'ghost',
                            }),
                            "justify-between"
                          )}
                        >
                          <div className="flex items-center justify-start">
                            {item.icon && (
                              // <item.icon
                              //   className="mr-2 h-4 w-4 shrink-0"
                              //   aria-hidden="true"
                              // />
                              <Icon name={item.icon} className="mr-2 h-4 w-4 shrink-0"
                              aria-hidden="true" />
                            )}
                            {item.title}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-0">
                          <div className="ml-7 flex flex-col gap-2">
                            {item.children.map((child: any, index: any) => (
                              <Link
                                key={index}
                                href={child.href || "/"}
                                className={cn(
                                  buttonVariants({
                                    size: "sm",
                                    variant: child.href === pathname ? 'default':'ghost',
                                  }),
                                  "justify-start"
                                )}
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    item.href && (
                      <Link
                        key={index}
                        href={item.href}
                        className={cn(
                          buttonVariants({
                            size: "sm",
                            variant: item.href === pathname ? 'default':'ghost',
                          }),
                          "justify-start"
                        )}
                      >
                        {item.icon && (
                          // <item.icon
                          //   className="mr-2 h-4 w-4 shrink-0"
                          //   aria-hidden="true"
                          // />
                          <Icon name={item.icon} className="mr-2 h-4 w-4 shrink-0"
                              aria-hidden="true" />
                        )}
                        {item.title}
                      </Link>
                    )
                  )
                )}
              </>
            ) : null}
          </nav>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
