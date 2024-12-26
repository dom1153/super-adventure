import { getFileContent } from "@/lib/myutils"
import MTJ3Basic from "@/components/other/mythreejsjouney/MTJ3Basic"

export default function IndexPage() {
  const fileContent = getFileContent(
    "./components/other/mythreejsjouney/snippets"
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
