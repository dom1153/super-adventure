import { promises as fs } from "fs"
import React, { Fragment } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AzurApiTest from "@/components/other/azurapi-test"
import LogViewTest from "@/components/other/logview-test"
import TerminalUiTest from "@/components/other/terminal-ui-test"
import UniqueNameGen from "@/components/other/unique-name-test"
import ScreenRatioTool from "@/components/tools/screen-ratio"

// TODO: consider lazy imports
//       https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading

interface tabProps {
  value: string
  component: React.JSX.Element
  displayName: string
  disabled?: boolean
  default?: boolean
}

export default async function IndexPage() {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8")
  const data = JSON.parse(file)
  const tabs: tabProps[] = [
    {
      value: "unique-name-generator",
      component: <UniqueNameGen />,
      displayName: "Unique Name Generator",
      default: true,
    },
    {
      value: "screen-ratio",
      displayName: "Screen Ratio",
      component: <ScreenRatioTool />,
    },
    {
      value: "log-view",
      component: <LogViewTest />,
      displayName: "Log View",
      disabled: true,
    },
    {
      value: "terminal-ui",
      component: <TerminalUiTest />,
      displayName: "Terminal UI",
      disabled: true,
    },
    {
      value: "azur-api",
      component: <AzurApiTest />,
      displayName: "Azur API Test",
      disabled: false,
      default: true,
    },
    {
      value: "fs-test",
      component: (
        <>
          <div>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
          </div>
        </>
      ),
      displayName: "FileSys Read Test",
      disabled: true,
    },
  ]

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {/* max-w-[980px] */}
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Super-Adventure
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Just demoing stuff
        </p>
        <Tabs
          defaultValue={tabs.find((i) => i.default)?.value || tabs[0].value}
          className=""
        >
          <TabsList>
            {tabs.map((item) => {
              if (item.disabled) return null
              return (
                <TabsTrigger key={item.value} value={item.value}>
                  {item.displayName}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {tabs.map((item) => {
            if (item.disabled) return null
            return (
              <TabsContent key={item.value} value={item.value}>
                {item.component}
              </TabsContent>
            )
          })}
        </Tabs>
      </div>

      {false && (
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
        </div>
      )}
    </section>
  )
}
