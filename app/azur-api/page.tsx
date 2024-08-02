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

export default async function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <AzurApiTest />
    </section>
  )
}
