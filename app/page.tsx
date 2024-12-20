import React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

function ListOfLinks({ items }: { items?: NavItem[] }) {
  return (
    <>
      {items?.length ? (
        <nav className="flex flex-col gap-4">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  <Button>{item.title}</Button>
                </Link>
              )
          )}
        </nav>
      ) : null}
    </>
  )
}

function NavCard() {
  return (
    <Card className="p-8">
      <h2 className="text-xl mb-4">Links:</h2>
      <ListOfLinks items={siteConfig.mainNav} />
    </Card>
  )
}

export default async function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Super Adventure
        </h1>
        <p>A collection of tools and experiments</p>
        <p>See links in top navigation bar</p>
        {false && <NavCard />}
      </div>
    </section>
  )
}
