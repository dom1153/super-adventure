"use server"

import { getFileContent } from "@/lib/serverutils"
import MTJ3Basic from "@/components/other/mythreejsjourney/MTJ3Basic"

export default async function IndexPage() {
  const fileContent = getFileContent(
    "./components/other/mythreejsjourney/snippets"
  )

  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2"></div>
        {fileContent.map((content) => (
          <MTJ3Basic
            key={content.fileName}
            title={content.fileName}
            code={content.code}
          />
        ))}
      </section>
    </>
  )
}
